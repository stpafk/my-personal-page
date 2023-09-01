import projects from "../helpers/projects"
import uniqid from 'uniqid'

export default function Project() {

    function upZIndex(e) { e.target.style = "z-index: 3"}
    function downZIndex(e) {e.target.style = ""}


    return(
        <section className="project__section">
            <div className="project__header">
                <h1>My Projects</h1>
                <p>Here is my portfolio with my personal projects.
                    Also, I provided the source code and the live preview for each
                    project.</p>
            </div>
            <div className="project__wrapper">
                {projects.map((project) => (
                    <div className="wrapper" id={project.id} key={uniqid()}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className="links">
                            <a href={project.gh_repo}>GitHub Repo</a>
                            <a href={project.live}>Live Preview</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}