
export default function Sidebar() {

    return(
        <nav>
            <div className="header__img">
                <img src="" alt="some icon" />
            </div>
            <ul>
                <li className="sidebar__li">
                    <a href="#">
                        <span className="icon"><i class="bi bi-house"></i></span>
                        <span className="txt-click">Home</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#">
                        <span className="icon"><i class="bi bi-braces"></i></span>
                        <span className="txt-click">Technology</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#">
                        <span className="icon"><i class="bi bi-lightbulb"></i></span>
                        <span className="txt-click">Projects</span>
                    </a>
                </li>
                <li className="sidebar__li">
                    <a href="#">
                        <span className="icon"><i class="bi bi-file-person"></i></span>
                        <span className="txt-click">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )

}