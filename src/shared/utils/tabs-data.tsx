import SocientContent from "../../features/dashboard/components/societe-content/socient-content";
import { ITabsData } from "../ui/tabs/tabs";

export const tabsData: ITabsData[] = [
  {
    id: 1,
    isActive: true,
    title: "Société",
    children: <SocientContent />,
  },
  {
    id: 2,
    isActive: false,
    title: "Commissaires contrôleurs",
    children: <div>tabs2</div>,
  },
  {
    id: 3,
    isActive: false,
    title: "CRCA",
    children: <div>tabs3</div>,
  },
  {
    id: 4,
    isActive: false,
    title: "Paramètres de contrôle",
    children: <div>tabs4</div>,
  },
];
