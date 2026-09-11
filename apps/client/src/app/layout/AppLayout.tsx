import { AppLoader } from '@/app/components/AppLoader';
import { BottomBar } from '@/app/components/navigation/TabBar';
import {
  DesktopSidebar,
  MobileSidebar,
} from '@/app/components/navigation/Sidebar';
import { SideOver } from '@/app/components/navigation/SideOver';
import { TopBar } from '@/app/components/navigation/TopBar';
import PullToRefreshWrapper from '@/app/components/pull-to-refresh';
import { useQueryToggle } from '@/shared/hooks/use-query-toggle';
import { fabButtonVariants } from '@/shared/motions/motion.variant';
import { useQueryClient } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ButtonFab } from '../features/notes/ButtonFab';
import { OptionDrawer } from '../features/ui/OptionDrawer';
import { ConfirmDrawer } from '../features/ui/ConfirmDrawer';
import { ConfirmDialog } from '../features/ui/ConfirmDialog';
import { OptionDialog } from '../features/ui/OptionDialog';

export function AppLayout() {
  const queryClient = useQueryClient();
  const handleRefreshNotes = () =>
    queryClient.refetchQueries({
      queryKey: ['notes'],
    });

  // query params state
  const { isOpen: isOpenMobileSidebar, close: closeMobileSidebar } =
    useQueryToggle({ key: 'sidebar', value: 'mobile' });

  const { isOpen: isSelectionMode } = useQueryToggle({
    key: 'selectNotes',
    value: '1',
  });

  const {
    isOpen: isOpenSideOver,
    open: openSideOver,
    close: closeSideOver,
  } = useQueryToggle({
    key: 'sidebar',
    value: 'sideover',
  });

  const {
    isOpen: isOpenCreateOptions,
    close: closeCreateOptions,
    open: openCreateOptions,
  } = useQueryToggle({
    key: 'ui',
    value: 'create',
  });

  const {
    open: openLogout,
    isOpen: isOpenLogout,
    close: closeLogout,
  } = useQueryToggle({
    key: 'logout',
  });

  const { isOpen: isSelectionModeTrash } = useQueryToggle({
    key: 'selectTrash',
    value: '1',
  });

  // local state
  const [mobileSidebarWidth, setMobileSidebarWidth] = useState(0);
  const mobileSidebarRef = useRef<HTMLDivElement | null>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    // get mobile sidebar width
    if (mobileSidebarRef.current) {
      setMobileSidebarWidth(
        mobileSidebarRef.current.getBoundingClientRect().width
      );
    }
  }, []);

  const logoutConfirm = {
    title: 'Log Out ?',
    description:
      "Are you sure you want to log out? You'll need to log in again to access your account.",
    cancelLabel: 'Cancel',
    confirmLabel: 'Yes, Log Out',
  };

  return (
    <>
      {/* logout confirm */}
      <ConfirmDrawer
        showOn="mobile"
        isOpen={isOpenLogout}
        onClose={closeLogout}
        title={logoutConfirm.title}
        description={logoutConfirm.description}
        cancelLabel={logoutConfirm.cancelLabel}
        confirmLabel={logoutConfirm.confirmLabel}
        // onConfirm={}
      />
      <ConfirmDialog
        showOn="desktop"
        isOpen={isOpenLogout}
        onClose={closeLogout}
        title={logoutConfirm.title}
        description={logoutConfirm.description}
        cancelLabel={logoutConfirm.cancelLabel}
        confirmLabel={logoutConfirm.confirmLabel}
        // onConfirm={}
      />

      <div className="relative overflow-hidden">
        {/* loading state on big route change */}
        <AppLoader />
        {/* desktop sidebar */}
        <DesktopSidebar />
        {/* mobile sidebar  */}
        <MobileSidebar
          open={isOpenMobileSidebar}
          close={closeMobileSidebar}
          openLogout={openLogout}
          ref={mobileSidebarRef}
        />{' '}
        {/* main content */}
        <div className="relative transition-transform ease-in-out duration-280 will-change-transform md:duration-260">
          <TopBar
            openSideOver={openSideOver}
            openCreateOptions={openCreateOptions}
          />
          {/* route content */}
          <PullToRefreshWrapper onRefresh={async () => handleRefreshNotes()}>
            <main className="h-screen">
              <Outlet />
            </main>
            {/* subtle overlay */}
            <div className="absolute inset-0 hidden pointer-events-none dark:block bg-primary/1 -z-1"></div>
          </PullToRefreshWrapper>
        </div>
        {/* fab button (create note, long presse -> choice) - mobile only */}
        <AnimatePresence>
          {!isSelectionMode &&
            !isOpenMobileSidebar &&
            pathname !== '/note/trash' && (
              <motion.div
                variants={fabButtonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed bottom-24 md:bottom-12 lg:hidden right-5"
              >
                <ButtonFab openCreateOptions={openCreateOptions} />
              </motion.div>
            )}
        </AnimatePresence>
        {/* Create More Options */}
        <OptionDrawer
          showOn="mobile"
          isOpen={isOpenCreateOptions}
          onClose={closeCreateOptions}
        />
        <OptionDialog
          showOn="desktop"
          isOpen={isOpenCreateOptions}
          onClose={closeCreateOptions}
        />
        {/* quick Editor */}
        {/* mobile */}
        {!isSelectionMode && !isSelectionModeTrash && (
          <BottomBar
            openMobileSidebar={isOpenMobileSidebar}
            mobileSidebarWidth={mobileSidebarWidth}
          />
        )}
        {/* sideOver */}
        <SideOver isOpen={isOpenSideOver} close={closeSideOver} />
      </div>
    </>
  );
}
