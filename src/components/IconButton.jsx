export default function IconButton({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="p-2 hover:bg-white/10 w-fit rounded-lg duration-100 ease-in"
    >
      {children}
    </div>
  );
}
