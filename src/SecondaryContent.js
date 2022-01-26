import React from 'react';
import Image from './images/icon3.png'

export default function SecondaryContent(props) {
  return (
  <div className='reasons'>

<ul>
{props.reasons.map((reason)=>(
            <li key={reason.id}>
               <div >
               <img src={reason.img} alt="reason"/>
               </div>
               <div >
               <h3>{reason.header}</h3>
                    <p>{reason.text}</p>
               </div>
            </li>
        ))}




</ul>

  </div>
  );
}
