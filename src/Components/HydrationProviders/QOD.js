import React, { useContext } from "react"
import {APIContext} from "../APIContext"
export var temptext, tempauthor, tempcat;

export default function QOD(){
    let api = useContext(APIContext);

    {/*
    *  THIS FUNCTION AWAITS A FEEDBACK FROM QOD PUBLIC RPOSITORY PROVIDED BY
    *  YAML: https://quotes.rest/yaml/theysaidso.quotes.openapi.yaml?v1.1
    *  INGESTS QIOD AND DISPLAYS AS COMPONENT   
    */}
    async function QOD() {
        try{
            await api.getQuote().then(resp =>{
                temptext = resp.data.contents.quotes[0].quote;
                tempauthor = resp.data.contents.quotes[0].author;
                tempcat = resp.data.contents.quotes[0].category;
            })
        }catch(e){
            return e;
        }   
    }
    QOD();
    return(<></>);
}