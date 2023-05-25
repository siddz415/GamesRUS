// import React from 'react';
import SearchBar from "../components/SearchBar";
// // const Search = () => {
// //     return (
// //      <div>   
// //         <SearchBar/>
       
// </div>   
//     )
// };

// export default Search;

//This bottom code is the new one im working on

import React from 'react';
// import './card.css';

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
        </div>
    )
}

export default Card;