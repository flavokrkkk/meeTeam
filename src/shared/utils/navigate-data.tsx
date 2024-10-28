import DirectionIcon from "../../assets/social/direcrtion-icon";
import FolderIcon from "../../assets/social/folder-icon";
import ProjectIcon from "../../assets/social/project-icon";
import ProtectionIcon from "../../assets/social/protection-icon";
import SettingIcon from "../../assets/social/setting-icon";

export interface INavigateData {
  id: number;
  icon?: JSX.Element;
  isActive?: boolean;
  pathname?: string;
  title: string;
  subroutes?: INavigateData[];
}

export const navigateData: Array<INavigateData> = [
  {
    id: 1,
    icon: <SettingIcon />,
    title: "Configuration",
    isActive: false,
    subroutes: [
      {
        id: 1,
        pathname: "/dashboard/utilisateurs",
        title: "Utilisateurs",
      },
      {
        id: 2,
        pathname: "/dashboard/base",
        title: "Base",
      },
      {
        id: 3,
        pathname: "/dashboard/controle",
        title: "Contrôle",
      },
      {
        id: 4,
        pathname: "/dashboard/workflow",
        title: "Workflow",
      },
      {
        id: 5,
        pathname: "/dashboard/alertes",
        title: "Alertes",
      },
      {
        id: 6,
        pathname: "/dashboard/roles",
        title: "Rôles",
      },
      {
        id: 7,
        pathname: "/dashboard/preferences",
        title: "Préferences",
      },
      {
        id: 8,
        pathname: "/dashboard/calendrier",
        title: "Calendrier",
      },
    ],
  },
  {
    id: 2,
    icon: <FolderIcon />,
    title: "Dossier",
    isActive: false,
  },
  {
    id: 3,
    icon: <ProjectIcon />,
    isActive: false,
    title: "Projet",
  },
  {
    id: 4,
    icon: <DirectionIcon />,
    title: "Direction Technique",
    isActive: false,
  },
  {
    id: 5,
    icon: <ProtectionIcon />,
    title: "Protection",
    isActive: false,
  },
];
