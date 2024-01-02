import { createContext } from "react";
import { Data } from "./AppData";
export const AppContext = createContext();
export default function ContextStore(props) {
    return <AppContext.Provider value={{ Data }}>
        {props.children}
    </AppContext.Provider>
}
