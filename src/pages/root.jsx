// import Navigationbar from "../components/navigation"
import { Outlet } from "react-router-dom"
// import Footer from "../components/footer"
// import LandingPage from "../components/landingpage"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Root(){
    return(
        <>
            {/* <Navigationbar /> */}
            <Header />

            <Outlet />
            <Footer />
        </>
    )
}