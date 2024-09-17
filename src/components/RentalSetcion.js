import bikes from '../assets/bikes.png'
function RentalSetcion(){

    return(
        <div className={RentalSetcion}>
            <div className="container6">
                <div className="image6">
                    <img src={bikes}  alt="Велосипеды"/>
                </div>
                <div className="content">
                    <div>Прокат велосипедов</div>
                    <p>
                        У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!
                    </p>
                </div>
            </div>
        </div>
    )

}
export default RentalSetcion;