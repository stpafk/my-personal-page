import Email from '../assets/email.svg';

export default function Contact() {
    return(
        <section id="contact" className="contact__section">
            <div className="contact__header">
                <h1>Contact</h1>
                <p>Here are my contact links, including my email, linkedin and github.</p>
            </div>

            <div className="contact__links">
                <ul>
                    <li className="grid__contact">
                        <img id="linkedin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='LinkedIn' />
                    </li>
                    <li className="grid__contact">
                        <img id="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Github' />
                    </li>
                    <li className="grid__contact">
                        <img id="email" src={Email} alt="Email" />
                    </li>
                </ul>
            </div>
        </section>
    )
}