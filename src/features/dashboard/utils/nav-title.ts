export const enum EPathnameKeys {
  UTILISATEURS = "utilisateurs",
  BASE = "base",
  CONTROLE = "controle",
  WORKFLOW = "workflow",
  ALERTES = "alertes",
  ROLES = "roles",
  PREFERENCES = "preferences",
  CALENDRIER = "calendrier",
}

export const navTitle: Record<
  EPathnameKeys,
  { active: string; helper: string }
> = {
  [EPathnameKeys.UTILISATEURS]: {
    active: "Utilisateurs",
    helper: "Liste des utilisateurs",
  },
  [EPathnameKeys.BASE]: {
    active: "Base",
    helper: "",
  },
  [EPathnameKeys.CONTROLE]: {
    active: "Controle",
    helper: "Gestion des sociétés",
  },
  [EPathnameKeys.WORKFLOW]: {
    active: "Workflow",
    helper: "",
  },
  [EPathnameKeys.ALERTES]: {
    active: "Alertes",
    helper: "",
  },
  [EPathnameKeys.ROLES]: {
    active: "Roles",
    helper: "",
  },
  [EPathnameKeys.PREFERENCES]: {
    active: "Preferences",
    helper: "",
  },
  [EPathnameKeys.CALENDRIER]: {
    active: "Calendrier",
    helper: "",
  },
};
