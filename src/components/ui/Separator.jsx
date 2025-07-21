import React from "react";

function Separator({ className = "", orientation = "horizontal", decorative = true, ...props }) {
  const baseClass = "shrink-0 bg-border";
  const directionClass = orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]";
  const finalClass = `${baseClass} ${directionClass} ${className}`;

  return <div role={decorative ? "presentation" : "separator"} className={finalClass} {...props} />;
}

export default Separator;
