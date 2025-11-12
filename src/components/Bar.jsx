export default function Bar({ index, height, value, selected }) {
  return (
    <div
      key={index}
      style={{ height: height }}
      className={`rounded-full w-full relative ${
        !selected ? "bg-onSurface" : "bg-primary"
      } text-label-small flex items-center justify-center text-inverseOnSurface ease-in duration-200`}
    >
      <span className="px-1">{value}</span>
    </div>
  );
}
