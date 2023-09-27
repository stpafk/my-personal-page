import Email from '../assets/email.svg';

export default function Contact() {
    return(
        <section id="contact" className="contact__section">
            <div className="contact__header">
                <h1>Contact</h1>
                <p>Here are my contact links, including my LinkedIn, Github and Email.</p>
            </div>

            <div className="contact__links">
                <ul>
                    <li className="grid__contact">
                        <img id="linkedin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='LinkedIn' />
                        <a href="https://www.linkedin.com/in/stephan-allek-weigert-53801619b/">LinkedIn</a>
                    </li>
                    <li className="grid__contact">
                        <img id="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Github' />
                        <a href="https://github.com/stpafk">Github</a>
                    </li>
                    <li className="grid__contact">
                        <img id="email" src={Email} alt="Email" />
                        <p>stephan.weigert@hotmail.com</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}