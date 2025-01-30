import { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
import '../scss/components/home.scss';

function IndexPage() {
    const [newestProject, setNewestProject] = useState({});

    useEffect(() => {
        async function fetchNewestProject() {
            const response = await fetch('/api/projects/latest');
            const data = await response.json();

            setNewestProject(data[0]);
        }

        fetchNewestProject();
    }, [])

    return (
        <>
            <Header current='home' />
            <section className="home">
                <h1 className="home__heading">Velkommen,</h1>
                <p className="home__sub-heading">til mit portfolio.</p>
                <p className="home__text">Mit navn er Liva Kuhlmann. Jeg er en studerende webudvikler med fokus på moderne, effektive, og brugervenlige løsninger. Kodning er en stor passion af min, og jeg er altid på jagt efter nye udfordringer.</p>
                <p className="home__text">Jeg søger en praktikplads, hvor jeg kan anvende mine færdigheder i et professionelt miljø, lære fra dygtige udviklere og bidrage til spændende projekter. Jeg ser frem til at udvide min viden om webudvikling.</p>
                <Link to={`/details/${newestProject._id}`} className="home__link">Se mit nyeste projekt</Link>
            </section>
            <Footer />
        </>
    );
}

export default IndexPage;