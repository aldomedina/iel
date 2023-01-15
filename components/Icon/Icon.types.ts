export type Icons = "flecha" | "temperatura";

export type IconSize = "sm" | "md" | "lg" | "xl";

export type IconProps = {
  className?: string;
  icon: Icons;
  size?: IconSize;
};
