import * as yup from "yup";


export const formSchema = yup.object().shape({
    amount: yup.number().required("Campo obrigatório!").min(1000, "Valor minimo deve ser 1000!").positive("Numero deve ser positivo!"),
    installments: yup.number().required("Campo obrigatório!"),
    mdr: yup.number().required("Campo obrigatório!").positive("Numero deve ser maior que zero!"),
    days: yup.number().notRequired().min(2).max(365),

})