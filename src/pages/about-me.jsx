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
                <p className="about-me__text">Min uddannelse er jeg i gang med at tage på Roskilde Tekniske Skole, hvor jeg går på hovedforløbet. Den første gang jeg rørte noget med kodning, var ved et online kursus hvor vi lærte at bruge Scratch. Dengang gik jeg stadig i 9. klasse og jeg kiggede aldrig mere ind på kodning igen indtil jeg startede på grundforløb 1 hos RTS.</p>
                <p className="about-me__text">Her stød jeg ind på rigtig kodning. (Hvis jeg må kalde det det.) Jeg lærte simpelt HTML og CSS, JS var ikke noget jeg lærte meget af tilbage i GF1. Jeg var faktisk startet på GF1 fordi jeg ville tage mediegrafikker efter. Men som jeg var der, blev jeg rigtig glad for at kode og valgte at jeg også ville tage webudvikler udannelsen.</p>
                <p className="about-me__text">Jeg har lært meget siden da og nu søger jeg praktikplads.</p>
            </section>
            <Footer />
        </>
    );
}

export default AboutMePage;