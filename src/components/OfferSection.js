import bike from '../assets/bike.png'
function OfferSection(){

    return(
        <div className={OfferSection}>
            <div className="container1">
                <div className="text1">
                    <h2>Что мы предлагаем</h2>
                    <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда поможет избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p>
                </div>
                <div className="image1">
                    <img src={bike} alt="Изображение велосипеда"/>
                </div>
            </div>
        </div>
    )

}
export default OfferSection;