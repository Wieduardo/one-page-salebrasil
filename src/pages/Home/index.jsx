import Carrossel from "../../components/Carrossel";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Lista from "../../components/ListaSites";
import Nav from "../../components/Nav";

const Home = () =>{

    return(
        <>
            <Nav/>
            <Carrossel/>
            <Intro/>
            <Lista/>
            <Footer/>
        </>
    )
}

export default Home;