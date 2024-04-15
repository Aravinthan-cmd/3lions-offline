import "./topnav.scss";
import UserInfo from "../user-info/UserInfo";
import { data } from "../../constants";

const TopNav = () => {

  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  const handleStartClick = () => {
    fetch("http://192.168.0.100:4000/sensor/getValue?value=1", { method: "GET" })
      .then(response => {
        if (response.ok) {
          console.log("started...")
        }
      })
      .catch(error => {
        console.error("Error starting sensor:", error);
      });
  };

  const handleStopClick = () => {
    fetch("http://192.168.0.100:4000/sensor/getValue?value=0", { method: "GET" })
      .then(response => {
        if (response.ok) {
          console.log("stoped...")
        }
      })
      .catch(error => {
        console.error("Error stopping sensor:", error);
      });
  };


  return (
    <div className="topnav">
      <UserInfo user={data.user} />
      
      {/* <div className="buttons">
      <button type="button" onClick={handleStartClick} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start</button>
      <button type="button" onClick={handleStopClick} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Stop</button>
      </div> */}
     
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default TopNav;
