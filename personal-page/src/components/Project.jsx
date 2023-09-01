
export default function Project() {

    function upZIndex(e) { e.target.style = "z-index: 3"}
    function downZIndex(e) {e.target.style = ""}


    return(
        <section className="project__section">
            <div className="project__wrapper">
                <div className="wrapper first" 
                onMouseOver={(e) => upZIndex(e)}
                onMouseLeave={(e) => downZIndex(e)} id="3"></div>
                <div className="wrapper sec" id="1"
                onMouseOver={(e) => upZIndex(e)}
                onMouseLeave={(e) => downZIndex(e)}></div>
                <div className="wrapper third" id="0"
                onMouseOver={(e) => upZIndex(e)}
                onMouseLeave={(e) => downZIndex(e)}></div>
            </div>
        </section>
    )

}