import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='w-full h-screen flex justify-center'>
            <Outlet />
        </div>
    )
}

export default Layout