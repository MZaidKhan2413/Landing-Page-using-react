import "./Navbar.css"
import Button from "./Button"
import Nav_Options from "./Nav_Options"

export default function Navbar() {
    return (
        <nav className="Navbar d-flex justify-content-between align-items-center px-5 py-3">
            <div className="logo">LOGO</div>
            
            <div className="navs d-flex align-items-center gap-5">
                <Nav_Options text="home" link="#"/>
                <Nav_Options text="About us" link="#"/>
                <Nav_Options text="portfolio" link="#"/>
                <Nav_Options text="contact us" link="#"/>
                <Button text="Get Started"/>
            </div>
        </nav>
    )
}