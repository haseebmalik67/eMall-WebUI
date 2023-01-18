import { useState } from "react";
export const getObject=()=>{
    
     fetch("https://localhost:44398/api/Category/GetCategories")
        .then(handleErrors)
        .then(response => {
            console.log(response.status);
            response.json().then((data:any)=>{
                console.log(data);
            })
            
        })
        .catch(error => console.log('error') );
}
function handleErrors(response:any) {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
}

export const getData = async (controllerName: string, methodName: string): Promise<any> => {
    try{
        debugger;
        const res=await fetch('https://localhost123:44398/api/' + controllerName + '/' + methodName);
        
    }
    catch(err)
    {
        console.log(err);
    }
       
}

export const SaveData = (controllerName: string, methodName: string, methodType: string,obj:any):Promise<apiResult> => {
  
    debugger;
    var apiData={} as apiResult;
  
        fetch('https://localhost:44398/api/'+ controllerName + '/' + methodName, {
            method: methodType,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res=>{return res})
        .then(response => {
            apiData.status= response.status.toString();
            response.json().then((result:any)=>{
                apiData.data= result;
            })
        })
        .catch(error => {
            apiData.error='seems to be network error';
            //return Promise.reject(apiData);
           
        });

   
    return Promise.resolve(apiData);
    
}

export type apiResult={

    status:string,
    data:string,
    error:any

}