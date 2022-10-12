export interface NavItemInterface {
  name?: string;
  label?: string;
  children?: Array<NavItemInterface>;
  href?: string;
}
