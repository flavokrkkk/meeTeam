import SocientContent from "../../features/dashboard/components/societe-content/socient-content";
import { ITabsData } from "../ui/tabs/tabs";
import CommissariesContent from "../../features/dashboard/components/commissaries-content/commissaries-content";
import MembersContent from "../../features/dashboard/components/members-content/members-content";
import ParametresContent from "../../features/dashboard/components/parametres-content/parametres-content";

export const commissariesColumns = [
  {
    id: 1,
    title: "Noms",
    key: "noms",
  },
  {
    id: 2,
    title: "Prenoms",
    key: "prenoms",
  },
  {
    id: 3,
    title: "N° Pièce d'identification",
    key: "ids",
  },
  {
    id: 4,
    title: "Date de délivrence",
    key: "date",
  },
  {
    id: 5,
    title: "Lieu de délivrence",
    key: "delivrence",
  },
  {
    id: 6,
    title: "E-mail",
    key: "email",
  },
  {
    id: 7,
    title: "URL WebDAV",
    key: "webDav",
  },
  {
    id: 8,
    title: "Numéro Tél.",
    key: "phone",
  },
];

export const membersColumns = [
  {
    id: 1,
    title: "Sociétés",
    key: "noms",
  },
  {
    id: 2,
    title: "Pays",
    key: "pays",
  },
  {
    id: 3,
    title: "Branches",
    key: "email",
  },
  {
    id: 4,
    title: "Branches",
    key: "branches",
  },
  {
    id: 5,
    title: "Email",
    key: "email",
  },
  {
    id: 6,
    title: "Telephone",
    key: "telephone",
  },
  {
    id: 6,
    title: "Site web",
    key: "siteWeb",
  },
  {
    id: 6,
    title: "Commissaire respo",
    key: "commissaireRespo",
  },
  {
    id: 6,
    title: "Nombre de controle",
    key: "nombreDeControle",
  },
];

export const socientColumns = [
  {
    id: 1,
    title: "Sociétés",
    key: "noms",
  },
  {
    id: 2,
    title: "Pays",
    key: "pays",
  },
  {
    id: 3,
    title: "Branches",
    key: "email",
  },
  {
    id: 4,
    title: "Branches",
    key: "branches",
  },
  {
    id: 5,
    title: "Email",
    key: "email",
  },
  {
    id: 6,
    title: "Telephone",
    key: "telephone",
  },
  {
    id: 6,
    title: "Site web",
    key: "siteWeb",
  },
  {
    id: 6,
    title: "Commissaire respo",
    key: "commissaireRespo",
  },
  {
    id: 6,
    title: "Nombre de controle",
    key: "nombreDeControle",
  },
];

export const utilisateursColumns = [
  {
    id: 1,
    title: "Noms",
    key: "noms",
  },
  {
    id: 2,
    title: "Prénoms",
    key: "prénoms",
  },
  {
    id: 3,
    title: "E-mails",
    key: "email",
  },
  {
    id: 4,
    title: "Téléphone",
    key: "phone",
  },
  {
    id: 5,
    title: "Statut",
    key: "statut",
  },
];

export const baseColumns = [
  {
    id: 1,
    key: "libele",
    title: "Libellé",
  },
  {
    id: 2,
    key: "codeIso",
    title: "Code ISO",
  },
  {
    id: 3,
    key: "description",
    title: "Description",
  },
];

export const parametrsColumns = [
  {
    id: 1,
    key: "noms",
    title: "Noms",
  },
  {
    id: 2,
    key: "prenoms",
    title: "Prenoms",
  },
  {
    id: 3,
    key: "phone",
    title: "Numéro Tél.",
  },
  {
    id: 4,
    key: "email",
    title: "E-mail",
  },
  {
    id: 5,
    key: "date",
    title: "Date d'ajout",
  },
  {
    id: 6,
    key: "profil",
    title: "Profil",
  },
];

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
    children: <CommissariesContent />,
  },
  {
    id: 3,
    isActive: false,
    title: "CRCA",
    children: <ParametresContent />,
  },
  {
    id: 4,
    isActive: false,
    title: "Paramètres de contrôle",
    children: <MembersContent />,
  },
];
