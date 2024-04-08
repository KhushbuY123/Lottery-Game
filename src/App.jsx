import './App.css'
import Lottery from './LotteryTicket/Lottery'
import {sum} from './LotteryTicket/helper';
function App() {
  let winSum = (ticket)=>{
    return sum(ticket)===15;
  }
  return (
    <>
      <Lottery n={4} winSum={winSum}/>
    </>
  )
}

export default App
