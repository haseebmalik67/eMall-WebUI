import { useState, useEffect,createRef } from "react";
import { Category } from "../../src/dtos/category";
import { GetData, apiResult, api } from "../../src/dataaccess/emallAPI";

import AddCategoryForm from "../../src/components/shared/AddCategoryForm";
import FormContainer from "../../src/components/shared/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import  {setCategory}  from "../../src/redux/reducers/category";

import toast, { Toaster } from 'react-hot-toast';
import { TStore } from "../../src/redux/store";


const ManageCategories = () => {
    const [categories, setCategories] = useState([] as Category[]);
    //const [category, setCategory] = useState({} as Category);
    const AddCategoryFormRef=createRef();
    
    const category:Category  = useSelector((state:TStore) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        api.get("/Category/GetCategories").then(res => {
            setCategories(res.data);
        }).catch(err => {
        })
    }
    const deleteCategory = (id: number) => {
        api.delete('/Category/DeleteCategory?id=' + id)
            .then((res) => getCategories()).catch(err => {
                console.log(err);
            })
    }

    const fillCategory = (cat: Category) => {
        dispatch(setCategory(cat));
    }

    return (
      
      
        <FormContainer title='Manage Categories'>
            <div className="flex flex-col mt-4 mb-4 2xl:flex-row">
                <div className="w-2/3 mb-4">
                <div className="container flex justify-items-start">
                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="border-b border-gray-200 shadow">
                                <table>
                                    <thead className="bg-blue-200">
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                ID
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Name
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Description
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Created At
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Edit
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                          categories?  categories.map((cat) => {
                                                return (
                                                    <tr className="whitespace-nowrap" key={cat.id}>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {cat.id}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {cat.name}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {cat.description}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                            {new Date(cat.createdDate).toLocaleDateString()}
                                                        </td>

                                                        <td className="px-6 py-4">
                                                            <button  className="px-4 py-1 text-sm text-white bg-blue-400 rounded cursor-pointer" onClick={() => fillCategory({id:cat.id,name:cat.name,description:cat.description,createdDate:new Date()})} >Edit</button>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <button  onClick={() => deleteCategory(cat.id)} className="px-4 py-1 text-sm text-white bg-red-400 rounded cursor-pointer">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            }):<p>No Catagories Found</p>}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-2/3 border-b border-gray-200 shadow">
                <table className="w-full">
                    <thead className="bg-blue-200">
                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                            Add/Edit Category  
                        </th>
                    </thead>
                </table>
                <div className="ml-4 mr-4"> 
                     <AddCategoryForm getCategories={getCategories} />   
                </div>
                             
                </div>
            </div>
        </FormContainer>
      
    )
}

export default ManageCategories;