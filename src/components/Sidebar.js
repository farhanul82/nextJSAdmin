import React, { useState } from 'react'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { useRouter } from 'next/router'

import Container from '@material-ui/core/Container';
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';










const Sidebar = () => {
    const router = useRouter();
    const [active, setActive] = useState('')

    const handleClick = (e, path) => {
        e.preventDefault()
        if (path === "/Dashboard") {
            router.push(path)
            setActive(path)
            console.log("I clicked on the About Page");
        }
        if (path === "/Table") {
            router.push(path)
            setActive(path)
            console.log("I clicked on the Posts Page");
        }


        if (path === "/Customer") {
            router.push(path)
            setActive(path)
            console.log("I clicked on the Posts Page");
        }

        if (path === "/Contact") {
            router.push(path)
            setActive(path)
            console.log("I clicked on the Posts Page");
        }

        if (path === "/Note") {
            router.push(path)
            setActive(path)
            console.log("I clicked on the Posts Page");
        }
    };
    console.log(active)

    return (
        <Box height="100vh" position="absolute" sx={{
            width: '120px',
            height: '200vh',
            left: '0px',
            top: '0px',

            background: '#663399',
        }}>
            <Box>
                {/* nav-1 */}
                <Box borderRadius="5px" mx="auto"
                    sx={{

                        width: '69px',
                        height: '57px',
                        left: '13px',
                        top: '130px',
                        // background: '#7D48B1',
                    }}>
                    <Link href="/"><a className="" style={{ textDecoration: 'none' }}>

                        <Typography fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: ' 32px',
                            }}>Gull</Typography>
                    </a></Link>
                </Box>
                <Box mx="auto" bgcolor={active === '/Dashboard' ? '#7D48B1' : ''}
                    sx={{
                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                        '&:hover': {
                            background: '#7D48B1',
                            
                         },

                    }}>
                    <Link href="/" >
                        <a className="brand-logo left" onClick={(e) => handleClick(e, "/Dashboard")} style={{ textDecoration: 'none' }}>

                            <Avatar mx="auto" variant="square" src="/sidebarImg/nav1.png" sx={{
                                width: '29px',
                                height: '28px',
                                background: 'transparent',
                                margin: 'auto',
                                position: 'relative',
                                top: '15px',
                            }} >

                            </Avatar>
                            {active === '/Dashboard' ? (
                                <Typography textAlign="center" variant="subtitle2" gutterBottom
                                    sx={{
                                        position: 'relative',
                                        top: '15px',
                                        margin: 'auto',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: ' 12px',
                                    }}>Dashboard</Typography>
                            ) : (<div></div>)}

                        </a>
                    </Link>
                </Box>

                {/* nav-2 */}


                <Box mx="auto" bgcolor={active === '/Table' ? '#7D48B1' : ''}
                    sx={{

                        width: '94px',
                        height: '74px',

                        '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/">
                        <a className="brand-logo left" style={{ textDecoration: 'none' }} onClick={(e) => handleClick(e, "/Table")}>
                            <Avatar src="/sidebarImg/nav2.png" variant="square" sx={{
                                width: '22px',
                                height: '18px',
                                margin: 'auto',
                                position: 'relative',
                                top: '15px',

                            }} ></Avatar>

                            {active === '/Table' ? (
                                <Typography textAlign="center" variant="subtitle2" gutterBottom
                                    sx={{
                                        position: 'relative',
                                        top: '15px',
                                        margin: 'auto',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: ' 12px',
                                    }}>Table</Typography>
                            ) : (<div></div>)}
                        </a>
                    </Link>
                </Box>

                {/* nav-3*/}

                <Box mx="auto" bgcolor={active === '/Customer' ? '#7D48B1' : ''}
                    sx={{
                        // background: '#7D48B1',
                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                         '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/">
                        <a className="brand-logo left" style={{ textDecoration: 'none' }} onClick={(e) => handleClick(e, "/Customer")}>
                            <Avatar src="/sidebarImg/nav3.png" variant="square" sx={{
                                width: '22px',
                                height: '18px',
                                margin: 'auto',
                                position: 'relative',
                                top: '15px',

                            }} ></Avatar>


                            {active === '/Customer' ? (

                                <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                                    sx={{
                                        position: 'relative',
                                        top: '15px',
                                        margin: 'auto',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: ' 12px',
                                    }}>Customer</Typography>
                            ) : (<div></div>)}
                        </a>
                    </Link>
                </Box>

                {/* nav-4 */}
                <Box mx="auto" bgcolor={active === '/Contact' ? '#7D48B1' : ''}
                    sx={{

                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                        '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/">
                        <a className="brand-logo left" style={{ textDecoration: 'none' }} onClick={(e) => handleClick(e, "/Contact")}>
                            <Avatar src="/sidebarImg/nav4.png" variant="square" sx={{
                                width: '18px',
                                height: '28px',
                                margin: 'auto',
                                position: 'relative',
                                top: '15px',

                            }} ></Avatar>

                            {active === '/Contact' ? (
                                <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                                    sx={{
                                        position: 'relative',
                                        top: '15px',
                                        margin: 'auto',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: ' 12px',
                                    }}>Contact</Typography>) : (<div></div>)}
                        </a>
                    </Link>
                </Box>
                <Box mx="auto" bgcolor={active === '/Note' ? '#7D48B1' : ''}
                    sx={{

                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                        '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/">

                        <a className="brand-logo left" style={{ textDecoration: 'none' }} onClick={(e) => handleClick(e, "/Note")}>
                            <Avatar src="/sidebarImg/nav5.png" variant="square" sx={{
                                width: '30px',
                                height: '22px',
                                margin: 'auto',
                                position: 'relative',
                                top: '15px',

                            }} ></Avatar>

                            {active === '/Note' ? (

                                <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                                    sx={{
                                        position: 'relative',
                                        top: '15px',
                                        margin: 'auto',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: ' 12px',
                                    }}>Note</Typography>) : (<div></div>)}
                        </a>
                    </Link>
                </Box>


                {/* nav-6 */}

                <Box mx="auto"
                    sx={{

                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                        '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/"><a className="brand-logo left">
                        <Avatar src="/sidebarImg/nav6.png" variant="square" sx={{
                            width: '18px',
                            height: '23px',
                            margin: 'auto',
                            position: 'relative',
                            top: '15px',

                        }} ></Avatar>

                        <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ' 14px',
                            }}></Typography>
                    </a>
                    </Link>
                </Box>



                {/* nav-7 */}

                <Box mx="auto"
                    sx={{
                        '&:hover': {
                            background: '#7D48B1',
                         },
                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',

                    }}>
                    <Link href="/"><a className="brand-logo left">
                        <Avatar src="/sidebarImg/nav7.png" variant="square" sx={{
                            width: '22px',
                            height: '25px',
                            margin: 'auto',
                            position: 'relative',
                            top: '15px',

                        }} ></Avatar>

                        <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ' 14px',
                            }}></Typography>
                    </a>
                    </Link>
                </Box>

                {/* nav-8 */}

                <Box mx="auto"
                    sx={{
                        '&:hover': {
                            background: '#7D48B1',
                         },
                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',

                    }}>
                    <Link href="/"><a className="brand-logo left">
                        <Avatar src="/sidebarImg/nav8.png" variant="square" sx={{
                            width: '26px',
                            height: '26px',
                            margin: 'auto',
                            position: 'relative',
                            top: '15px',

                        }} ></Avatar>

                        <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ' 14px',
                            }}></Typography>
                    </a>
                    </Link>
                </Box>

                {/* nav-9 */}

                <Box mx="auto"
                    sx={{

                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',
                        '&:hover': {
                            background: '#7D48B1',
                         },

                    }}>
                    <Link href="/"><a className="brand-logo left">
                        <Avatar src="/sidebarImg/nav9.png" variant="square" sx={{
                            width: '24px',
                            height: '24px',
                            margin: 'auto',
                            position: 'relative',
                            top: '15px',

                        }} ></Avatar>

                        <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ' 14px',
                            }}></Typography>
                    </a>
                    </Link>
                </Box>

                {/* nav-10 */}
                <Box mx="auto"
                    sx={{
                        '&:hover': {
                            background: '#7D48B1',
                         },
                        width: '94px',
                        height: '74px',
                        left: '13px',
                        top: '123px',

                    }}>
                    <Link href="/"><a className="brand-logo left">
                        <Avatar src="/sidebarImg/nav10.png" variant="square" sx={{
                            width: '29px',
                            height: '28px',
                            margin: 'auto',
                            position: 'relative',
                            top: '15px',

                        }} ></Avatar>

                        <Typography mx="auto" fontSize={14} textAlign="center" variant="subtitle2" gutterBottom
                            sx={{
                                position: 'relative',
                                top: '15px',
                                margin: 'auto',
                                color: '#FFFFFF',
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: ' 14px',
                            }}></Typography>
                    </a>
                    </Link>
                </Box>


            </Box>
        </Box >
    )
}

export default Sidebar
