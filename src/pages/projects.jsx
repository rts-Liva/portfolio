import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ProjectsList from "../components/projects-list";

function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchLatestProjects() {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/projects/latest`);
            const data = await response.json();

            setProjects(data);
        }

        fetchLatestProjects();
    }, [])

    return (
        <>
            <Header current='projects' />
            <ProjectsList projects={projects} />
            <Footer />
        </>
    );
}

export default ProjectsPage;