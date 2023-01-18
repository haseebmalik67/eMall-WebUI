import Navbar from './Navbar';
import Sidebar from './Sidebar';
import greet from '../../../public/images/greet.svg';
import Image from 'next/image';
import { Container, Typography, Grid, Box } from '@mui/material';

const AdminLayout = ({ children }: any) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }} >

            <div style={{ width: '20rem', minHeight: '100vh' }}>
                <Sidebar />
            </div>
        
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <div style={{ width: '100%' }}>
                        <Navbar />
                    </div>
                

                  
                    <Container maxWidth="lg" >
                        <Grid xs={12} xl={6} container spacing={2} sx={{ paddingBottom: '25px' }}>
                            <Grid item sx={{ width: '8rem' }} >
                                <Image src={greet} alt="salaam" />
                            </Grid>
                            <Grid item>
                                <Typography variant='h5' fontWeight="bold">Good morning, Admin </Typography>
                                <Typography variant='h6' fontWeight="bold" color="GrayText"> Wellcome to your dashboard </Typography>
                            </Grid>
                        </Grid>


                        <Box sx={{alignItems:'center',justifyContent:'center',padding:0,margin:0}}>
                            {children}
                        </Box>

                    </Container>
                   
                </div>
           
        </div>

    );
}

export default AdminLayout;