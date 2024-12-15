import { Route, Routes } from "react-router";

import AutoReportEntry from "#domains/autoReport/routes/AutoReportEntry";
import { routePath } from "#routes/path";

function App() {
  return (
    <Routes>
      <Route
        path={`${routePath.AutoReport.relative}/*`}
        element={<AutoReportEntry />}
      />
    </Routes>
  );
}

export default App;
