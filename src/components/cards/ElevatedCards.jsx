import { Children, useState } from "react";

export default function ElevatedCard({ children,className }) {
  return (
    <div
      className={`bg-surfaceContainer-low rounded-medium p-4 shadow-elevation1 hover:shadow-elevation2 ease-in duration-100 ${className}`}
    >
      {children}
    </div>
  );
}
