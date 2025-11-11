import { SidebarCloseIcon } from "lucide-react";
import IconButton from "./IconButton";

export default function SideBar({
  sidebarStatus,
  toggleSidebar,
  setAlgo,
  algo,
}) {
  function changeAlgo(str) {
    setAlgo(str);
  }
  return (
    <div
      className={`absolute h-screen left-0 w-[250px] bg-transparent backdrop-blur-xl z-10 border-r border-r-white/20 ease-in-out duration-150 ${
        sidebarStatus ? "" : "-translate-x-full"
      }`}
    >
      <div className="p-2 flex items-center justify-end">
        <IconButton onClick={() => toggleSidebar()}>
          <SidebarCloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SideBarItem
          text="BubbleSort"
          onClick={() => {
            changeAlgo("BubbleSort");
            toggleSidebar();
          }}
          algo={algo}
        />
        <SideBarItem
          text="InsertionSort"
          onClick={() => {
            changeAlgo("InsertionSort");
            toggleSidebar();
          }}
          algo={algo}
        />
      </div>
    </div>
  );
}

function SideBarItem({ text = "", onClick, algo }) {
  const classes =
    algo == text
      ? "bg-orange-500/25 font-medium text-orange-500 hover:text-orange-400"
      : "bg-black/25";
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`px-4 py-3 rounded-lg fontt text-sm duration-100 ease-in ${classes}`}
    >
      {text}
    </div>
  );
}
