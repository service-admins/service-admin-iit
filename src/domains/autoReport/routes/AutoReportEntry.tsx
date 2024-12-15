import { Route, Routes } from "react-router";

import { routePath } from "#domains/autoReport/routes/path";
import AutoReportWorkflowPage from "#domains/autoReport/pages/AutoReportWorkflowPage";
import AutoReportAlimtalkPage from "#domains/autoReport/pages/AutoReportAlimtalkPage";

export default function AutoReportEntry() {
  return (
    <Routes>
      <Route
        path={routePath.AutoReportWorkflow.relative}
        element={<AutoReportWorkflowPage />}
      />
      <Route
        path={routePath.AutoReportAlimtalk.relative}
        element={<AutoReportAlimtalkPage />}
      />
    </Routes>
  );
}
