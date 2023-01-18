import { Category } from "../../src/dtos/category";
import { useState,useEffect } from "react";
import { getData,apiResult,SaveData } from "../../src/dataaccess/api";
import FormContainer from "../../src/components/shared/FormContainer";
import { Props } from "../../src/components/shared/FormContainer";

const AddProduct = () => {

    const [data,setData]=useState({} as apiResult);
    const [status,setStatus]=useState('');
    const [error,setError]=useState({});
    useEffect(()=>{
       (async function(){
        var cats =Array<Category>();       
        // var res=await getData('Category','GetCategories');
        // console.log(res.status); 
        
        // console.log(await res.json());
        //getObject();
       })() 
    },[])

    const [category,setCategory]=useState({} as Category);
  
     const  getCategories=async(e:any)=>{
        e.preventDefault();
        var cats =Array<Category>();       
        cats=await getData('Category','GetCategories');
        console.log(cats);
     }
    const  addCategory=(e:any)=>{
        e.preventDefault();
        category.createdDate=new Date();
        var apiData={} as apiResult;
        //apiData.status="500";
        //apiData.data={result:'some result',title:'title'}
        SaveData('Category','AddCategory','POST',category).then((d)=>{
            setData(d);
            
            
        });
        // //var x =JSON.parse(JSON.stringify(apiData));
        // setData(data);
        // var x =JSON.parse(JSON.stringify(data));
       
    }

    const handleChange=(e: React.FormEvent<HTMLInputElement>)=>{

        if(e.currentTarget.id=='name')
        {
            category.name=e.currentTarget.value; 
        }
        if(e.currentTarget.id=='description')
        {
            category.description=e.currentTarget.value;
        }
       
        setCategory(category);

       
    }
    
    return (
        <FormContainer title='Add New Category'>
            <form onSubmit={addCategory} className="mb-4">
                <div className="mb-4 mt-1">
                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Category Name</label>
                    <input type="text" id="name" className="" placeholder="category name" onChange={handleChange} />
                </div>
                <div className="mb-4 mt-1">
                    <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="text" id="description" className="" placeholder="category name" onChange={handleChange} />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            
    </FormContainer>

    )
}
export default AddProduct;