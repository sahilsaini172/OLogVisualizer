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
      className={`absolute top-16 h-full left-0 w-[250px] bg-surfaceContainer-low z-10 ease-in-out duration-150 overflow-hidden shadow-elevation2 ${
        sidebarStatus ? "" : "-translate-x-full"
      }`}
    >
      <div className="p-2 relative flex items-center justify-end"></div>
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
        <div className="flex flex-col absolute bottom-0 p-4 text-center w-full bg-black left-0 gap-2">
          <h3 className="text-neutral-400">
            For{" "}
            <abbr
              title="Bachelors of Computer Application"
              className="text-orange-400"
            >
              BCA
            </abbr>
          </h3>
          <p className="text-xs text-neutral-300">with ❤️ Sahil Saini</p>
        </div>
      </div>
    </div>
  );
}

function SideBarItem({ text = "", onClick, algo }) {
  const classes =
    algo == text
      ? "bg-primaryContainer text-label-large text-onPrimaryContainer"
      : "bg-surfaceContianer-low text-label-large text-onSurface hover:bg-surfaceContainer";
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`px-4 py-3 rounded-full duration-150 ease-in ${classes}`}
    >
      {text}
    </div>
  );
}
