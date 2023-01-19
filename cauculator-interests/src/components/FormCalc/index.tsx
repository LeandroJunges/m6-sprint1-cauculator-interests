import { useState } from "react";
import { useForm } from "react-hook-form";
import { Iform } from "../../Interfaces";
import { apiAxios } from "../../services";
import { Container,Form, ReceivedValues } from "./style";

const FormCalc = () =>{
    const {register, handleSubmit} = useForm<Iform>()
    const [data, setData] = useState(0)
    



        const getValuesApi = async({amount, installments, mdr}:Iform )=>{
            let values = {
                amount: amount,
                installments: installments,
                mdr: mdr
            }
            if(values.amount >= 1000 && values.installments > 0 && values.installments < 13  && values.mdr > 0 ){
                try{
                    await apiAxios.post("", values).then((response)=>{
                        console.log(response);
                        setData(response.data);
    
                    })}catch(err){
                        console.error(err)
                    }
            }
            

        }
        // useEffect(()=>{
        //     getValuesApi(data)

        // },[data])

        let finalValue = Object.values(data!)

        

    
    return (
        <Container >
        <Form onChange={handleSubmit(getValuesApi)} >
        <label htmlFor="amount">Informe o valor da venda * </label>
            <input type="number" placeholder="ex. R$ 1000,00" id="amount" {...register("amount")}/>
        <label htmlFor="installments">Em quantas parcelas * </label>
            <input type="" placeholder="ex. 5" id="installments" {...register("installments")} />
            <span>Máximo de 12 parcelas</span>
        <label htmlFor="received">Informe o percentual de MDR * </label>
            <input type="number" placeholder="ex. 4" id="mdr" {...register("mdr")}  />
        <label htmlFor="Idays">Datas personalizadas </label>
        <select name="Cdays" id="Idays">
            <option value="30">30</option>
            <option value="30">30</option>
            <option value="30">30</option>
        </select>
        </Form>
        
        <ReceivedValues>
        <h3>VOCÊ RECEBERÁ :</h3>
        <li>Amanhã: R${finalValue[0]},00 </li>
        <li>Em 15 dias: R${finalValue[1]},00</li>
        <li>Em 30 dias: R${finalValue[2]},00</li>
        <li>Em 90 dias: R${finalValue[3]},00</li>
        </ReceivedValues>
        </Container>
    )
}

export default FormCalc;


