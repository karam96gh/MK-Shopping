import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // لجلب المعرف من الـ URL
import { DataOffer } from "../Data/DataOffer"; // استيراد بيانات العروض
import { DataCompany } from "../Data/Data"; // استيراد بيانات الشركات

export default function PageOfOffer() {
   const { id } = useParams(); // جلب المعرف من الرابط
   const [currentImageIndex, setCurrentImageIndex] = useState(0); // الصورة الحالية
   const [isPopupOpen, setIsPopupOpen] = useState(false); // حالة النافذة المنبثقة

   const offer = DataOffer.find((item) => item.Id === parseInt(id)); // البحث عن العرض
   const company = DataCompany.find((item) => item.id === offer.CompanyId); // البحث عن الشركة المرتبطة بالعرض

   // التأكد من وجود العرض وصوره


   // منطق تغيير الصور تلقائيًا
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % offer.MultiImage.length);
      }, 3000); // تغيير الصورة كل 3 ثوانٍ

      return () => clearInterval(interval); // تنظيف المؤقت عند الخروج
   }, [offer.MultiImage.length]);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // ينتقل فوراً إلى الأعلى
   }, []);


   if (!offer || !company) {
      return <h2>العرض غير موجود</h2>;
   }

   // التحكم بالأسهم
   const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % offer.MultiImage.length);
   };

   const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
         prevIndex === 0 ? offer.MultiImage.length - 1 : prevIndex - 1
      );
   };

   return (
      <div className="PageOfProduct" style={{ textAlign: "center" }}>
         <div className="container">
            <h1>{offer.Title}</h1>
            <div className="carousel-container">
               <button onClick={handlePreviousImage} className="arrow-button GoLeft">❮</button>
               <div className="img">
                  <img
                     src={offer.MultiImage[currentImageIndex] || offer.Img}
                     alt={`صورة ${offer.Title}`}
                     onClick={() => setIsPopupOpen(true)} // عند النقر فتح نافذة
                     className="product-image"
                  />
               </div>
               <button onClick={handleNextImage} className="arrow-button GoRight">❯</button>
            </div>
            <p className="des">
               {offer.descraption}
            </p>

            {/* عرض السعر القديم والجديد */}
            <div className="LastNewPrice LastNewPrice2  Contactus">
               <div className="lastprice">السعر القديم: {offer.OldPrice}</div>
               <div className="newprice">السعر الجديد: {offer.NewPrice}</div>
               <div className="newprice">الخصم: {offer.OfferValue}</div>
            </div>

            <div style={{ backgroundColor: "#01121b5c", }} className="footer1">
               <div style={{ backgroundColor: "#d7ff0045", color: "white" }} className="welcoome">  {company.NameCompany}  ترحب بكم دائماً</div>
               <div className="contact">
                  <div style={{ marginBottom: "10px" }}> اضغط على الرقم للتواصل مع الشركة</div>
                  <div>
                     <a
                        href={`https://wa.me/${company.mobile}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <i style={{ marginRight: "10px", color: "gold" }} className="fa fa-phone"></i>
                        {company.mobile}
                     </a>
                  </div>
               </div>
            </div>

            {/* النافذة المنبثقة */}
            {isPopupOpen && (
               <div onClick={() => setIsPopupOpen(false)} className="popup">
                  <div className="popup-content">
                     <img
                        src={offer.MultiImage[currentImageIndex]}
                        alt={`صورة مكبرة ${offer.Title}`}
                        className="popup-image"
                     />
                     <button onClick={() => setIsPopupOpen(false)} className="close-button">
                        إغلاق
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}