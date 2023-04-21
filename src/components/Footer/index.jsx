import { useContext } from "react";
import { GlobalContext } from "../../providers/global";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FooterContainer, FooterEndereco, FooterMedia, MediaContainer } from "./style";

const Footer = () => {

    const { userData, cellText } = useContext(GlobalContext);

    return(
        <>
        <FooterContainer>
            <h3>Venha nos conhecer!</h3>
            <MediaContainer>
                <FooterMedia>
                    <li>
                        <a target="_blank" rel='noreferrer' href={`https://web.whatsapp.com/send?phone=+55${userData.celular}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`} className="icon-whats"><FaWhatsapp/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.facebook} className="icon-face"><FaFacebook/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.twitter} className="icon-twit"><FaTwitter/></a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href={userData.insta} className="icon-insta"><FaInstagram/></a>
                    </li>
                </FooterMedia>
                <FooterEndereco>
                    <h3>Telefone</h3>
                    <span>{cellText}</span>
                    <h3>Endereço</h3>
                    <span>{userData.rua} - {userData.bairro} - {userData.cidade}</span>
                </FooterEndereco>
            </MediaContainer>
        </FooterContainer>
        </>
    )   
}

export default Footer;