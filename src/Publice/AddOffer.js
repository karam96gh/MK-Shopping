import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddOffer() {
   const [offer, setOffer] = useState({
      Title: "",
      Img: null,
      descraption: "",
      OldPrice: "",
      OfferValue: "",
      NewPrice: "",
      MultiImage: [],
      OfferType: "",
      CompanyId: "",
   });

   const navigate = useNavigate();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setOffer({ ...offer, [name]: value });
   };

   const handleFileChange = (e) => {
      const { name } = e.target;
      const file = e.target.files[0];
      setOffer({ ...offer, [name]: file });
   };

   const handleMultiImageChange = (e) => {
      const files = Array.from(e.target.files);
      setOffer({ ...offer, MultiImage: files });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // تحويل الصور إلى Base64
      const imgBase64 = offer.Img ? await toBase64(offer.Img) : null;
      const multiImagesBase64 = await Promise.all(
         offer.MultiImage.map(async (file) => await toBase64(file))
      );

      // إعداد البيانات لإرسالها
      const data = {
         ...offer,
         Img: imgBase64,
         MultiImage: multiImagesBase64,
      };

      try {
         const response = await fetch("https://your-api-endpoint.com/api/offers", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (response.ok) {
            const result = await response.json();
            console.log("تمت إضافة العرض بنجاح:", result);
            alert("تمت إضافة العرض بنجاح!");
            navigate("/offers"); // التوجيه إلى صفحة العروض بعد الإضافة
         } else {
            console.error("فشل في إضافة العرض:", response.statusText);
            alert("فشل في إضافة العرض. يرجى المحاولة مرة أخرى.");
         }
      } catch (error) {
         console.error("حدث خطأ أثناء الإرسال:", error);
         alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      }
   };

   // دالة لتحويل الملف إلى Base64
   const toBase64 = (file) =>
      new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => resolve(reader.result);
         reader.onerror = (error) => reject(error);
      });

   return (
      <div className="AddOfferPage">
         <h2 className="page-title">إضافة عرض جديد</h2>
         <form onSubmit={handleSubmit} className="form-container">
            <div className="form-field">
               <label className="form-label">عنوان العرض:</label>
               <input
                  type="text"
                  name="Title"
                  className="form-input"
                  value={offer.Title}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">الصورة الرئيسية:</label>
               <input
                  type="file"
                  name="Img"
                  className="form-input"
                  onChange={handleFileChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">وصف العرض:</label>
               <textarea
                  name="descraption"
                  className="form-input"
                  value={offer.descraption}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">السعر القديم:</label>
               <input
                  type="text"
                  name="OldPrice"
                  className="form-input"
                  value={offer.OldPrice}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">قيمة العرض:</label>
               <input
                  type="text"
                  name="OfferValue"
                  className="form-input"
                  value={offer.OfferValue}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">السعر الجديد:</label>
               <input
                  type="text"
                  name="NewPrice"
                  className="form-input"
                  value={offer.NewPrice}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">الصور المتعددة:</label>
               <input
                  type="file"
                  name="MultiImage"
                  className="form-input"
                  onChange={handleMultiImageChange}
                  multiple
                  required
               />
            </div>

            <div className="form-field">
               <label className="form-label">نوع العرض:</label>
               <select
                  name="OfferType"
                  className="form-input"
                  value={offer.OfferType}
                  onChange={handleInputChange}
                  required
               >
                  <option value="">اختر نوع العرض</option>
                  <option value="food">أغذية</option>
                  <option value="cars">سيارات</option>
               </select>
            </div>

            <div className="form-field">
               <label className="form-label">رقم الشركة:</label>
               <input
                  type="text"
                  name="CompanyId"
                  className="form-input"
                  value={offer.CompanyId}
                  onChange={handleInputChange}
                  required
               />
            </div>

            <div className="form-actions">
               <button type="submit" className="form-button">
                  إضافة العرض
               </button>
            </div>
         </form>
      </div>
   );
}