import { useMemo } from "react";
import { useTeam } from "./Team";

const useFormatedTable = (teamName) => {
  const { scan } = useTeam();

  const scanFilter = useMemo(() => {
    if (!scan.length) return false;
    return scan.filter((el) => el.teamName === teamName);
  }, [scan]);
  const totalScan = useMemo(() => {
    if (!scanFilter.length) return 0;
    return scanFilter[scanFilter.length - 1].totalScans;
  }, [scanFilter]);
  const data = useMemo(() => {
    if (!scanFilter.length) return [];
    return scanFilter.filter((el) => !el.totalScans).reverse();
  }, [scanFilter]);
  const average = useMemo(() => {
    return totalScan / data.length;
  }, [data]);

  return [data, totalScan, average];
};

export default useFormatedTable;
