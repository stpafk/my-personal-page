import { useEffect } from "react";

export default function Sidebar() {

    function toggleSidebar(e) {
        if (e.target.id === "") {
            e.target.id = "clicked";
            document.querySelector("nav").id = "clicked";
            return;
        }

        e.target.id = "";
        document.querySelector("nav").id = ""
    }

    useEffect(() => {
        document.querySelectorAll('a[href^="#"').forEach(anchor => {
            anchor.addEventListener("click", function(e){
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                })
            })
        })
    })

    return(
        <nav>
            <div className="header__img">
                <i className="bi bi-menu-button-wide"
                 onClick={toggleSidebar}></i>
            </div>
            <ul className="sidebar">
                <li className="sidebar__li">
                    <a href="#home">
                        <span className="icon"><i className="bi bi-house"></i></span>
                        <span className="txt-click">Home</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#technology">
                        <span className="icon"><i className="bi bi-braces"></i></span>
                        <span className="txt-click">Technology</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#projects">
                        <span className="icon"><i className="bi bi-lightbulb"></i></span>
                        <span className="txt-click">Projects</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#contact">
                        <span className="icon"><i className="bi bi-file-person"></i></span>
                        <span className="txt-click">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )

}