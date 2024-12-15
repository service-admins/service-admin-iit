import { routePath as _routePath } from "#routes/path";

export const routePath = {
  AutoReportWorkflow: {
    get absolute() {
      return `${_routePath.AutoReport.relative}${this.relative}`;
    },
    relative: "/workflow",
  },
  AutoReportAlimtalk: {
    get absolute() {
      return `${_routePath.AutoReport.relative}${this.relative}`;
    },
    relative: "/alimtalk",
  },
} as const;