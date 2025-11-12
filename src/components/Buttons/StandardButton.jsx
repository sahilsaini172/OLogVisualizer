export default function StandardButtonS({
  text = "Label",
  children,
  icon = false,
  onClick,
  className = "",

}) {
  return (
    <div
      className={`rounded-full py-1 ease-in duration-200 flex items-center justify-center ${className}`}
    >
      <button
        onClick={onClick}
        className={`bg-primary text-onPrimary hover:bg-primary/98 outline-primary flex items-center justify-center rounded-full gap-2 px-4 py-2.5 outline-offset-2 flex-1 active:rounded-lg`}
      >
        {icon ? children : null}
        <span className="text-onPrimary text-label-large">{text}</span>
      </button>
    </div>
  );
}