import Button from "./Button"
import "./Hero.css"

export default function Hero() {
    return (
        <main className="Hero row">
            <section className="hero-text col-12 col-md-6 p-5 d-flex flex-column justify-content-center align-items-start">
                <h1>DEVELOPER</h1>
                <h2 className="fw-bold">LANDING PAGE</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vero sequi quam doloremque est neque pariatur nostrum, nesciunt, expedita omnis similique dignissimos reprehenderit! Nesciunt sit ipsum recusandae nihil facilis hic officiis perspiciatis. Possimus rem sed iste.</p>

                <Button text="read more"/>
            </section>
            <section className="col-12 col-md-6 d-flex justify-content-center align-items-center py-4">
                <img src="/images/dev-img.webp" alt="Developer" className="hero-img"/>
            </section>
        </main>
    )
}