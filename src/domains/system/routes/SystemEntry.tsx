import { Route, Routes } from "react-router";

import { routePath } from "#domains/system/routes/path";
import SystemSmithSchedulerPage from "#domains/system/pages/SystemSmithSchedulerPage";
import SystemAutoSchedulerPage from "#domains/system/pages/SystemAutoSchedulerPage";
import SystemBatchedMemo from "#domains/system/pages/SystemBatchedMemo";

export default function SystemEntry() {
  return (
    <Routes>
      <Route
        path={routePath.SystemSmithScheduler.relative}
        element={<SystemSmithSchedulerPage />}
      />
      <Route
        path={routePath.SystemAutoScheduler.relative}
        element={<SystemAutoSchedulerPage />}
      />
      <Route
        path={routePath.SystemBatchedMemo.relative}
        element={<SystemBatchedMemo />}
      />
    </Routes>
  );
}
