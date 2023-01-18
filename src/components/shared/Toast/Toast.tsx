
import { useState,useEffect } from 'react';
export const Toast=({show}:toastParams)=>{
    

    
    return(
        <div className={'snackbar '+ show}>Some text some message..</div>
    )
}


export  type toastParams={
    show:string;
}