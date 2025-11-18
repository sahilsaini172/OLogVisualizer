export default function SelectionSortBar({
  index,
  height,
  value,
  selected,
  secondSelected,
  betweenBars,
  selectedBar,
  secondSelectedBar,
}) {
  const getBarColor = () => {
    if (selected) return "bg-[#56FF00]";
    if (secondSelected) return "bg-blue-500";
    if (betweenBars) return "bg-orange-500";
    return "bg-onSurface";
  };

  const getIndex = () => {
    if (selectedBar) return selectedBar;
    if (secondSelectedBar) return secondSelectedBar;
    if (betweenBars) return betweenBars;
  };

  return (
    <div
      key={index}
      style={{ height: height }}
      className={`rounded-full w-full relative ${getBarColor()} text-label-small flex items-center justify-center text-inverseOnSurface ease-in duration-100`}
    >
      <span>{value}</span>
      <span className="absolute -top-5 text-onSurface">{getIndex()}</span>
    </div>
  );
}
