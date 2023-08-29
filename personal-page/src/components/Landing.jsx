import img from '../assets/S.jpg'

export default function Landing() {

    return(
        <section className="landing__page">
            <div className="name__heading">
                <h1>Stephan Allek</h1>
                <h1>Web Dev</h1>
            </div>
            <div className="bar"></div>
            <article className="presentation">
                <p className="presentation__text">
                    Hi! My name is Stephan and I am an aspiring Fullstack Web Developer.
                    My main stack currently is JavaScript (React & Node), but I'm always
                    looking to learn new stuff.
                    My focus in web developing is to deliver an easy-to-use, accessible and
                    maintainable application. Hover by to see some of my knowledges and
                    projects!
                </p>
                <img src={img} alt="Stephan's Img" />
            </article>
        </section>
    )

}