import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="w-[1440px]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
