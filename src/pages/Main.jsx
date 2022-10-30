import { useState } from "react";

import { 
    Header,
    Form,
    PeopleData
 } from "../components";

export const Main = () => {
    const [dataFetch, setDataFetch] = useState(null)
    return (
        <>
        <Header/>
        <Form setDataFetch={setDataFetch}/>
        {
            dataFetch && <PeopleData dataFetch={dataFetch}/>
        }
        </>
    )
}