import img1 from './milk1.jpg'
export default function ProductCard(){
   return(
      <div className="ProductCard" >
         <img src={img1} alt='img1' />
         <div className='text3'>
            <div className='title3'>حليب  فرندو</div>
            <div className='descraptin'>  شركة حميدان تقدم حليب منكه بأصناف متنوعة، بجودة عالية وطعم لذيذ يناسب جميع الأذواق</div>
         </div>
      </div>
   )
}