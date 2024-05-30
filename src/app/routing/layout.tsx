import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* <h1 className="my-10 text-2xl">hey this is layout</h1> */}
      {children}
    </div>
  );
};

export default Layout;
