export type NavItem = {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export type StatItem = {
  label: string;
  value: string;
};
