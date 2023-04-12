import { createContext, useState } from "react";
import Images from "../imgs/index";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Catalogo de sites
    const catalogo = [
		{nome: "LCS Contabilidade", descri: "Descrição vem aqui", link:"https://onepage-luiz-carlos.vercel.app/",  imagem: Images.logo1 },
        {nome: "Abacaxi", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"},
        {nome: "Morango 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/morangos-lindos-isolados-no-branco_93675-23690.jpg?w=740"},
        {nome: "Abacaxi 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"},
        {nome: "Morango 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/morangos-lindos-isolados-no-branco_93675-23690.jpg?w=740"},
        {nome: "Abacaxi 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"}
	];

    //Const de busca 
    const[busca,setBusca] = useState('');

    //Filtro por nome
    const filtro = catalogo.filter((item) =>item.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))

    return (
        <GlobalContext.Provider
         value={{ catalogo, busca, setBusca, filtro }}>
          {children}
        </GlobalContext.Provider>
       )

}