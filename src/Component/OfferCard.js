import { Link } from "react-router-dom";
import { DataCompany } from "../Data/Data";
import { DataOffer } from "../Data/DataOffer"; // استيراد DataOffer

export default function OfferCard(props) {
   // Define the WhatsApp message
   const whatsappMessage = `أرغب في الاستفسار عن العرض:\n${props.title}`;

   // Find the company data by ID
   const company = DataCompany.find((item) => item.id === parseInt(props.companyId));

   // Safely retrieve the phone number or use a fallback
   const phoneNumber = company.mobile; // Default number if company.mobile is undefined

   return (
      <Link to={`/offer/${props.id}`} style={{ textDecoration: "none", color: "inherit" }}>
         <div className="childgrid3 cardproduct3">
            <div
               style={{ backgroundColor: "rgba(27, 173, 11, 0.21)" }}
               className="text3 half_left box12"
            >

               <div className="title5">{props.title}</div>
               <div className="descraption4">{props.descraption}</div>



            </div>

            <div style={{ marginTop: "10px" }} className="father100 half_right">
               <div className="new">{props.discaunt}</div>
               <div className="img100"> <img src={props.img} alt={props.title} /></div>

            </div>
            <div style={{ marginTop: "20px", backgroundColor:"green" }} className="show showsmall">
               رؤية التفاصيل كاملة
            </div>
         </div>
      </Link>
   );
}