import React, { useState, useEffect, useContext } from "react";
import SidebarNotify from "./SideBarsToggle/SidebarNotify";
import { BlogContext } from "./BlogContext";

const AddedBlogNotify = ({ socket, count }) => {
  const { notifytoggle, toggleNotify } = useContext(BlogContext);


  useEffect(() => {
    const savedNotification = JSON.parse(localStorage.getItem("blogNotify"));
    if (savedNotification) {
    }
  }, []);

  return (
    <div class="px-2">
      <button onClick={toggleNotify} class="-mt-1">
        <div className="relative flex items-center">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            className="w-8 h-8 text-stone-600 hover:text-black transition duration-200"
          >
            <title>notification-line</title>
            <path
              className="clr-i-outline clr-i-outline-path-1"
              d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"
            ></path>
            <path
              className="clr-i-outline clr-i-outline-path-2"
              d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"
            ></path>
            <rect x="0" y="0" width="10" height="10" fillOpacity="0" />
          </svg>

          {/* Notification Badge */}
          {/* {count > 0 && (
            <div className="absolute -top-1 -right-2 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{count}</span>
            </div>
          )} */}
        </div>
      </button>
      <SidebarNotify notifytoggle={notifytoggle} toggleNotify={toggleNotify} socket={socket} />
    </div>
  );
};

export default AddedBlogNotify;