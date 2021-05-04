import React, { useContext } from "react"
import {APIContext} from "./APIContext"
export var temptext, tempauthor, tempcat;

export default function QOD(){
    let api = useContext(APIContext);
    async function QOD() {
        try{
            await api.getQuote().then(resp =>{
                temptext = resp.data.contents.quotes[0].quote;
                tempauthor = resp.data.contents.quotes[0].author;
                tempcat = resp.data.contents.quotes[0].category;
                //setQuote((...quote) =>({...quote, text: temptext, author: tempauthor, category: tempcat, fetch: false}));
            })
        }catch(e){
            return e;
        }
        
    }

    QOD();

    return(<></>);
}