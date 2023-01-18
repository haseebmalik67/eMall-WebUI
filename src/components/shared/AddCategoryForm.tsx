import { Category } from "../../../src/dtos/category";
import { useState,useEffect,useRef } from "react";
import { GetData,apiResult,api } from "../../../src/dataaccess/emallAPI";
import FormContainer from "../../../src/components/shared/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import  {setCategory}  from "../../redux/reducers/category";
import {TextField,Button,Box,Snackbar, Alert} from '@mui/material'
import MuiAlert, { AlertProps,AlertColor } from '@mui/material/Alert';
import toast, { Toaster } from 'react-hot-toast';
import { TStore } from "../../redux/store";
import { useForm, SubmitHandler } from "react-hook-form";

const notify = (message:string,type:string) =>{
    if(type==='success')
    toast.success(message);
    else
    toast.error(message);
} 
type errorMessage={
    nameIsInValid:boolean,
    nameErrormessage:string
}



interface props{
    getCategories?:()=>void;
    addOrEdit?:boolean;
}

const AddCategoryForm = (props:props) => {

    const category:Category  = useSelector((state:TStore) => state.category);
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Category>();
    const [apiResult,setAPIResult]=useState({} as apiResult);
    const [status,setStatus]=useState('');
    const [validations,setValidations]=useState({} as errorMessage);
    const [startValidation,setStartValidation]=useState(false);
    const [open,setOpen]=useState(false);
    const [severity,setSeverity]=useState('' as AlertColor);
    
    const [error,setError]=useState({});
    const [valid,setValid]=useState(false);
    //const [category,setCategory]=useState({id:0,name:'',description:'',createdDate:new Date()} as Category);
  
    useEffect(() => {
        if(props.addOrEdit==true)
        {
            dispatch(setCategory({id:0,name:'',description:'',createdDate:new Date()}));
        }
    },[]);
   
    useEffect(() => {

        ValidateForm();
       
    },[category]);
    const UpdateCategory=(cat:Category)=>{
       dispatch(setCategory({...category,...cat}));
    }

    function ValidateForm()
    {

        debugger;
        let err : errorMessage={nameErrormessage:'',nameIsInValid:false};
        if(category.name==="" || category.name===null)
        {
            err.nameIsInValid=true;
            err.nameErrormessage='Name is required';
        }
        else
        {
            err.nameIsInValid=false;
            err.nameErrormessage='';
        }
        
        setStartValidation(true);
        setValidations(err);
    }

    const  addCategory=async(e:any)=>{
       console.log(category);
       e.preventDefault();
      
      ValidateForm();
       debugger;
        if(validations.nameIsInValid==true)
        {
            return;
        }

       setOpen(true);
       setSeverity('success');
       var url="";
       if(category.id==0)
       {
            url='Category/AddCategory/';
            api.post(url,category).then(res=>{
            if(res.status==200)
            {
                success(res);
            }
               
            }).catch(error=>{
            if (error.response) {
                failure(error);
            }
            else{
                notify('Network Error','failure');
            }
            });
       }
       else
       {
        url='Category/UpdateCategory/';
        api.put(url,category).then(res=>{
            if(res.status==200)
            {
              
              success(res);
            }
           
           }).catch(error=>{
            if (error.response) {
                failure(error);
            }
            else{
                notify('Network Error','failure');
            }
          });
       }
      
      
    }

    const success=(res:any)=>{
        dispatch(setCategory({id:0,name:'',description:'',createdDate:new Date()}));
        {props.getCategories?.()};
        notify(res.data,'success');
    }

    const failure=(error:any)=>{
        if(error.response.status==400)
        {
          
            var errDetail=error.response.data;
            console.log(errDetail);
           notify(errDetail.title,'failure');
        }
        else if(error.response.status==404)
        {
            notify('Network Error','failure');
        }
    }

    const handleChange=(e:any)=>{
      
        debugger;
        if(e.currentTarget.id=='name')
        {
            
            dispatch(setCategory({...category,name:e.currentTarget.value}));
            setStartValidation(true);
        }
        if(e.currentTarget.id=='description')
        {
           dispatch(setCategory({...category,description:e.currentTarget.value}));
        }
        
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return (
        <Box>
            <form onSubmit={addCategory}>
                <Box sx={{marginBottom:4,width:'100%'}}>
                    <label htmlFor="name" style={{display:'block',marginBottom:'.05rem',fontSize:'0.875rem',lineHeight:'1.25rem',fontWeight:'bold'}}>Category Name</label>
                    <TextField  helperText={validations.nameErrormessage}   error={startValidation ==true && validations.nameIsInValid} required variant="outlined"    size="small" sx={{width:'100%'}}  id="name" value={category.name}  placeholder="Category Name" onChange={handleChange} />
                    
                </Box>
                <Box sx={{marginBottom:4,width:'100%'}}>
                    <label htmlFor="description" style={{display:'block',marginBottom:'.05rem',fontSize:'0.875rem',lineHeight:'1.25rem',fontWeight:'bold'}}>Description</label>
                    <TextField required id="description" multiline  rows={5}  value={category.description}  sx={{width:'100%'}} placeholder="Description" onChange={handleChange}   />
                </Box>
            </form>
            <Box component="div">
                <Button  variant="contained"  color="primary" onClick={addCategory}>Create</Button>
            </Box>
            <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={open} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert severity={severity} variant="filled"  icon={false} sx={{ minWidth: '250px' }}>Saved</MuiAlert>
            </Snackbar>
            
             </Box>
    )
}
export default AddCategoryForm;