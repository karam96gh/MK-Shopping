export default function CardCompany(props) {
   return (
      <div className="Cardmedia">
         <div>
            <div className="title">
               <div classname="logo"><img src={props.Logo} alt='qqq' /> </div>
               <div className='title2'>{props.NameCompany}</div>
            </div>
            <div className="descraption">
               {props.Descraption}
            </div>
         </div>
         <div className='img3'>  <img src={props.img} alt='qqq' /> </div>

         <div className="seeallright">
            <i class="fa fa-long-arrow-right"></i>
            <div style={{ textDecoration: "none" }} className='show'>  {props.to}</div>
         </div>
      </div>
   )
}