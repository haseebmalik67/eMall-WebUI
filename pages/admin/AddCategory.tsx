import FormContainer from "../../src/components/shared/FormContainer";
import AddCategoryForm from "../../src/components/shared/AddCategoryForm";
import {Box,Button} from '@mui/material'

import toast, { Toaster } from 'react-hot-toast';
import { Container } from "@mui/system";
import { Typography } from "@mui/material";


const notify = (message: string, type: string) => {
    debugger;
    if (type === 'success')
        toast.success(message);
    else
        toast.error(message);
}
const AddCategory = () => {
    return (
        <Box component="div" >
            <Typography sx={{ lineHeight: '1.75rem', fontSize: '1.25rem', fontWeight: '800' }}>
                Add New Category
            </Typography>
            <Container maxWidth="lg" sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', width: '100%',padding:2 }}>
          
                    <Box>
                        <AddCategoryForm addOrEdit={true} />
                    </Box>
                
            </Container> 
         
        </Box>
    )
}
export default AddCategory;