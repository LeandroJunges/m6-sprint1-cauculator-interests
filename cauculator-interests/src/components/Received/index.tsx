import { Iprops } from "../../Interfaces"
import { ReceivedValues } from "../FormCalc/style"


const Received = ({finalValue, newDay, newKey}: Iprops)=>{
    return (
        <ReceivedValues>
        <h3>VOCÊ RECEBERÁ :</h3>
        <li>Amanhã: R${finalValue.length === 0? 0: finalValue[0] },00 </li>
        <li>Em 15 dias: R${finalValue.length === 0? 0: finalValue[1] },00</li>
        <li>Em 30 dias: R${finalValue.length === 0? 0: finalValue[2] },00</li>
        <li>Em 90 dias: R${finalValue.length === 0? 0: finalValue[3] },00</li>

        { newDay.length > 0 ?(

            <li>Em {newKey[0]} dias : R$ {newDay[0]},00 </li>
            ):(
            <li className="day" ></li>
        )

        }

        </ReceivedValues>
    )
}

export default Received