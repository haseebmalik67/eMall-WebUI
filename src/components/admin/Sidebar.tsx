import Link from 'next/link';
import { Box } from '@mui/material';



const Sidebar = () => {



    return (
        <div className='sideBarMain'>
            <div className='sideBarLogo'>
            <Link href="/">
                <a> eMall</a>
            </Link>
            </div>
            <div className='sideBarInner'>
                <div className='sideBarHome'>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </span>
                    <Link href="/admin">
                      <a> Dash Board </a>
                    </Link>
                </div>
                <div className='menuItem'>
                    <h3>Categories</h3>
                 
                        <div className='subItem'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <Link href="/admin/AddCategory">
                                <a className='a'>Add Categories</a>
                            </Link>
                            
                        </div>
                        <div className='subItem'>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                                </svg>

                            </span>
                            <Link href="/admin/ManageCategories">
                                <a className='a'>Manage Categories</a>
                            </Link>
                        </div>
                  

                </div>
                <div className='menuItem'>
                    <h3>Products</h3>
                  
                        <div className='subItem'>
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Add Products
                        </div>
                        <div className="subItem">
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                                </svg>

                            </span>
                            <Link href="/admin/ManageCategories">
                                <a className='a'>Manage Products</a>
                            </Link>
                        </div>
                   

                </div>

                <div className='menuItem'>
                    <h3>Customers</h3>
                  
                        <div className='subItem'>
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Add Customer
                        </div>
                        <div className="subItem">
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                                </svg>

                            </span>
                            <Link href="/admin/ManageCategories">
                                <a className='a'>Manage Customer</a>
                            </Link>
                        </div>
                   

                </div>
                <div className='menuItem'>
                    <h3>Products</h3>
                  
                        <div className='subItem'>
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Add Orders
                        </div>
                        <div className="subItem">
                        <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                                </svg>

                            </span>
                            <Link href="/admin/ManageCategories">
                                <a className='a'>Manage Orders</a>
                            </Link>
                        </div>
                   

                </div>

            </div>
        </div>
    )
}
export default Sidebar;