
import logo from '../assets/logo_copy1.png'
import dino from '../assets/din1.png'
function Header(){

    return(
        <div classname={Header}>
                <header className="header">
                    <div className="logo">
                        <img src={logo} alt='logo'/>
                    </div>
                    <nav className="nav">
                        <a href="#about">О нас</a>
                        <a href="#services">Услуги</a>
                        <a href="#rental">Аренда</a>
                    </nav>
                    <button className="contact-button">Связаться</button>
                </header>
                <div className="container">
                        <div className="text">
                            <h1>Веломастерская "Велозар"</h1>
                            <p>
                                Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли 
                                превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим, чтобы ваш 
                                двухколесный друг приносил вам только радость и удовольствие от езды.
                            </p>
                        </div>
                        <div className="image">
                            <img src={dino} alt="Динозавр на велосипеде"/>
                        </div>
                    </div>
        </div>
    )
}


export default Header;
