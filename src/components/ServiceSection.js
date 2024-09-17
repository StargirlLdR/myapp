import React from 'react';
import ServiceItem from './ServiceItem'; 


function ServiceSection(){

    let blocks = [
        {id:1, backgroundColor:'#22356F', text: 'Годовое ТО'},
        {id:2, backgroundColor:'#0052C1', text: 'Выравнивание колес'},
        {id:3, backgroundColor:'#76B58B', text: 'Настройка переключателей'}
    ]

    return(
        <div className='all'>
            <div className='cont-service'>
                {
                blocks.map(elem => <ServiceItem
                                    key={elem.id}
                                    backgroundColor = {elem.backgroundColor}
                                    text = {elem.text}
                        />)
                }
            </div>
        </div>
    )
}

export default ServiceSection;
