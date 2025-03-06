import { useEffect, useState } from "react";
import { DataCompany } from "./Data/Data";
import { Link } from "react-router-dom";
import CardCompany from "./Component/CardCompany";

export default function AllCompany() {
   const [filter, setFilter] = useState("all"); // حالة التصفية حسب النوع
   const [searchQuery, setSearchQuery] = useState(""); // حالة البحث حسب الاسم

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
   }, []);

   // فلترة الشركات بناءً على النوع والبحث
   const filteredCompanies = DataCompany.filter((item) => {
      // فلترة حسب النوع
      if (filter !== "all" && item.TypeOfCompany !== filter) return false;

      // فلترة حسب الاسم (حالة عدم وجود نص بحث، يتم عرض جميع الشركات)
      if (searchQuery === "") return true;

      // البحث عن الاسم (حساسية الأحرف الكبيرة والصغيرة)
      return item.NameCompany.toLowerCase().includes(searchQuery.toLowerCase());
   });

   const datacompany = filteredCompanies.map((item) => (
      <div key={item.id} className="CardCompanyAndOfferInPage    ">
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

   return (
      <div className="AllCompany container">
         <h2 className="titlesectionhome">صفحة الشركات</h2>

         {/* إضافة خيار التصفية حسب النوع */}
        <div className="serch-andfilteer">
            <div className="filter-section">
               <label htmlFor="filter">نوع الشركات </label>
               <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
               >
                  <option value="all">الكل</option>
                  <option value="food">أغذية </option>
                  <option value="Cars">السيارات</option>
               </select>
            </div>

            {/* إضافة خيار البحث حسب الاسم */}
            <div className="search-section">
               <label htmlFor="search">بحث عن الشركات: </label>
               <input
                  id="search"
                  type="text"
                  placeholder="ابحث عن شركة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>

        </div>

         <div className="fathergrid3  ">
            {datacompany}
         </div>
      </div>
   );
}