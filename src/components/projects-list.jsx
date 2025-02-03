import { Link } from 'react-router';
import '../scss/components/projects.scss';

function ProjectsList({ projects }) {
    return (
        <section className='projects-list'>
            <h1 className='projects-list__heading'>Mine projekter</h1>
            {projects.length > 0 ? (
                <div className="projects">
                    {projects.length > 0 && projects.map((project, index) => (
                        <div className="project" key={index}>
                            <Link to={`/details/${project._id}`}><img src={project.path} alt="project poster" className="project__poster" /></Link>
                            <div className="project__info">
                                <Link to={`/details/${project._id}`}><h2 className="project__name">{project.name}</h2></Link>
                                <p className='project__text'>{project.miniDescription}</p>
                                <Link to={project.github} target="_blank" className="project__link">Github repository</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <p>Loading...</p>}
        </section>
    );
}

export default ProjectsList;