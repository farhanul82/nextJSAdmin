import { Box } from '@material-ui/core'
import Sidebar from '../components/Sidebar'
import TopNav from './TopNav'


const layout = ({ children }) => {
    return (
        <>
            <Box width={1} sx={{
                background: ' #F1F3F4',
                height: '200vh',
                overflow:'hidden'
            }}>
                <Sidebar />
                <Box sx={{
                    padding: '0px 0px 0px 120px',
 

                    }}>
                    <TopNav />
                    <Box  sx={{
                   
                        margin: '100px 0px 0px 40px',
                       
                        height:'100vh',
                        
                     }} >
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default layout