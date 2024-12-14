import { useState ,useEffect, useRef } from "react"; 
import img0 from "../assets/destaque-img-0.jpg";
import img1 from "../assets/destaque-img-1.jpg";
import img2 from "../assets/destaque-img-2.jpg";
import img3 from "../assets/destaque-img-3.jpg";

const Destaques = () => {
    const [count, setCount] = useState(0);
    const imgs = [img0,img1,img2,img3];
    const destaqueRef = useRef(null);

    useEffect(() =>{
        let timerD = setInterval(() =>{
            setCount(c => (c + 1) % 4);
        },2500)
        
        return () =>{
            clearInterval(timerD);
        }
    }, []);

    useEffect(() =>{
        if(destaqueRef.current){
           destaqueRef.current.style.backgroundImage = `url(${imgs[count]})`;
        } 
    },[count]);
    

    return(
        <>
            <section className="destaques" ref={destaqueRef}>
                <div className="destaques__info">
                    <div className="destaques__text">
                        <h1 className="destaques__title">Destaques do momento</h1>
                        <p className="destaques__p">
                            <b>Encontre</b> as informações mais <b>relevantes</b> e <b>atualizadas</b>, cuidadosamente selecionadas para mantê-lo bem informado sobre os principais <b>acontecimentos</b>. Acompanhe as notícias que estão em <b>destaque</b> e tenha <b>acesso</b> ao que realmente importa.
                        </p>
                    </div>
                <div className="destaques__cta">
                    <button className="btn--white">Veja mais</button>
                </div>
                </div>
            </section>
        </>
    );

}

export default Destaques;