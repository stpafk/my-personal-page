import techs from "../helpers/tech"


export default function Technology() {

    return(
        <>
            <section className="technology__section">
                    <div className="tech__header">
                        <h1>Technologies</h1>
                        <h3>Here are the technologies which I have some experience on.</h3>
                    </div>
                    <div className="tech__box">
                        <ul className="tech__ul">
                            {techs.map((item) => (
                                <li className="grid_tech">
                                    <i className={item.i}></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
            </section>
        </>
    )

}