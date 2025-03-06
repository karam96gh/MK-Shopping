import React from "react";
import { Link } from "react-router-dom";

export default function JoinAsCompany() {
   const whatsappNumber = "+963940415498"; // رقم واتساب
   const whatsappMessage = "مرحبًا، أنا مهتم بالانضمام كشركة."; // رسالة افتراضية

   const handleWhatsAppClick = () => {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, "_blank");
   };

   return (
      <div className="JoinCompany1">
         <div className="JoinCompany2 container">
            <h2 className="titlesectionhome">الإنضمام كشركة</h2>

            <div className="BoxsesOfPrice">
               <div className="boxofpricr">
                  <div className="title">الباقة الأولى</div>
                  <div className="desqraption">كل ثلاثة أشهر 40$</div>
                  <button onClick={handleWhatsAppClick} className="whatsapp-button">
                     اضغط هنا اللتواصل معنا 
                  </button>
               </div>

               <div className="boxofpricr">
                  <div className="title">الباقة الثانية</div>
                  <div className="desqraption">$كل ستة أشهر  70</div>
                  <button onClick={handleWhatsAppClick} className="whatsapp-button">
                     اضغط هنا اللتواصل معنا 

                  </button>
               </div>

               <div className="boxofpricr">
                  <div className="title">الباقة الثالثة</div>
                  <div className="desqraption">كل سنة 120$</div>
                  <button onClick={handleWhatsAppClick} className="whatsapp-button">
                     اضغط هنا اللتواصل معنا 

                  </button>
               </div>
            </div>
         </div>
            <div className="scrit">
               <Link   to="Dashboard1"> .</Link>
            </div>
      </div>
   );
}