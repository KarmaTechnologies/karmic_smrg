import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  const mergedClassName = className ? `container ${className}` : "container";
  return <div className={mergedClassName}>{children}</div>;
}