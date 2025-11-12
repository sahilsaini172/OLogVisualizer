import { Menu, SidebarOpenIcon } from "lucide-react";
import IconButton from "./Buttons/IconButton";

export default function Navbar({ toggleSidebar, sidebarStatus }) {
  return (
    <div className="p-1 py-2.5 flex items-center sticky justify-center z-11 bg-surface backdrop-blur-sm">
      <div className="absolute left-1">
        <IconButton onClick={toggleSidebar}>
          {sidebarStatus ? <SidebarOpenIcon size={24} /> : <Menu size={24} />}
        </IconButton>
      </div>
      <div className="flex flex-col text-onSurface">
        <h1 className=" text-brand">oLog Visualizer</h1>
        <p className=" text-onPrimaryContainer text-plain">
          Algorithm Visualizer
        </p>
      </div>
    </div>
  );
}
