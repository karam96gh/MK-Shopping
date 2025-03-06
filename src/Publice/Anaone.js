 
export default function Anaone(props) {
   return (
      <div className="Anaone">
         <div className="title3">{props.nameAnaone}<i class="fa fa-long-arrow-left"></i></div>
         <div className="box10">
            <div className="img"><img src={props.img} /> </div>
            <div className="discraption3">{props.Descraption}</div>
         </div>
      </div>
   )
}