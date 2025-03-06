import { Route, Routes } from "react-router-dom"
import Home from "./Publice/Home"
import CompanyPage from "./Component/CompanyPage"
import AddCompany from "./Publice/AddCompany"
import AddProduct from "./Publice/AddPruduct"
import AddOffer from "./Publice/AddOffer"
import JoinAsCompany from "./Publice/JoinAsCompany"
import { DataCompany } from "./Data/Data"
import CardCompany from "./Component/CardCompany"
import PageOfProduct from "./Component/PageOfPrduct"
import Dashboard from "./DashBoard"
import AddServiseInCompan from "./Publice/AddServiseInCompan"
// import AddofeerInCompany from "./Publice/AddofeerInCompany"
import AddAnaon from "./Publice/AddAnaon"
import AllCompany from "./Pages"
import PageOfOffer from "./Component/PageOfOffer"
import OffertsPage from "./Publice/OffertsPage"
import Dashboard1 from "./Publice/DashBoard1"
export default function App() {

   const PathOfCompany = DataCompany.map((item) => <CardCompany to={item.to} />)
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/:id" element={<CompanyPage />} />
            <Route path="/product/:id" element={<PageOfProduct />} />
            <Route path="/JoinAsCompany" element={<JoinAsCompany />} />
            <Route path="/AllCompany" element={<AllCompany />} />
            <Route path="/offer/:id" element={<PageOfOffer />} />
            <Route path="/OffertsPage" element={<OffertsPage />} />


            <Route path="/Dashboard" element={<Dashboard />}>
               <Route path="AddOffer" element={<AddOffer />} />
               <Route path="AddProduct" element={<AddProduct />} />
               <Route path="AddServiseInCompan" element={<AddServiseInCompan />} />
               {/* <Route path="AddofeerInCompany" element={<AddofeerInCompany />} /> */}
            </Route>

            <Route path="/JoinAsCompany/Dashboard1" element={<Dashboard1 />}>
               <Route path="AddCompany" element={<AddCompany />} />
               <Route path="AddAnaon" element={<AddAnaon />} />
            </Route>
         </Routes>

      </div>
   )
}