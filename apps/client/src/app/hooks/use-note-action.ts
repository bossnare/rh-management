import { handleWait } from '@/shared/utils/handle-wait';
import { useNavigate } from 'react-router-dom';

export const useNoteActions = () => {
  const navigate = useNavigate();

  const openNewNote = () => {
    handleWait(() => {
      handleWait(async () => {
        await navigate('/note/new');
      }, 600);
    }, 200);
  };

  const openEditNote = () => {};

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText();

    sessionStorage.setItem('draft:clipboard', text);
    handleWait(() => navigate('/note/new?source=clipboard'), 200);
  };

  const openCreateFromFile = () => {
    handleWait(() => navigate('/note/new?source=file'), 200);
  };

  return { openNewNote, pasteFromClipboard, openEditNote, openCreateFromFile };
};
