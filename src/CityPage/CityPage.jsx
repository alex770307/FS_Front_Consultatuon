import "react";
import style from "./CityPage.module.css";

function CityPage() {
    return(
    <div className={style.cityClass}>
        <div className={style.h1_City}>
            <h1>Всё о городе</h1>  
            
        </div>
        <p>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Distinctio quos aut,
            dolor fugit eos voluptates
            enim aliquam ex voluptatibus
            veritatis iusto exercitationem
            laborum esse laboriosam
            cupiditate unde libero
            corporis dolores.</p>
        <img src="https://www.zukunftswerkstatt-kommunen.de/fileadmin/_processed_/c/5/csm_Frankfurt_1_9ceb854996.jpg" alt="" />
        </div>
    )
}

export default CityPage;