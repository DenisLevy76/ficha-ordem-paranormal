import { useSession, signIn, signOut } from "next-auth/react";
import { AvatarComponent } from "../AvatarComponent";

export const HeaderComponent: React.FC = () => {
  const { data } = useSession();

  return (
    <header className="flex flex-1 items-center justify-between bg-grey-700 py-4 px-5 border-b border-grey-600 ">
      <h1 className="text-xl font-bold">TabletOP RPG</h1>
      <div className="flex items-center gap-2">
        {data ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <button onClick={() => signIn("google")}>Login</button>
        )}
        <AvatarComponent variant="Circle" />
      </div>
    </header>
  );
};