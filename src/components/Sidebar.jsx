import { Cross, Menu, SidebarCloseIcon } from "lucide-react";
import IconButton from "./IconButton";

export default function SideBar({ sidebarStatus, toggleSidebar }) {
  return (
    <div
      className={`absolute h-full left-0 w-[250px] bg-transparent backdrop-blur-xl z-10 border-r border-r-white/20 ease-in-out duration-150 ${
        sidebarStatus ? "" : "-translate-x-full"
      }`}
    >
      <div className="p-2 flex items-center justify-end">
        <IconButton onClick={() => toggleSidebar()}>
          <SidebarCloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SideBarItem text="HOME" />
      </div>
    </div>
  );
}

function SideBarItem({ text = "" }) {
  return (
    <div className="px-4 py-3 bg-orange-500/10 text-orange-500 rounded-lg fontt hover:bg-orange-500/25 text-sm hover:text-orange-400 border border-orange-500 duration-100 ease-in">
      <a href="">{text}</a>
    </div>
  );
}
