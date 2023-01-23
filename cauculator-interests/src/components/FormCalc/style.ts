import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: 0 15px;


input{
    color: #000000;
    background-color: #FFFFFF;
    width: 251px;
    height: 35px;
    border-radius: 4px;
    margin: 0px 10px 0px;
    padding: 3px;
    border: 1px solid #DDE6E9;
}
label{
    width: 251px;
    font-size: 12px;
    color: #656565;
    text-align: left;
    margin-left: 10px;
    margin-top: 16px;
}
    
span{
    font-size: 9px;
    margin-left: 10px;
    text-align: start;
    color: #CECECE;
}

select{
    color: #000000;
    background-color: #FFFFFF;
    width: 251px;
    height: 35px;
    border-radius: 4px;
    margin: 0px 10px 0px;
    padding: 3px;
    border: 1px solid #DDE6E9;
}
    
    
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`

export const ReceivedValues = styled.ul`
    width: 260px;
    height: 389px;
    background-color: rgba(209,220,227,0.18) ;
    border-radius: 4px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h3{
        color: #3D75BB;
    }
    li{
        color:#5D9CEC;
        list-style: none;
    }
    .days{
        display: none;
    }
    

`