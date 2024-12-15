import { Route, Routes } from "react-router";

import { routePath } from "#routes/path";
import AutoReportEntry from "#domains/autoReport/routes/AutoReportEntry";
import SystemEntry from "#domains/system/routes/SystemEntry";
import SettingEntry from "#domains/setting/routes/SettingEntry";

function App() {
  return (
    <Routes>
      <Route
        path={`${routePath.AutoReport.absolute}/*`}
        element={<AutoReportEntry />}
      />
      <Route
        path={`${routePath.System.absolute}/*`}
        element={<SystemEntry />}
      />
      <Route
        path={`${routePath.Setting.absolute}/*`}
        element={<SettingEntry />}
      />
    </Routes>
  );
}

export default App;
