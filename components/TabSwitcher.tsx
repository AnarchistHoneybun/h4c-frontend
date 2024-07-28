import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
import { Home, ChartArea, User } from "lucide-react";

export default function TabSwitcher({className}:{className?:string}){
  return (
    <div className={className}>
      <Dock className="gap-8">
        <DockIcon className="mx-6">
          <Link className="flex gap-1" href="/">
            <Home />
            <>Home</>
          </Link>
        </DockIcon>
        <DockIcon className="mx-6">
          <Link className="flex gap-1" href="/dash">
            <ChartArea />
            <>Dashboard</>
          </Link>
        </DockIcon>
        <DockIcon className="mx-6">
          <Link className="flex gap-1" href="/profile">
            <User />
            <>Profile</>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
};
