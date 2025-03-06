import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // لجلب المعرف من الـ URL
import { DataProduct } from "../Data/DataProduct";
import { DataCompany } from "../Data/Data";

export default function PageOfProduct() {
   const { id } = useParams(); // جلب المعرف من الرابط
   const [currentImageIndex, setCurrentImageIndex] = useState(0); // الصورة الحالية
   const [isPopupOpen, setIsPopupOpen] = useState(false); // حالة النافذة المنبثقة

   const product = DataProduct.find((item) => item.id === parseInt(id)); // البحث عن المنتج
   const company = DataCompany.find((item) => item.id === product.companyId); // البحث عن الشركة المرتبطة بالمنتج

   // التأكد من وجود المنتج وصوره

   // منطق تغيير الصور تلقائيًا
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.MultiImage.length);
      }, 3000); // تغيير الصورة كل 3 ثوانٍ

      return () => clearInterval(interval); // تنظيف المؤقت عند الخروج
   }, [product.MultiImage.length]);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // ينتقل فوراً إلى الأعلى
   }, []);

   // التحكم بالأسهم
   const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.MultiImage.length);
   };

   const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
         prevIndex === 0 ? product.MultiImage.length - 1 : prevIndex - 1
      );
   };

   return (
      <div className="PageOfProduct" style={{ textAlign: "center" }}>
         <div className="container">
            <h1>{product.productName}</h1>
            <div className="carousel-container">
               <button onClick={handlePreviousImage} className="arrow-button GoLeft">❮</button>
               <div className="img">
                  <img
                     src={product.MultiImage[currentImageIndex] || product.img}
                     alt={`صورة ${product.productName}`}
                     onClick={() => setIsPopupOpen(true)} // عند النقر فتح نافذة
                     className="product-image"
                  />
               </div>
               <button onClick={handleNextImage} className="arrow-button GoRight">❯</button>
            </div>
            <p className="des">
               {product.ProductDesraptionAlt}
            </p>

            <div style={{ backgroundColor: "#01121b5c", marginTop: "100px", marginBottom: "100px" }} className="footer1">
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
                        src={product.MultiImage[currentImageIndex]}
                        alt={`صورة مكبرة ${product.productName}`}
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
