import { useState } from "react";
import { useForm } from "react-hook-form";
import { Iform } from "../../Interfaces";
import { apiAxios } from "../../services";
import Received from "../Received";
import { Container,Form} from "./style";
import {yupResolver} from "@hookform/resolvers/yup"
import { formSchema } from "../../validators";

const FormCalc = () =>{
    const {register, handleSubmit, formState:{errors},} = useForm<Iform>({resolver: yupResolver(formSchema)})
    const [data, setData] = useState(0)
    const [newValue, setNewValue] = useState(0)
    

    
        const getValuesApi = async({amount, installments, mdr, days}:Iform )=>{
            let values = {
                amount: amount,
                installments: installments,
                mdr: mdr,
            }            
            
            if(values.amount >= 1000  && values.mdr > 0 ){
                try{
                    await apiAxios.post("", values).then((response)=>{
                        setData(response.data);
    
                    })}catch(err){
                        console.error(err)
                    }
            }
            
            let newDays = {
                amount: amount,
                installments: installments,
                mdr: mdr,
                days: [days]
            }

            let dayStr = newDays.days.join()
            
            
            if(newDays.amount >= 1000 && newDays.mdr > 0 && Number(dayStr) !== 1 && Number(dayStr) > 0){

                dayStr.split("")
                try {

                    await apiAxios.post("", newDays).then((response) => {
                        setNewValue(response.data);
                        
                    });
                    
                } catch (error) {
                    console.error(error)
                }
            }
            
            

        }


        let finalValue = Object.values(data)
        let newDay = Object.values(newValue)
        let key = Object.keys(newValue)

        

    
    return (
        <Container >
        <Form onChange={handleSubmit(getValuesApi)} >
        <label htmlFor="amount">Informe o valor da venda * </label>
            <input type="number" placeholder="ex. R$ 1000,00" id="amount" min={1000} {...register("amount")}/>
            <p>{errors?.amount?.message}</p>
        <label htmlFor="installments">Em quantas parcelas * </label>
            
            <select id="installments" {...register("installments")}>

                <option value="">parcelas</option>
                <option value="1" >1x</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
                <option value="4">4x</option>
                <option value="5">5x</option>
                <option value="6">6x</option>
                <option value="7">7x</option>
                <option value="8">8x</option>
                <option value="9">9x</option>
                <option value="10">10x</option>
                <option value="11">11x</option>
                <option value="12">12x</option>
            </select>
            <span>Máximo de 12 parcelas</span>
            <p>{errors?.installments?.message}</p>

        <label htmlFor="received">Informe o percentual de MDR * </label>
            <input type="number" placeholder="ex. 4" id="mdr" min={1} max={100}{...register("mdr")}  />
            <p>{errors?.mdr?.message}</p>

        <label htmlFor="Idays">Datas personalizadas </label>
            <input type="number" placeholder="digite número de dias" id="days" {...register("days")}/>
            <p>{errors?.days?.message}</p>

        </Form>
        
        <Received newKey={key} finalValue={finalValue} newDay={newDay}  />
        
        </Container>
    )
}

export default FormCalc;


