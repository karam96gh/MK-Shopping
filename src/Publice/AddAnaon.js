import { useState } from "react";

export default function AddAnaon() {
   const [ad, setAd] = useState({
      nameAnaone: "",
      img: null,
      Descraption: "",
      ComapnyId: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAd({ ...ad, [name]: value });
   };

   const handleFileChange = (e) => {
      const { name } = e.target;
      const file = e.target.files[0];
      setAd({ ...ad, [name]: file });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // تحويل الصورة إلى Base64
      const imgBase64 = ad.img ? await toBase64(ad.img) : null;

      // إعداد البيانات لإرسالها
      const data = {
         ...ad,
         img: imgBase64,
      };

      try {
         const response = await fetch("https://your-api-endpoint.com/api/ads", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (response.ok) {
            const result = await response.json();
            console.log("تمت إضافة الإعلان بنجاح:", result);
            alert("تمت إضافة الإعلان بنجاح!");
         } else {
            console.error("فشل في إضافة الإعلان:", response.statusText);
            alert("فشل في إضافة الإعلان. يرجى المحاولة مرة أخرى.");
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
      <div className="container">
         <div className="title1">إضافة إعلان جديد</div>
         <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-field">
               <label className="form-label">اسم الإعلان</label>
               <input
                  type="text"
                  name="nameAnaone"
                  placeholder="أدخل اسم الإعلان"
                  className="form-input"
                  value={ad.nameAnaone}
                  onChange={handleInputChange}
               />
            </div>

            <div className="form-field">
               <label className="form-label">الصورة الرئيسية</label>
               <input
                  type="file"
                  name="img"
                  className="form-input"
                  onChange={handleFileChange}
               />
            </div>

            <div className="form-field">
               <label className="form-label">وصف الإعلان</label>
               <textarea
                  name="Descraption"
                  placeholder="أدخل وصف الإعلان"
                  className="form-input"
                  value={ad.Descraption}
                  onChange={handleInputChange}
               ></textarea>
            </div>

            <div className="form-field">
               <label className="form-label">رقم الشركة</label>
               <input
                  type="text"
                  name="ComapnyId"
                  placeholder="أدخل رقم الشركة"
                  className="form-input"
                  value={ad.ComapnyId}
                  onChange={handleInputChange}
               />
            </div>

            <div className="form-actions">
               <button type="submit" className="form-button">
                  إضافة الإعلان
               </button>
            </div>
         </form>
      </div>
   );
} 