import { Outlet } from "react-router";
import Sidebar from "./components/layout/sidebar";

function App() {
  return (
    <div className="flex h-screen w-full bg-light-grey">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
