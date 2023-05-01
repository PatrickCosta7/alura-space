import Banner from "./banner.png"
import style from "./PaginaInicial.module.scss"
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";


export default function PaginaInicial(){
    return (
        <>
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <div className={style.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={Banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
            <Rodape />

        </>
    )
}