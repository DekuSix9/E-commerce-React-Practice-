import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";


const Layout = () => {
    return (
        <div>
            
            <Header></Header>
            <div className="mt-24"> 
        <Outlet />
      </div>
           
        </div>
    );
};

export default Layout;