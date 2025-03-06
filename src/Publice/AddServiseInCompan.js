import { useState } from "react";

export default function AddServiseInCompan() {
   return (
      <div className="container">
         <div className="title1">إضافة خدمة جديدة</div>
         <form className="form-container" onSubmit={""}>
            <div className="form-field">
               <label className="form-label">اسم الخدمة</label>
               <input
                  type="text"
                  name="ServiceName"
                  placeholder="أدخل اسم الخدمة"
                  className="form-input"
                  value={""}
                  onChange={""}
               />
            </div>

            <div className="form-field">
               <label className="form-label">الصورة الرئيسية</label>
               <input
                  type="file"
                  name="image"
                  className="form-input"
                  onChange={""}
               />
            </div>



            <div className="form-field">
               <label className="form-label">وصف الخدمة</label>
               <textarea
                  name="ServiceDescription"
                  placeholder="أدخل وصف الخدمة"
                  className="form-input"
                  value={""}
                  onChange={""}
               ></textarea>
            </div>


            <div className="form-field">
               <label className="form-label">رقم الشركة</label>
               <input
                  type="text"
                  name="companyId"
                  placeholder="أدخل رقم الشركة"
                  className="form-input"
                  value={""}
                  onChange={""}
               />
            </div>

            <div className="form-actions">
               <button type="submit" className="form-button">
                  إضافة الخدمة
               </button>
            </div>
         </form>
      </div>
   );
}
