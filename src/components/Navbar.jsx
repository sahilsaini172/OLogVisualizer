import { Menu, SidebarOpenIcon } from "lucide-react";
import IconButton from "./Buttons/IconButton";
import DarkModeToggle from "./DarkModeToggle";
import { useDispatch,useSelector } from "react-redux";
import { toggle } from "../redux/sidebarState";


export default function Navbar() {
  const sidebarStatus = useSelector((state) => state.sidebarState.value);
  const dispatch = useDispatch();

  function toggleSidebar() {
    dispatch(toggle());
  }
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
