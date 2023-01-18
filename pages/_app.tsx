import '../styles/globals.scss';
import '../styles/toast.css';
import '../styles/Sidebar.scss';

import {Provider} from 'react-redux';
import store from '../src/redux/store';


import Head from 'next/head';

import AdminLayout from "../src/components/admin/AdminLayout";
import { AppProps } from 'next/app';
import { indigo,red } from '@mui/material/colors';
import { createTheme,ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

const theme=createTheme({
  palette:{
    primary:{
      main:indigo[900]
    }
  },

  typography: {
    fontFamily: 'Nunito',
    allVariants:{
      color:indigo[900]
    }
  },
  components:{
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          backgroundColor:'white'
       }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          backgroundColor:indigo[900]
        }
    }
  },
  MuiButtonBase: {
    defaultProps: {
      // The props to change the default for.
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  }
}

})

export default function MyApp({ Component, pageProps,router }:AppProps) {
 
  
  if(router.pathname.startsWith('/admin'))
  {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
      
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
        </ThemeProvider>
      </Provider>

  )
  }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
