import { Link } from 'react-router';
import '../scss/components/projects.scss';

function ProjectsList({ projects }) {
    return (
        <>
            <h1 className='projects__heading'>Mine projekter</h1>
            <div className="projects">
                <div className="project">
                    <Link to={`/details/${projects._id}`}><img src="projekt-moviez.jpg" alt="project poster" className="project__poster" /></Link>
                    <div className="project__info">
                        <Link to={`/details/${projects._id}`}><h2 className="project__name">Projekt Moviez</h2></Link>
                        <a href="https://github.com/rts-Liva/projekt-moviez-rts-Liva" target="_blank" className="project__link">Github repository</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsList;