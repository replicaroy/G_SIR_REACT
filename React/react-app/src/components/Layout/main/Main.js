import { Route, Routes } from "react-router-dom"
import Dashboard from '../../../pages/dashboard/Dashboard'
import AboutUs from "../../../pages/about-us/About-us"
import ContactUs from "../../../pages/contact-us/ContactUs"
import Help from "../../../pages/help/Help"
import Profile from "../../../pages/profile/Profile"
const MainContent=()=>{
    return(
        <main className="main_content">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashbord" element={<Dashboard/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </main>
    )
}
export default MainContent