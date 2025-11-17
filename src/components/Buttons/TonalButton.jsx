export default function TonalButton({
  text = "Label",
  children,
  size = "small",
  icon = false,
  onClick,
  className = "",
  disabled,
  active,
}) {
  return (
    <div
      className={`select-none rounded-full py-1 ease-in duration-200 flex items-center justify-center ${className}`}
    >
      <button
        onFocus={active}
        onClick={onClick}
        disabled={disabled}
        className={`bg-secondaryContainer text-onSecondaryContainer hover:bg-secondaryContainer/98 outline-secondaryContainer flex items-center justify-center rounded-full gap-2 px-4 py-2.5 outline-offset-2 flex-1 active:rounded-lg disabled:bg-onSurface/10 disabled:text-onSurface/50`}
      >
        {icon ? children : null}
        <span className="text-label-large">{text}</span>
      </button>
    </div>
  );
}
