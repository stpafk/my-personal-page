import projects from "../helpers/projects"
import uniqid from 'uniqid'

export default function Project() {

    function upZIndex(e) { e.target.classList.add("hovered")}
    function downZIndex(e) {e.target.classList.remove("hovered")}

    return(
        <section className="project__section" id="projects">
            <div className="project__header">
                <h1>My Projects</h1>
                <p>Here is my portfolio with my personal projects.
                    Also, I provided the source code and the live preview for each
                    project.</p>
            </div>
            <div className="project__wrapper">
                {projects.map((project) => (
                    <div className="wrapper" id={project.id} key={uniqid()}
                    onMouseEnter={(e) => upZIndex(e)}
                    onMouseLeave={(e) => downZIndex(e)}>
                        <div className="wrapper__section">
                            <div className="title">
                                <h1>{project.title}</h1>
                            </div>
                            <p>{project.description}</p>
                            <div className="links">
                                <span className="link__icon">
                                    <a href={project.gh_repo}>
                                        <i className="bi bi-github"></i>
                                        <span className="link__text">Code</span>    
                                    </a>
                                </span>
                                <span className="link__icon">
                                    <a href={project.live}>
                                        <i className="bi bi-window-fullscreen"></i>
                                        <span className="link__text">Preview</span>
                                    </a>
                                </span>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}