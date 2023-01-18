import axios from 'axios';

export const api=axios.create({
    baseURL:'https://localhost:44398/api/'
});

export const  GetData=(controllerName: string, methodName: string):apiResult=>{
    var apiData={} as apiResult;
    api.get(controllerName+'/'+methodName).then(res=>{
        apiData.status=res.status;
        apiData.statusText=res.statusText;
        apiData.successData=res.data;
    }).catch(error=>{
        if (error.response) {
            apiData.status=error.response.status;
            apiData.errorData=error.response.data;
        }
        else{
            apiData.error=error
        }
    })
    return  apiData;
}

export type apiResult={

    status:number,
    statusText:string,
    successData:any,
    errorData:any,
    error:any
}