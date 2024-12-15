import { routePath as _routePath } from "#routes/path";

export const routePath = {
  SystemSmithScheduler: {
    get absolute() {
      return `${_routePath.System.absolute}${this.relative}`;
    },
    relative: "/smith-scheduler",
  },
  SystemAutoScheduler: {
    get absolute() {
      return `${_routePath.System.absolute}${this.relative}`;
    },
    relative: "/auto-scheduler",
  },
  SystemBatchedMemo: {
    get absolute() {
      return `${_routePath.System.absolute}${this.relative}`;
    },
    relative: "/batched-memo",
  },
} as const;
