import { useState, useEffect, useContext } from "react";
import CardCompany from "../Component/CardCompany";
import Header from "../Component/Header";
import { SidBar } from "./SidBarContext";
import { DataCompany } from "../Data/Data";
import { Link } from "react-router-dom";
import Anaone from "./Anaone";
import { DataAnaone } from "../Data/DataAnaone";
import OfferCardInHome from "../Component/OfferCardInHome";
import { DataOffer } from "../Data/DataOffer"; // استيراد DataOffer

export default function Home() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const sidbar = useContext(SidBar);
   const open = sidbar.open;
   const setopen = sidbar.setOpen;

   const datacompany = DataCompany.map((item) => (
      <div key={item.id} className="card">
         <Link to={`/company/${item.id}`}>
            <CardCompany
               to={item.to}
               NameCompany={item.NameCompany}
               Logo={item.Logo}
               Descraption={item.Descraption}
               img={item.img}
            />
         </Link>
      </div>
   ));

   const dataAnaone = DataAnaone.map((item) => (
      <Anaone
         key={item.id}
         nameAnaone={item.nameAnaone}
         img={item.img}
         Descraption={item.Descraption}
      />
   ));

   // عرض العروض من DataOffer
   const dataOffer = DataOffer.map((item) => (
      <div key={item.Id} className="card">
         <OfferCardInHome
            Img={item.Img}
            Title={item.Title}
            descraption={item.descraption}
            OldPrice={item.OldPrice}
            NewPrice={item.NewPrice}
            CompanyId={item.CompanyId} // تمرير CompanyId
            Id={item.Id}
         />
      </div>
   ));

   // الحركة التلقائية كل 5 ثوانٍ
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % datacompany.length);
      }, 3000);

      return () => clearInterval(interval); // تنظيف الـ interval عند إلغاء التثبيت
   }, [datacompany.length]);

   return (
      <>
         <div onClick={() => open && setopen(false)} style={{ width: open ? "100%" : "0%" }} className="overlay"></div>
         <div className="HeadeFather">
            <div className="container">
               <Header />
            </div>
         </div>

         <div id="Home" className="home">
            <div className="black-secreen"></div>
            <div className="text">
               <div>  <span className="active"> MK-Shopping  </span>    <span>  مرحبًا بكم في </span> </div>


               <span>، حيث تجدون كل ما تحتاجونه في مكان واحد! تسوقوا بسهولة واستمتعوا بتجربة فريدة.</span>
            </div>
            {dataAnaone}
         </div>


         <div id="Company" className="container     ">
            <h2 className=" titlesectionhome">قسم الشركات  </h2>
            <div className="See1">
               <Link className="SeeAllCars" to="AllCompany">
                  رؤية كافة الشركات
               </Link>
               <i className="fa fa-long-arrow-left"></i>
            </div>

            <div className="cards-container">
               <div className="cards-wrapper" style={{
                  transform: `translateX(-${currentIndex * 260}px)`, // 300px عرض الكارد + 20px المسافة
               }}
               >
                  {datacompany}
               </div>
            </div>
         </div>


         <div className="CompanyPart">
            <div id="Event" className="container  ">
               <h2 className=" titlesectionhome">قسم العروض   </h2>
               <div className="See1">
                  <Link className="SeeAllCars" to="OffertsPage">
                     رؤية كافة العروض
                  </Link>
                  <i className="fa fa-long-arrow-left"></i>
               </div>
               <div className="cards-container">
                  <div className="cards-wrapper" style={{
                     transform: `translateX(-${currentIndex * 200}px)`, // 300px عرض الكارد + 20px المسافة
                  }}
                  >
                     {dataOffer}
                  </div>
               </div>
            </div>
         </div>

         <div className="MainFooter right">
            Mk-Shopping   جميع الحقوق محفوظة لموقع
         </div>
      </>
   );
}