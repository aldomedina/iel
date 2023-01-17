export type Icons = "flecha" | "temperatura" | "logo";

export type IconSize = "sm" | "md" | "lg" | "xl" | "logo";

export type IconProps = {
  className?: string;
  icon: Icons;
  size?: IconSize;
};
