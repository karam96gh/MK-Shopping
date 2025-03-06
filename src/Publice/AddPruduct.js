import { useState } from "react";

export default function AddProduct() {
   // حالة (state) لتخزين بيانات المنتج
   const [product, setProduct] = useState({
      productName: "",
      image: null,
      multiImages: [],
      productDescription: "",
      productDescriptionAlt: "",
      companyId: "",
   });

   // دالة لإدارة تغييرات الحقول النصية
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
   };

   // دالة لإدارة تحميل الملفات (الصورة الرئيسية والصور المتعددة)
   const handleFileChange = (e) => {
      const { name, files } = e.target;
      if (name === "image") {
         setProduct({ ...product, image: files[0] }); // تخزين الصورة الرئيسية
      } else if (name === "multiImages") {
         setProduct({ ...product, multiImages: Array.from(files) }); // تخزين الصور المتعددة
      }
   };

   // دالة لإرسال البيانات عند تقديم النموذج
   const handleSubmit = async (e) => {
      e.preventDefault();

      // إنشاء كائن FormData لإرسال البيانات
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("image", product.image);
      product.multiImages.forEach((file, index) => {
         formData.append(`multiImages[${index}]`, file); // إضافة الصور المتعددة
      });
      formData.append("productDescription", product.productDescription);
      formData.append("productDescriptionAlt", product.productDescriptionAlt);
      formData.append("companyId", product.companyId);

      try {
         // إرسال البيانات إلى الخادم باستخدام fetch
         const response = await fetch("https://your-api-endpoint.com/api/products", {
            method: "POST",
            body: formData, // إرسال FormData مباشرة
         });

         if (response.ok) {
            const result = await response.json();
            console.log("تمت إضافة المنتج بنجاح:", result);
            alert("تمت إضافة المنتج بنجاح!");
         } else {
            console.error("فشل في إضافة المنتج:", response.statusText);
            alert("فشل في إضافة المنتج. يرجى المحاولة مرة أخرى.");
         }
      } catch (error) {
         console.error("حدث خطأ أثناء الإرسال:", error);
         alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      }
   };

   return (
      <div className="container">
         <div className="title1">إضافة منتج جديد</div>
         <form className="form-container" onSubmit={handleSubmit}>
            {/* حقل اسم المنتج */}
            <div className="form-field">
               <label className="form-label">اسم المنتج</label>
               <input
                  type="text"
                  name="productName"
                  placeholder="أدخل اسم المنتج"
                  className="form-input"
                  value={product.productName}
                  onChange={handleInputChange}
                  required
               />
            </div>

            {/* حقل الصورة الرئيسية */}
            <div className="form-field">
               <label className="form-label">الصورة الرئيسية</label>
               <input
                  type="file"
                  name="image"
                  className="form-input"
                  onChange={handleFileChange}
                  required
               />
            </div>

            {/* حقل الصور المتعددة */}
            <div className="form-field">
               <label className="form-label">صور متعددة</label>
               <input
                  type="file"
                  name="multiImages"
                  className="form-input"
                  multiple
                  onChange={handleFileChange}
               />
            </div>

            {/* حقل وصف المنتج */}
            <div className="form-field">
               <label className="form-label">وصف المنتج</label>
               <textarea
                  name="productDescription"
                  placeholder="أدخل وصف المنتج"
                  className="form-input"
                  value={product.productDescription}
                  onChange={handleInputChange}
                  required
               ></textarea>
            </div>

            {/* حقل الوصف البديل */}
            <div className="form-field">
               <label className="form-label">وصف بديل</label>
               <textarea
                  name="productDescriptionAlt"
                  placeholder="أدخل وصفًا بديلًا للمنتج"
                  className="form-input"
                  value={product.productDescriptionAlt}
                  onChange={handleInputChange}
               ></textarea>
            </div>

            {/* حقل رقم الشركة */}
            <div className="form-field">
               <label className="form-label">رقم الشركة</label>
               <input
                  type="text"
                  name="companyId"
                  placeholder="أدخل رقم الشركة"
                  className="form-input"
                  value={product.companyId}
                  onChange={handleInputChange}
                  required
               />
            </div>

            {/* زر إضافة المنتج */}
            <div className="form-actions">
               <button type="submit" className="form-button">
                  إضافة المنتج
               </button>
            </div>
         </form>
      </div>
   );
}