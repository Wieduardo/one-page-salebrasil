import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { Container, Gallery } from "./style";

const Carrossel = () => {

    const { carrossel } = useContext(GlobalContext);

    window.onload = function(){

        const controls = document.querySelectorAll('.control');

        let currentItem = 0;

        const items = document.querySelectorAll('.item');

        const maxItems = items.length;
        
        controls.forEach( control => {
            control.addEventListener('click', () => {
                const isLeft = control.classList.contains("arrow-left");
                
                if(isLeft){
                    currentItem -= 1;
                } else {
                    currentItem +=1;
                }
                if (currentItem >= maxItems){
                    currentItem = 0;
                }
                if (currentItem < 0){
                    currentItem= maxItems -1;
                }

                items[currentItem].scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
            });
        });
    };

    return(
        <>
            <Container>
                <button className="arrow-left control" aria-label="Previous Image"><BsFillArrowLeftCircleFill/></button>
                <button className="arrow-right control" aria-label="Next Image"><BsFillArrowRightCircleFill/></button>
                <Gallery>
                    {carrossel.map((item,index) => (
                        <li key={index} className="item">
                            <img alt={item.nome} src={item.imagem}/>
                        </li>
                    ))}
                </Gallery>
            </Container>
        </>
    )
}

export default Carrossel;