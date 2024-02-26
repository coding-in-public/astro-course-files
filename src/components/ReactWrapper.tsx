import type { ReactNode } from "react";

const ReactWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Begin React Image</p>
      {children}
      <p>End React Image</p>
    </div>
  );
};
export default ReactWrapper;
