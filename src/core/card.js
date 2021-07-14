import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const card =(props)=>{

    return(
        <div className="col-md-3" style={{float:'left'}}>
        <div className="card mb-2">
        <a href={props.link}>
           <img className="card-img-top"
             src={props.suc} alt="Card image cap"/>
             </a>
         </div>
       </div>
 
    )
}

export default card;
