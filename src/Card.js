import { useState } from "react";

const Card =({product}) => {

        const [isOpen, setIsOpen] = useState(false);
        
        const styleModal = { display: isOpen ? "block" : "none" };
    return (
        <div className='theWitcherCard'>
            <h2>{product.name}</h2>
            <img src={product.image} className='cardImg' alt="The Witcher 3" />
            <div className="descCard">
                <p>Жанр: {product.genre}</p>
                <p>Дата выхода: {product.date}</p>
                <p>Платформы: {product.platform}</p>
                <span>Рейтинг: </span>
                <span className='gameRating'>{product.rating}</span>
                <h3>Краткое описание:</h3>
                <p className="descriptionCard">{product.description}</p>
                <button className="buttonCard" onClick={setIsOpen}><span>Подробнее</span></button>
            </div>

            <div className='theWitcherModal' style={styleModal}>
                        <div>
                                <h2>{product.name}</h2>
                                    <img className="modalImg" src={product.image} alt="The Witcher 3" />
                            <div className='gameState'>
                                    <p>Жанр: {product.genre}</p>
                                <p>Дата выхода: {product.date}</p>
                                <p>Платформы: {product.platform}</p>
                                <span>Рейтинг: </span>
                                <span className='gameRating'>{product.rating}</span>
                                <h3>Описание:</h3>
                                <p className='description'>{product.allDescription}</p>
                            </div>
                            
                            <div className='systemRequirements'>
                                <h2>Минмальные требование:</h2>
                                <p>Операционная система: {product.OC}</p>
                                <p>Процессор: {product.Proc}</p>
                                <p>Видеокарта: {product.Vcard}</p>
                                <p>Оперативная память (Гб):  {product.OCR}</p>
                                <p>Место на диске (Гб): {product.RCD}</p>
            
                                <h2>Рекомандуемые требование:</h2>
                                <p>Операционная система: {product.RecOC}</p>
                                <p>Процессор: {product.RecProc}</p>
                                <p>Видеокарта: {product.RecVcard}</p>
                                <p>Оперативная память (Гб):  {product.RecOCR}</p>
                                <p>Место на диске (Гб): {product.RecRCD}</p>
                            </div>
                        </div>
                        
            
            
            
            
            
            
                            <button onClick={() => setIsOpen(false)} className='closeModal'><img src={product.closeButtonImg} alt="close img" /></button>
                        
                        <h2 className='screen'>Скриншоты:</h2>
                        <img src={product.Screen} className="screenGame"/>
                        <img src={product.Screen_2} className="screenGame"/>
                        <img src={product.Screen_3} className="screenGame"/>
                        <img src={product.Screen_4} className="screenGame"/>
                        <img src={product.Screen_5} className="screenGame"/>
                    </div>
        </div>
    
    )
}
    


export default Card