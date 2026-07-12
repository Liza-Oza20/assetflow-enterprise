// SQLite (Prisma's `sqlite` connector) does not support native enums, so
// Role and Status are stored as plain strings in the database. These
// constants are the single source of truth for the allowed values and
// should be used anywhere the app needs to validate or compare them.

export const ROLES = ["EMPLOYEE", "DEPT_HEAD", "ASSET_MANAGER", "ADMIN"] as const;
export type Role = (typeof ROLES)[number];

export const ROLE = {
  EMPLOYEE: "EMPLOYEE",
  DEPT_HEAD: "DEPT_HEAD",
  ASSET_MANAGER: "ASSET_MANAGER",
  ADMIN: "ADMIN",
} as const satisfies Record<string, Role>;

export const STATUSES = ["ACTIVE", "INACTIVE"] as const;
export type Status = (typeof STATUSES)[number];

export const STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const satisfies Record<string, Status>;

export function isRole(value: string): value is Role {
  return (ROLES as readonly string[]).includes(value);
}

export function isStatus(value: string): value is Status {
  return (STATUSES as readonly string[]).includes(value);
}
