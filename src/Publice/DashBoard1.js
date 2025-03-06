import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { SidBar } from "./SidBarContext";

export default function Dashboard1() {
   const sid = useContext(SidBar);
   const open = sid.open;
   const setOpen = sid.setOpen; // تم تغيير setopen إلى setOpen

   return (
      <div className="Dash">
         <div
            onClick={() => open && setOpen(false)} // تم تغيير setopen إلى setOpen
            style={{ width: open ? "100%" : "0%" }}
            className="overlay"
         ></div>
         <div className="TopBar">
            <div className="container Topinsit">
               <i
                  className="fa fa-align-left"
                  onClick={() => setOpen((prev) => !prev)} // تم تغيير setopen إلى setOpen
               ></i>
               <div> صفحة الإدارة </div>
               <div> تسجيل الخروج</div>
            </div>
         </div>

         <div
            style={{
               left: open ? "0px" : "-1000px",
            }}
            className="SidBar"
         >
            <Link
               onClick={() => open && setOpen(false)} // تم تغيير setopen إلى setOpen
               to="AddCompany"
               className="LinkSidBar"
            >
               اضافة شركة
            </Link>
            <Link
               onClick={() => open && setOpen(false)} // تم تغيير setopen إلى setOpen
               to="AddAnaon"
               className="LinkSidBar"
            >
               اضافة إعلان
            </Link>
         </div>
         <div className="outlet">
            <Outlet />
         </div>
      </div>
   );
}