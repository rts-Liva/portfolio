import { useParams } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import '../../scss/components/project-details.scss';
import { useEffect, useState } from "react";

function DetailsPage() {
    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        async function fetchProjectDetails() {
            const response = await fetch(`/api/projects/${id}`);
            const data = await response.json();

            setDetails(data);
        }

        fetchProjectDetails();
    },[])

    return (
        <>
            <Header current='projects' />
            <section className="project-details">
                <img src={details.path} alt="project poster" className="project-details__poster" />
                <h1 className="project-details__name">{details.name}</h1>
                <a href={details.github} target="_blank" className="project-details__link">Github repository</a>
                <h2 className="project-details__title">Beskrivelse</h2>
                <p className="project-details__text">{details.description}</p>
            </section>
            <Footer />
        </>
    );
}

export default DetailsPage;