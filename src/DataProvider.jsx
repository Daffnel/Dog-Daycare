import { createContext, useState, useEffect, useContext } from "react";

const ApiData = createContext;

export function ReadData(){
    const[data, setData] = useState([]);
try{
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/68cd1477d0ea881f4082ec3d")
        .then(resultat => resultat.json())
        .then(setData);
        console.log("Data-api läst")
},[]);
    }catch(err){
    console.log("Kunde inte läsa in data-api " + err);
    }

 return (
    <ApiData.Provider value={{ data }}>
      {children}
    </ApiData.Provider>
  );
}

    //Hook använda data i valfri komponenet
    export function useCustomerData(){
        return useContext(ApiData);
    }

