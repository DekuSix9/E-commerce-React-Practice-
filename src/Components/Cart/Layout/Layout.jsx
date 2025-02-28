import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";


const Layout = () => {
  return (
    <div>
      <Header />
      <div className="pt-16"> {/* Padding to prevent overlap with fixed navbar */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
