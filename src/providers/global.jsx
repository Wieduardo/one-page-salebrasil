import { createContext, useState } from "react";
import Images from "../imgs/index";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Imagems Carrossel
    const carrossel = [
      {alt:"foto mecânico",imagem:"https://img.freepik.com/fotos-gratis/carro-de-conservacao-do-mecanico-atenta_1170-1535.jpg?w=740&t=st=1682090735~exp=1682091335~hmac=52a0b3991ff087be5b5a307c39930c3e7918f771ae80d51ede318ffac96e9456"},
      {alt:"foto barista", imagem:"https://img.freepik.com/fotos-gratis/barista-sorridente-usando-tablet-digital-enquanto-trabalhava-em-um-bar_637285-3367.jpg?w=740&t=st=1682090603~exp=1682091203~hmac=2121065391206c2e91353a7667cb032bb1de86c3d75f3d35e0ab124d7558ef91"},
      {alt:"foto escritorio", imagem:"https://img.freepik.com/fotos-gratis/interior-de-espaco-de-escritorio-moderno_158595-5206.jpg?w=740&t=st=1682090628~exp=1682091228~hmac=7a6d1d5c9f93dec370e44599904452204489d9ab6f7b3cbf0d32599fa9aaa34c"},
      {alt:"foto mercado de frutas", imagem:"https://img.freepik.com/fotos-gratis/vista-de-vegetal-e-fruta-mercado-em-cidade_23-2148209854.jpg?w=740&t=st=1682090654~exp=1682091254~hmac=edd8a25b7d30f613c0036f053f15c75a6be80c4a66175e517fd30999c4d3ef1c"},
      {alt:"foto mulher pintando vaso", imagem:"https://img.freepik.com/fotos-gratis/mulher-pintando-panela-de-barro-dentro-de-casa_23-2148944921.jpg?w=740&t=st=1682090674~exp=1682091274~hmac=ae79d33bdf7977fa55f73afd63adf51cb3915171767d698f08edeeb702450f8c"},
    ]

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

    //Informação do Usuário
    const userData = {
      telefone:"41 3333-3333",
      celular:"+5541992722245",
      twitter:"http://twitter.com.br",
      facebook:"http://facebook.com.br",
      insta:"http://instagram.com.br",
      cidade:"Cidade",
      bairro:"Bairro",
      rua:"Rua - nº xxxx"

    }

    //Transforma o número de ceular em legível
    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+" "+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ catalogo, busca, setBusca, filtro, carrossel, userData, cellText }}>
          {children}
        </GlobalContext.Provider>
       )

}