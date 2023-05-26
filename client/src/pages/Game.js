

//  import React from 'react';
import xbox from "../assets/xbox.png";
import SearchBar from "../components/SearchBar";


import React from 'react';


const Card = (props) => {
    console.log(props)
    return (
        <div>
            
        
        
        <div className='card left'>
            <div className='card-header'>
                <h3>{props.name}</h3>
            </div>
            <div className='card-body'>
                <div dangerouslySetInnerHTML={{__html: props.description}}></div>
                <div className='card-header'>
                <img src={props.background}/> 
            </div>
            </div>
        </div>
        {<img src={xbox} alt="pic" className='ps5'/>}
        </div>
        
    )
}

export default Card;







        


