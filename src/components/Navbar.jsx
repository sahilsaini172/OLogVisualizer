import { SidebarOpenIcon } from "lucide-react";
import IconButton from "./IconButton";

export default function Navbar({ toggleSidebar }) {
  return (
    <div className="p-4 flex items-center sticky justify-center z-9 bg-black/5 backdrop-blur-sm">
      <div>
        <IconButton onClick={toggleSidebar}>
          <SidebarOpenIcon />
        </IconButton>
      </div>
      <h1 className="flex-1 text-center text-lg font-light z-2">
        O<span className="font-black text-2xl text-orange-400">Log</span>
        Visualizer
      </h1>
    </div>
  );
}
