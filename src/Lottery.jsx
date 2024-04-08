// import './Lottery.css';
// import { useState } from 'react';
// import {genticket,sum} from './helper';
// export default function Lottery(){
//     let[ticket,setTicket]=useState(genticket(3))
//     let isWining=sum(ticket)===15;
//     let Random=()=>{
//         setTicket(genticket(3))
//     }
//     return(
//         <div>
//             <h1>Lottery Game!</h1>
//             <div className='Lottery'>
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div><br></br>
//             <button onClick={Random}>Buy Ticket</button>
//             <h3>{isWining && "Congratulations , You Won !"}</h3>
//         </div>
//     )
//     }