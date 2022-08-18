import { useSession, signIn, signOut } from "next-auth/react";
import { AvatarComponent } from "../AvatarComponent";
import { ButtonComponent } from "../ButtonComponent";

export const HeaderComponent: React.FC = () => {
  const { data } = useSession();

  return (
    <header className="flex flex-1 items-center justify-between bg-grey-700 py-4 px-16 border-b border-grey-600 ">
      <h1 className="text-xl font-bold">TabletOP RPG</h1>
      <div className="flex items-center gap-2">
        {data ? (
          <ButtonComponent onClick={() => signOut()}>Logout</ButtonComponent>
        ) : (
          <ButtonComponent onClick={() => signIn("google")}>
            Login
          </ButtonComponent>
        )}
        <AvatarComponent variant="Circle" />
      </div>
    </header>
  );
};
