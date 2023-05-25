

<<<<<<< HEAD
import React from 'react';
=======
//  import React from 'react';
>>>>>>> 8f4bdfee01b8550b3cf10ff1c66725e983e1ab78
import xbox from "../assets/xbox.png";
import SearchBar from "../components/SearchBar";


const Card = (props) => {
    console.log(props)
    return (
        <div>
            
        
        
        <div className='card float-left'>
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







        


