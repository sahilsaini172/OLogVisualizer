export default function IndexRow({ count = 1 }) {
  const renderIndices = () => {
    const indices = [];
    for (let i = 0; i < count; i++) {
      indices.push(
        <span key={i} className="px-1 text-label-large w-full">
          {i}
        </span>
      );
    }
    return indices;
  };
  return (
    <div className="items-baseline flex justify-between gap-0.5 text-center py-2 text-onSurface">
      {renderIndices()}
    </div>
  );
}
