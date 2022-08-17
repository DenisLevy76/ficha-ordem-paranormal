import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cx from "classnames";
import { useSession } from "next-auth/react";
import React, { Fragment } from "react";

type Props = {
  variant: "Circle" | "Rounded";
  isOnline?: boolean;
};

export const AvatarComponent: React.FC<Props> = ({
  variant,
  isOnline = false,
}) => {
  const { data } = useSession();

  const imageURL = data ? (data.user?.image as string) : undefined;

  return (
    <Fragment>
      <AvatarPrimitive.Root className="relative inline-flex h-10 w-10">
        <AvatarPrimitive.Image
          src={imageURL}
          alt="Avatar"
          className={cx(
            "h-full w-full object-cover",
            {
              Circle: "rounded-full",
              Rounded: "rounded",
            }[variant]
          )}
        />
        {isOnline && (
          <div
            className={cx(
              "absolute bottom-0 right-0 h-2 w-2",
              {
                Circle: "-translate-x-1/2 -translate-y-1/2",
                Rounded: "",
              }[variant]
            )}
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
        )}
        <AvatarPrimitive.Fallback
          className={cx(
            "flex h-full w-full items-center justify-center bg-white dark:bg-gray-800",
            {
              Circle: "rounded-full",
              Rounded: "rounded",
            }[variant]
          )}
          delayMs={600}
        >
          <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
            {data?.user?.name ? data.user.name[0] : "X"}
          </span>
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    </Fragment>
  );
};
