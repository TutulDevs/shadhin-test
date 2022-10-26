import { useState } from "react";
import styles from "./Tabs.module.css";
import cn from "classnames";
import { AdminTable } from "../Tables/AdminTable";
import { EmployeeTable } from "../Tables/EmployeeTable";

export const Tabs = ({ className }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {/* tab header/ buttons */}
      <div className={cn(styles.tabHeader)}>
        <button
          className={cn(
            styles.tabHeaderButton,
            tabIndex === 0 && styles.selected
          )}
          type="button"
          onClick={() => setTabIndex(0)}
        >
          Admins
        </button>
        <button
          className={cn(
            styles.tabHeaderButton,
            tabIndex === 1 && styles.selected
          )}
          type="button"
          onClick={() => setTabIndex(1)}
        >
          Employees
        </button>
      </div>

      {/* tab components */}
      <div className="">
        {tabIndex === 0 && <AdminTable />}

        {tabIndex === 1 && <EmployeeTable />}
      </div>
    </div>
  );
};
