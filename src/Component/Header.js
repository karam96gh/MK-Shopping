import { useContext, useState } from "react";
import { SidBar } from "../Publice/SidBarContext";
import { Link } from "react-router-dom";
import Login from "../Publice/JoinAsCompany";
import logohome from "../image/logohome.png"
export default function Header() {
   const sid = useContext(SidBar)
   const open = sid.open;
   const setopen = sid.setOpen;  

   return (
      <div onClick={() => open && setopen(false)} className="header">

         <div className="logo">
            <div className="logoname">MK-Shopping</div>
            <div className="imglogohome"><img src={logohome} /> </div>
         </div>
         <div className="links">
            <ul className="link">
               <li ><a><Link to="/DashBoard">تسجيل دخول</Link></a></li>
               <li ><a><Link to="/JoinAsCompany">أريد الانضمام كشركة </Link></a></li>
               <li><a href="#Event">عروض الشركات</a> </li>
               <li><a href="#Company">الشركات</a></li>
               <li className="active"> <a href="#Home">الصفحة الرئيسية </a></li>


            </ul>
         </div>

         <div className="togell">
            <i
               className="fa fa-align-left"
               onClick={() => setopen((prev) => !prev)}
            ></i>
            <div
               className="sidbar"
               style={{
                  right: open ? "0px" : "-600px",
               }}
            >
               {/* محتوى الشريط الجانبي */}
               <ul>
                  <li className="linklogin" ><a><Link style={{color:"black"}} to="/JoinAsCompany">أريد الانضمام كشركة </Link></a></li>
                  <li><a className="active" href="#Home">الصفحة الرئيسية</a></li>
                  <li><a href="#Company">الشركات</a></li>
                  <li><a href="#Event">الفعاليات</a> </li>
                  <li><a href="#ContactUs">تواصل معنا</a></li>
                  <li  ><a><Link to="/DashBoard">تسجيل دخول</Link></a></li>

               </ul>
            </div>
         </div>
      </div>
   );
}
