import { createContext, useState, useEffect, useContext } from "react";

const ApiData = createContext();

export  function ReadDataProvider({children}){
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/68cd1477d0ea881f4082ec3d")
        .then(resultat => resultat.json())
        .then((resultat) => {
            setData(resultat.record.record)
        })
        .catch((error => console.error("Fel vid läsning av kundata", error)))
     
},[]);
    

    
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


