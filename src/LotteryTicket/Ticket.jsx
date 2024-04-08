import Ticketnumber from './TicketNum'
export default function Ticket({ticket}){
    return(
        <div>
            {ticket.map((num,idx)=>(
                <Ticketnumber num={num} key={idx}/>
            ))}
        </div>
    )
}