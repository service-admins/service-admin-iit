import { Route, Routes } from "react-router";

import { routePath } from "#domains/setting/routes/path";
import SettingRefundPage from "#domains/setting/pages/SettingRefundPage";
import SettingAppPage from "#domains/setting/pages/SettingAppPage";

export default function SettingEntry() {
  return (
    <Routes>
      <Route
        path={routePath.SettingRefund.relative}
        element={<SettingRefundPage />}
      />
      <Route
        path={routePath.SettingApp.relative}
        element={<SettingAppPage />}
      />
    </Routes>
  );
}
