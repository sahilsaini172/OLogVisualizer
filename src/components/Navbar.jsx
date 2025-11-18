import { Menu, SidebarOpenIcon } from "lucide-react";
import IconButton from "./Buttons/IconButton";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ toggleSidebar, sidebarStatus }) {
  return (
    <div className="px-4 py-2.5 flex items-center justify-between sticky z-11 bg-surface backdrop-blur-sm">
      <IconButton onClick={toggleSidebar}>
        {sidebarStatus ? <SidebarOpenIcon size={24} /> : <Menu size={24} />}
      </IconButton>
      <div className="flex flex-col text-onSurface">
        <h1 className=" text-brand">oLog Visualizer</h1>
        <p className=" text-onPrimaryContainer text-plain">
          Algorithm Visualizer
        </p>
      </div>
      <DarkModeToggle />
    </div>
  );
}
