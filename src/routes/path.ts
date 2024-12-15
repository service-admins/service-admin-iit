export const basePath = "/iit";

export const routePath = {
  AutoReport: {
    get absolute() {
      return `${basePath}${this.relative}`;
    },
    relative: "/auto-report",
  },
  System: {
    get absolute() {
      return `${basePath}${this.relative}`;
    },
    relative: "/system",
  },
  Setting: {
    get absolute() {
      return `${basePath}${this.relative}`;
    },
    relative: "/setting",
  },
} as const;
