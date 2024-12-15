import { routePath as _routePath } from "#routes/path";

export const routePath = {
  SettingRefund: {
    get absolute() {
      return `${_routePath.Setting.absolute}${this.relative}`;
    },
    relative: "/refund",
  },
  SettingApp: {
    get absolute() {
      return `${_routePath.Setting.absolute}${this.relative}`;
    },
    relative: "/app",
  },
} as const;
