import techs from "../helpers/tech"


export default function Technology() {

    function throwPopUp(e) {
        
    }

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
                                <li className="grid_tech" key={item.id}>
                                    <i className={item.i}></i>
                                    <h3 className="tech__name">{item.name}</h3>
                                    <p className="tech__exp"><span
                                    className="span__msg" id={item.name}
                                    onMouseOver={(e) => throwPopUp(e)}>{item.exp}</span>/5</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
            </section>
        </>
    )

}