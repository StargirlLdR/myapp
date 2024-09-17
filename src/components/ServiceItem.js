import React from 'react';

function ServiceItem(props){
    const {text,backgroundColor} = props
    let styleObj = {
        backgroundColor: backgroundColor,
        color: "white",
        fontStyle: "italic",
        fontSize:"32px"
    }
    return(
        <div style={styleObj} className='ServiceItem'>
            <div  className='ss'>
            <p>{text}</p>
            <div className='line-ServiceItem'></div>
            </div>
            
        </div>
    )
}

export default ServiceItem;