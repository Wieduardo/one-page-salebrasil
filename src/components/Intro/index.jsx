import { IntroContainer, IntroText } from "./style";

const Intro = () =>{
    return(<>
        <IntroContainer>
            <IntroText>
                <h3>Bem Vindo a</h3>
                <h4>We Web Design</h4>
                <text>A comunicação visual é capaz de encantar, engajar e persuadir. 
                    Sem imagens, cores, fotos, gráficos e outros tipos de recursos visuais, 
                    o marketing perde força. Por isso, estamos aqui prar te ajudar a fortalecer a 
                    maneira como a sua marca se comunica visualmente.
                </text>
            </IntroText>
            <img src="https://img.freepik.com/fotos-gratis/interior-de-espaco-de-escritorio-moderno_158595-5206.jpg?w=740&t=st=1682697281~exp=1682697881~hmac=0e153feca952378cbda32a03ffd9f3a0a6dfea827c0eaff4200c8dc5de1e833d" alt="Barbearia"/>
        </IntroContainer>
    </>)
}

export default Intro;