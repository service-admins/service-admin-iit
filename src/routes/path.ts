export const routePath = {
  AutoReport: {
    get absolute() {
      return this.relative;
    },
    relative: "/auto-report",
  },
} as const;
