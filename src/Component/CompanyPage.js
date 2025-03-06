import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataCompany } from "../Data/Data";
import { DataProduct } from "../Data/DataProduct";
import { DataOffer } from "../Data/DataOffer"; // استيراد DataOffer
import { DataThirdCard } from "../Data/DataThirdCard";
import CardProduct from "../Component/CardProduct";
import OfferCard from "../Component/OfferCard";
import ThirdCard from "../Component/ThirdCard";

export default function CompanyPage() {
   const { id } = useParams(); // استخراج id من الرابط
   const company = DataCompany.find((item) => item.id === parseInt(id)); // البحث عن الشركة
   const [searchQuery, setSearchQuery] = useState(""); // حالة البحث حسب اسم المنتج

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // ينتقل فوراً إلى الأعلى
   }, []);

   if (!company) {
      return <h2>الشركة غير موجودة</h2>;
   }

   // فلترة المنتجات حسب الشركة والبحث
   const filteredProducts = DataProduct.filter((item) => {
      if (item.companyId !== company.id) return false; // تأكد من أن المنتج ينتمي للشركة

      // فلترة حسب اسم المنتج (حالة عدم وجود نص بحث، يتم عرض جميع المنتجات)
      if (searchQuery === "") return true;

      // البحث عن اسم المنتج (حساسية الأحرف الكبيرة والصغيرة)
      return item.productName.toLowerCase().includes(searchQuery.toLowerCase());
   });

   const dataProduct = filteredProducts.map((item) => (
      <Link to={`/product/${item.id}`} key={item.id}>
         <CardProduct
            key={item.id}
            img={item.img}
            ProductName={item.productName}
            ProductDescription={item.ProductDesraption}
            companyId={item.companyId}
         />
      </Link>
   ));

   // فلترة العروض حسب الشركة
   const dataOfferCard = DataOffer.filter((item) => item.CompanyId === company.id).map((item) => (
      <OfferCard
         key={item.Id}
         id={item.Id} // تمرير id العرض
         img={item.Img}
         title={item.Title}
         discaunt={item.OfferValue}
         descraption={item.descraption}
         companyId={item.CompanyId}
      />
   ));

   // فلترة الخدمات حسب الشركة
   const dataThirdCard = DataThirdCard.filter((item) => item.companyId === company.id).map((item) => (
      <ThirdCard
         key={item.id}
         img={item.img}
         title={item.title}
         descraption={item.descraption}
         companyId={item.companyId}
      />
   ));

   return (
      <div className="container">
         <div style={{ height: '50vh', backgroundColor: '#ffbf0014' }}>
            <div className="header2 flex">
               <div className="logo2">{company.Logo && <img src={company.Logo} alt="Logo" />}</div>
               <div className="nameFactory">{company.NameCompany}</div>
            </div>
            <div className="intro"><p>{company.Descraption}</p></div>
         </div>


         <div>
            <div className="sectioncompany">
               <div className="title1"><i className="fa fa-cubes"></i> منتجاتنا</div>
               {/* إضافة خيار البحث عن المنتجات */}
               <div style={{
                  width: "100%", padding: "5px", backgroundColor: "#33074a", borderRadius: "11px"
               }} className="search-section">
                  <label style={{ color: "gold" }} htmlFor="search">بحث عن المنتجات: </label>
                  <input
                     id="search"
                     type="text"
                     placeholder="ابحث عن منتج..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>

               {/* كروت المنتجات */}
               <div className="fathergrid2">{dataProduct}</div>
            </div>

            <div className="sectioncompany">
               <div className="title1"><i className="fa fa-gift"></i> عروضاتنا</div>
               {/* كروت العروض */}
               <div className="fathergrid2">{dataOfferCard}</div>
            </div>

            <div className="sectioncompany">
               <div className="title1"><i className="fa fa-truck"></i> خدماتنا</div>
               {/* كروت الخدمات */}
               <div className="fathergrid2">{dataThirdCard}</div>
            </div>

            <div className="footer1">
               <div className="welcoome">  {company.NameCompany}  ترحب بكم دائماً</div>
               <div className="contact">
                  <div style={{ marginBottom: "10px" }}>تواصلوا معنا</div>
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
               <div className="imgcompany">
                  <img src={company.ImgOfFooter} alt='aa' />
               </div>
            </div>
         </div>
      </div>
   );
}