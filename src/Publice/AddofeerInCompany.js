import { useState } from "react";

export default function AddofeerInCompany() {
   return (
      <div className="container">
         <div className="title1">إضافة عرض جديد</div>

         <form className="form-container" onSubmit={""}>
            
            <div className="form-field">
               <label className="form-label">اسم العرض</label>
               <input
                  type="text"
                  name="ServiceName"
                  placeholder="أدخل اسم العرض"
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
               <label className="form-label">وصف العرض</label>
               <textarea
                  name="ServiceDescription"
                  placeholder="أدخل وصف العرض"
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
                  إضافة العرض
               </button>
            </div>
         </form>
      </div>
   );
}
