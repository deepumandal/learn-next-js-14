import React, { FC, ReactNode } from "react";

const layout: FC<{
  children: ReactNode;
  Topbar: ReactNode;
  SideBar: ReactNode;
  RightMenu: ReactNode;
}> = ({ children, RightMenu, SideBar, Topbar }) => {
  return (
    <div className="bg-red-300">
      <h1>parallel routes layout</h1>
      {Topbar}
      {children}
      {RightMenu}
      {SideBar}
    </div>
  );
};

export default layout;
