export type UserRole = "author" | "reviewer" | "editor" | "discussion-host";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
