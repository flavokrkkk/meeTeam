import { useMemo } from "react";
import Table from "../../../../shared/ui/table/table";
import { ITableCols } from "../../../../shared/utils/table-rows";
import { useUnit } from "effector-react";
import { workersStore } from "../../../../entities/workers/worker";

const SocientContent = () => {
  const workers = useUnit(workersStore);

  const tableColumns: ITableCols[] = useMemo(
    () => [
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
      {
        id: 6,
        title: "Actions",
        key: "actions",
      },
    ],
    [workers]
  );

  const dataRowTable = useMemo(() => {
    return workers.reduce(
      (acc: Array<Record<string, string | number | boolean>>, item) => {
        acc.push({
          id: item.profile.employee_id,
          noms: item.profile.first_name,
          pays: item.profile.last_name,
          branches: item.profile.personal_email ?? "",
          email: item.profile.mobile_phone,
          telephone: item.profile.last_name,
          siteWeb: item.profile.last_name,
          commissaireRespo: item.profile.last_name,
          nombreDeControle: item.profile.last_name,
        });
        return acc;
      },
      []
    );
  }, [workers]);
  return (
    <div>
      <Table data={dataRowTable} cols={tableColumns} />
    </div>
  );
};

export default SocientContent;
