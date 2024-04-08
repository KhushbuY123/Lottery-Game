import { useState } from 'react';
import {genticket,sum} from './helper';
import Ticket from './Ticket';
let styles={border:"2px solid skyblue",borderRadius:"14px",width:"25%",height:"35px"}
export default function Lottery({n=3,winSum}){
    let[ticket,setTicket]=useState(genticket(n))
    let isWining=winSum(ticket);
    let Random=()=>{
        setTicket(genticket(n))
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={Random} style={styles}>Buy Ticket</button>
            <h3>{isWining && "Congratulations , You Won !"}</h3>
        </div>
    )
}