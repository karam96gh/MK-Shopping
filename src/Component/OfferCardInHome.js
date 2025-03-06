import { Link } from 'react-router-dom';

export default function OfferCardInHome(props) {
   return (
      <div className="Cardmedia">
         <div className='img3'>
            <img src={props.Img} alt={props.Title} />
         </div>
         <div className="nameofEvent">{props.Title}</div>
         <div style={{ height: "60px" }} className="descraption">{props.descraption}</div>
         <div className='LastNewPrice Contactus'>
            <div className='lastprice'>{props.OldPrice}</div>
            <div className='newprice'>{props.NewPrice}</div>
            <div className='pric'>: السعر</div>
         </div>
         <div className='Contactus'>
            <div className='Vistcompany'>
               {/* زر "زيارة الشركة" مع رابط إلى صفحة الشركة */}
               <Link to={`/company/${props.CompanyId}`}>
                  زيارة الشركة
               </Link>
            </div>
            {/* زر "التفاصيل" مع رابط إلى صفحة العرض التفصيلية */}
            <div className='ShowEventPage'>
               <Link to={`/offer/${props.Id}`} >
                  التفاصيل
               </Link>
            </div>

         </div>
      </div>
   );
}