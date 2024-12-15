import { Route, Routes } from "react-router";

import { routePath } from "#routes/path";
import AutoReportEntry from "#domains/autoReport/routes/AutoReportEntry";
import SystemEntry from "#domains/system/routes/SystemEntry";
import SettingEntry from "#domains/setting/routes/SettingEntry";

function App() {
  return (
    <Routes>
      <Route
        path={`${routePath.AutoReport.relative}/*`}
        element={<AutoReportEntry />}
      />
      <Route
        path={`${routePath.System.relative}/*`}
        element={<SystemEntry />}
      />
      <Route
        path={`${routePath.Setting.relative}/*`}
        element={<SettingEntry />}
      />
    </Routes>
  );
}

export default App;
