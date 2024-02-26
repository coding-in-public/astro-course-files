import type { ReactNode } from "react";

import Katie from "../assets/image.jpg";

const ReactWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>inside wrapper</p>
      <img src={Katie.src} alt="" />
      {children}
    </div>
  );
};
export default ReactWrapper;
