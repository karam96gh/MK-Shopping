import { useState } from "react";

export default function AddCompany() {
   const [company, setCompany] = useState({
      NameCompany: "",
      Logo: null,
      Descraption: "",
      img: null,
      mobile: "",
      ImgOfFooter: null,
      TypeOfCompany: "",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCompany({ ...company, [name]: value });
   };

   const handleFileChange = (e) => {
      const { name } = e.target;
      const file = e.target.files[0];
      setCompany({ ...company, [name]: file });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // تحويل الملفات إلى Base64
      const logoBase64 = company.Logo ? await toBase64(company.Logo) : null;
      const imgBase64 = company.img ? await toBase64(company.img) : null;
      const footerBase64 = company.ImgOfFooter ? await toBase64(company.ImgOfFooter) : null;

      // إعداد البيانات لإرسالها
      const data = {
         ...company,
         Logo: logoBase64,
         img: imgBase64,
         ImgOfFooter: footerBase64,
      };

      try {
         const response = await fetch("https://your-api-endpoint.com/api/companies", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (response.ok) {
            const result = await response.json();
            console.log("تمت إضافة الشركة بنجاح:", result);
            alert("تمت إضافة الشركة بنجاح!");
         } else {
            console.error("فشل في إضافة الشركة:", response.statusText);
            alert("فشل في إضافة الشركة. يرجى المحاولة مرة أخرى.");
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
         <div className="title1">إضافة شركة جديدة</div>
         <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-field">
               <label className="form-label">اسم الشركة</label>
               <input
                  type="text"
                  name="NameCompany"
                  placeholder="أدخل اسم الشركة"
                  className="form-input"
                  value={company.NameCompany}
                  onChange={handleInputChange}
               />
            </div>
            <div className="form-field">
               <label className="form-label">شعار الشركة</label>
               <input
                  type="file"
                  name="Logo"
                  className="form-input"
                  onChange={handleFileChange}
               />
            </div>
            <div className="form-field">
               <label className="form-label">وصف الشركة</label>
               <textarea
                  name="Descraption"
                  placeholder="أدخل وصف الشركة"
                  className="form-input"
                  value={company.Descraption}
                  onChange={handleInputChange}
               ></textarea>
            </div>
            <div className="form-field">
               <label className="form-label">صورة الشركة</label>
               <input
                  type="file"
                  name="img"
                  className="form-input"
                  onChange={handleFileChange}
               />
            </div>
            <div className="form-field">
               <label className="form-label">رقم الهاتف</label>
               <input
                  type="text"
                  name="mobile"
                  placeholder="أدخل رقم الهاتف"
                  className="form-input"
                  value={company.mobile}
                  onChange={handleInputChange}
               />
            </div>
            <div className="form-field">
               <label className="form-label">صورة الفوتر</label>
               <input
                  type="file"
                  name="ImgOfFooter"
                  className="form-input"
                  onChange={handleFileChange}
               />
            </div>
            <div className="form-field">
               <label className="form-label">نوع الشركة</label>
               <select
                  name="TypeOfCompany"
                  className="form-input"
                  value={company.TypeOfCompany}
                  onChange={handleInputChange}
               >
                  <option value="">اختر نوع الشركة</option>
                  <option value="food">أغذية</option>
                  <option value="Cars">سيارات</option>
               </select>
            </div>
            <div className="form-actions">
               <button type="submit" className="form-button">
                  إضافة الشركة
               </button>
            </div>
         </form>
      </div>
   );
}