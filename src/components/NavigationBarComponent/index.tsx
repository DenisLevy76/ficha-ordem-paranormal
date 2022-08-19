import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavigationBarComponentProps } from "./types";

export const NavigationBarComponent: React.FC<NavigationBarComponentProps> = ({
  links,
}) => {
  const { asPath } = useRouter();
  return (
    <nav className="w-full flex justify-center">
      <ul className="flex gap-4">
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            <a
              className={classNames(
                asPath === link.url ? "font-bold" : "font-normal",
                "text-lg"
              )}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
