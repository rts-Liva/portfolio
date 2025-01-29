import { useParams } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import '../../scss/components/project-details.scss';

function DetailsPage() {
    // const { id } = useParams();

    return (
        <>
            <Header current='projects' />
            <section className="project-details">
                <img src="/projekt-moviez.jpg" alt="project poster" className="project-details__poster" />
                <h1 className="project-details__name">Projekt Moviez</h1>
                <a href="https://github.com/rts-Liva/projekt-moviez-rts-Liva" target="_blank" className="project-details__link">Github repository</a>
                <h2 className="project-details__title">Beskrivelse</h2>
                <p className="project-details__text">Et 2 uger langt projekt. Det var det første store projekt siden jeg lærte react. Opgaven gik ud på man skulle bruge et api med TMDB data til at oprette en film og tv-serie database.</p>
            </section>
            <Footer />
        </>
    );
}

export default DetailsPage;