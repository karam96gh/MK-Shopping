import { DataCompany } from "../Data/Data";
export default function CardProduct(props) {


   const company = DataCompany.find((item) => item.id === (props.companyId));
   const phoneNumber = company.mobile;


   return (
      <div className="cardproduct3">
         <div className="half_right imgproduct">
            <img src={props.img} alt={props.ProductName} />
         </div>

         <div className="half_left">
            <div className="title3">{props.ProductName}</div>
            <div className="descraptin">{props.ProductDescription}</div>

            <div className="show showsmall">
               رؤية التفاصيل كاملة
            </div>
            {/* WhatsApp Link with Pre-filled Message */}

         </div>
      </div>
   );
}
