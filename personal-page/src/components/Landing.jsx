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
                <div className="presentation__info">
                    <h1>Introduction</h1>
                    <p className="presentation__text">
                        Hi! My name is Stephan and I am an aspiring Fullstack Web Developer.
                        My main stack currently is JavaScript (React & Node), but I'm always
                        looking to learn new stuff.
                    </p> 

                    <h1>Goals</h1>
                    <p className="presentation__goals">
                        As an aspiring Junior Developer, my goals are to not only to build easy-to-use, accessible and
                        maintanable applications, but also, to create a communicative and assertive work environment.
                    </p>

                    <label htmlFor="checkout__tech">Check my technologies!</label>
                    <input type="button" value="Check Technologies" />

                    
                </div>
                <img src={img} alt="Stephan's Img" />
            </article>
        </section>
    )

}