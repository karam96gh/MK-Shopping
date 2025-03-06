import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataOffer } from "../Data/DataOffer"; // استيراد بيانات العروض
import OfferCardInHome from "../Component/OfferCardInHome"; // استيراد مكون بطاقة العرض

export default function OffertsPage() {
   const [filter, setFilter] = useState("all"); // حالة التصفية حسب النوع
   const [searchQuery, setSearchQuery] = useState(""); // حالة البحث حسب الاسم

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
   }, []);

   // فلترة العروض بناءً على النوع والبحث
   const filteredOffers = DataOffer.filter((item) => {
      // فلترة حسب النوع
      if (filter !== "all" && item.OfferType !== filter) return false;

      // فلترة حسب الاسم (حالة عدم وجود نص بحث، يتم عرض جميع العروض)
      if (searchQuery === "") return true;

      // البحث عن الاسم (حساسية الأحرف الكبيرة والصغيرة)
      return item.Title.toLowerCase().includes(searchQuery.toLowerCase());
   });

   const dataOffers = filteredOffers.map((item) => (
      <div key={item.Id} className="CardCompanyAndOfferInPage">
         <OfferCardInHome
            Img={item.Img}
            Title={item.Title}
            descraption={item.descraption}
            OldPrice={item.OldPrice}
            NewPrice={item.NewPrice}
            CompanyId={item.CompanyId}
            Id={item.Id}
         />
      </div>
   ));

   return (
      <div className="OffertsPage container">
         <h2 className="titlesectionhome">صفحة العروض</h2>

         {/* إضافة خيار التصفية حسب النوع */}
         <div className="serch-andfilteer">
            <div className="filter-section">
               <label htmlFor="filter">نوع العرض: </label>
               <select
                  id="filter"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
               >
                  <option value="all">الكل</option>
                  <option value="food">أغذية</option>
                  <option value="cars">سيارات</option>
                  {/* يمكنك إضافة المزيد من الأنواع هنا */}
               </select>
            </div>

            {/* إضافة خيار البحث حسب الاسم */}
            <div className="search-section">
               <label htmlFor="search">بحث عن العروض: </label>
               <input
                  id="search"
                  type="text"
                  placeholder="ابحث عن عرض..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            </div>
         </div>

         <div className="fathergrid3">
            {dataOffers}
         </div>
      </div>
   );
}