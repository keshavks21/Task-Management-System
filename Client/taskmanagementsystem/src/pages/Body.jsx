import { Outlet } from "react-router-dom";
import Header from "../components/Headers";

const Body = () => {
  return (
    <div className="flex-grow p-4">
        <Header/>
        <Outlet />
    </div>
  );
};

export default Body;
