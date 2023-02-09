import { useState } from "react"
import React from "react"
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Todo } from "./Todo";

export const Formstep = () => {
    const [page, setPage ] = useState(0);
    const props = {page, setPage}


    switch(page){
        case 0:
            return <Login {...props}/>;
        case 1:
            return <Signup {...props} />;
        case 2:
            return <Todo {...props} />;
    }


    return (
        <></>
    )

}