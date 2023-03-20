import classNames from "classnames";
import type { ReactElement } from "react";

interface Props {
  className?: string;
  classNameWrapper?: string;
  text?: string;
  href: string;
  children?: ReactElement[];
}

const NavLink = ({
  className,
  classNameWrapper,
  text,
  href,
  children,
}: Props) => {
  if (!children && !text)
    throw new Error("NavLink requires either text or children.");

  return (
    <div
      className={classNames(
        "rounded-full border bg-off-black",
        "transition duration-500",
        classNameWrapper
      )}
    >
      <a
        href={href}
        className={classNames(
          "text-fill-transparent bg-size-200 bg-pos-anim block py-2 px-5",
          "text-center font-bold uppercase transition-all duration-500",
          className
        )}
      >
        {children ? children : text}
      </a>
    </div>
  );
};

export default NavLink;
