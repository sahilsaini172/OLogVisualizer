import { Icon, Plus } from "lucide-react";

export default function NavigationDrawer({
  sidebarStatus,
  toggleSidebar,
  setAlgoSelected,
  algoSelected,
}) {
  const slide = () => {
    if (!sidebarStatus) return "-translate-x-full";
  };
  return (
    <div
      className={`absolute z-1 top-17 left-0 bg-surfaceContainer-low h-screen shadow-elevation1 rounded-e-2xl w-[360px] p-4 flex flex-col ease-in transition-all duration-150 ${slide()}`}
    >
      <h2 className="text-title-small text-onSurfaceVarient p-4">Algorithms</h2>
      <div className="flex flex-col gap-2">
        <NavigationDrawerItem
          index={0}
          label="Bubble Sort"
          onClick={() => {
            setAlgoSelected(0);
            toggleSidebar();
          }}
          algoSelected={algoSelected}
        />
        <NavigationDrawerItem
          index={1}
          label="Insertion Sort"
          onClick={() => {
            setAlgoSelected(1);
            toggleSidebar();
          }}
          algoSelected={algoSelected}
        />
        <NavigationDrawerItem
          index={2}
          label="Selection Sort"
          onClick={() => {
            setAlgoSelected(2);
            toggleSidebar();
          }}
          algoSelected={algoSelected}
        />
      </div>
    </div>
  );
}

export function NavigationDrawerItem({
  label = "Label",
  algoSelected,
  badgeLabel = "",
  icon,
  index,
  onClick,
}) {
  let isActive = () => {
    if (index == algoSelected) {
      return "text-onSecondaryContainer bg-secondaryContainer";
    } else {
      return "text-onSurfaceVarient";
    }
  };
  return (
    <div
      onClick={onClick}
      className={`flex p-4 items-center justify-between gap-2 rounded-full text-label-large ease-in duration-100 ${isActive()}`}
    >
      <div className="flex items-center gap-2">
        <div>{icon}</div>
        <p>{label}</p>
      </div>
      <span className="px-4">{index == algoSelected ? badgeLabel : null}</span>
    </div>
  );
}
