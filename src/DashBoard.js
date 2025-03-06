import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { SidBar } from "./Publice/SidBarContext";
export default function Dashboard() {

   const sid = useContext(SidBar)
   const open = sid.open;
   const setopen = sid.setOpen;


   return (
      <div className="Dash">
         <div onClick={() => open && setopen(false)} style={{ width: open ? "100%" : "0%" }} className="overlay"></div>
         <div className="TopBar">
            <div className="container Topinsit">
               <i
                  className="fa fa-align-left"
                  onClick={() => setopen((prev) => !prev)}
               ></i>
               <div>  صفحة الإدارة  </div>
               <div>  تسجيل الخروج</div>
            </div>

         </div>

         <div style={{
            left: open ? "0px" : "-1000px",
         }} className="SidBar">

            <Link onClick={() => open && setopen(false)} to="AddProduct" className="LinkSidBar"> اضافة منتج جديد </Link>
            <Link onClick={() => open && setopen(false)} to="AddOffer" className="LinkSidBar"> اضافة عرض  </Link>
            <Link onClick={() => open && setopen(false)} to="AddServiseInCompan" className="LinkSidBar">  إضافة خدمة جديدة  </Link>
         </div>
         <div className="outlet">
            <Outlet />
         </div>
      </div>
   )
}


