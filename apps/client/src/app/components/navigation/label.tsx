import {
  Archive,
  Bell,
  Hash,
  Home,
  PowerOff,
  Search,
  Settings,
  Trash2,
  UserCog,
  UserRoundX,
} from 'lucide-react';

const kebabMenuLabel = [
  {
    id: 1,
    label: 'Workspace settings',
    icon: Settings,
    href: '/app/settings/workspace',
  },
  {
    id: 2,
    label: 'Account settings',
    icon: UserCog,
    href: '/app/settings/account',
  },
  {
    id: 3,
    label: 'Archives',
    icon: Archive,
    href: '/app/archives',
  },
  {
    id: 4,
    label: 'Trash',
    icon: Trash2,
    href: '/note/trash',
  },
];

const sideBarLabel = [
  {
    id: 1,
    label: 'Settings',
    icon: Settings,
    route: '/app/settings',
  },
  {
    id: 4,
    label: 'Trash',
    icon: Trash2,
    route: '/app/trash',
  },
  {
    id: 5,
    label: 'Log out',
    icon: PowerOff,
    route: '#',
  },
];

const desctructiveLabel = [
  {
    id: 1,
    danger: true,
    label: 'Delete my account',
    icon: UserRoundX,
    route: '/app/tags',
  },
];

const tabLabel = [
  {
    id: 1,
    label: 'Accueil',
    icon: Home,
    route: '/app',
  },
  {
    id: 2,
    label: 'Rechercher',
    icon: Search,
    route: '/app/search',
  },
  {
    id: 3,
    label: 'Notofications',
    icon: Bell,
    route: '/app/notification',
  },
  {
    id: 4,
    label: 'Compte',
    icon: Hash,
    route: '/app/tags',
  },
];

export { desctructiveLabel, kebabMenuLabel, sideBarLabel, tabLabel };
