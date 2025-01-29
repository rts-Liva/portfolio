import Footer from "../components/footer";
import Header from "../components/header";
import '../scss/components/about-me.scss';

function AboutMePage() {
    return (
        <>
            <Header current='about-me' />
            <section className="about-me">
                <img src="profile-image.PNG" alt="Image of me" className="about-me__profile" />
                <h1 className="about-me__title">Liva Kuhlmann</h1>
                <p className="about-me__text">Jeg er en 17-årig webudvikler studerende.</p>
                <p className="about-me__text">Jeg går på hovedforløbet hos Roskilde Tekniske Skole og er klar til at søge praktikplads. Jeg lærte først at kode da jeg startede på grundforløb 1 på samme skole. Nu går jeg på hovedforløbet og er kommet langt siden da.</p>
            </section>
            <section className="skills">
                <h2 className="skills__heading">Mine erfaringer</h2>
                <ul className="skills__list">
                    <li className="skills__list-item">HTML5</li>
                    <li className="skills__list-item">JS</li>
                    <li className="skills__list-item">CSS</li>
                    <li className="skills__list-item">SCSS</li>
                    <li className="skills__list-item">Node.js</li>
                    <li className="skills__list-item">React</li>
                    <li className="skills__list-item">MongoDB</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}

export default AboutMePage;