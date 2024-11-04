import { useEffect } from "react";
import { getWorkByIdFx } from "../../../../../entities/workers/effects";
import { useParams } from "react-router-dom";
import { useUnit } from "effector-react";
import {
  isLoadingWorker,
  workerStore,
} from "../../../../../entities/workers/worker";
import EditionWorker from "../../../components/edition-content/edition-worker";
import Loader from "../../../../../shared/ui/loader/loader";

const DashboardEdition = () => {
  const { id } = useParams();
  const worker = useUnit(workerStore);
  const isLoading = useUnit(isLoadingWorker);

  useEffect(() => {
    if (id) {
      getWorkByIdFx(Number(id));
    }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return worker && <EditionWorker worker={worker} />;
};

export default DashboardEdition;
