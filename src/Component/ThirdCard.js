import { DataCompany } from "../Data/Data";

export default function ThirdCard(props) {
   // Define the WhatsApp message
   const whatsappMessage = `قادم من منصة شركات الشمال السوري وأرغب الاستفسار عن \n${props.title}`;

   // Find the company data by ID
   const company = DataCompany.find((item) => item.id === parseInt(props.companyId));

   // Safely retrieve the phone number or use a fallback
   const phoneNumber = company.mobile; // Default number if undefined

   return (
      <div className="childgrid3 cardproduct3">

         <div
            style={{ backgroundColor: "rgba(173, 46, 11, 0.21)" }}
            className="text3 half_left box12"
         >
            <div
               style={{ backgroundColor: "red" }}
               className="title5"
            >
               {props.title}
            </div>
            <div className="descraption4">{props.descraption}</div>

            {/* WhatsApp Link with Pre-filled Message */}
            <a
               href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
               target="_blank"
               rel="noopener noreferrer"
            >
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  className="whatsapp-logo"
                  style={{ width: "30px", height: "30px", marginTop: "10px" }}
               />
            </a>
         </div>

         <div className="father100 half_right">
            <div className="img100" >  <img src={props.img} alt={props.title} /> </div>
         </div>

      </div>
   );
}
