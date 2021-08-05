import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';



const Dashboard = () => {
    return (
        <div>

            <Grid container spacing={2}>
                {/* card-1 */}
                <Grid item sm={3}>
                    <Grid container justifyContent="center" spacing={3} sx={{
                    }}>
                        <Card sx={{
                            width: '290px',
                            height: '131px',
                            margin: '50px 2px 0px 0px',

                            background: '#FFFFFF',
                            borderRadius: '24px',
                        }}>
                            <Container sx={{
                                display: 'flex'
                            }} >
                                <Box sx={{
                                    background: '#F2F1FE',
                                    margin: '30px 0px 0px 0px',
                                    height: '70px',
                                    width: '36px',
                                    borderRadius: '18px',
                                }}>
                                    <Avatar variant="square" alt="Cindy Baker" src="/card/1.png"
                                        sx={{
                                            margin: '22px 0px 0px 9px',
                                            width: '18px',
                                            height: '20px',



                                        }} />
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        margin: '40px 0px 0px 5px',

                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: '14px',


                                    }}>
                                        New Leds
                                    </Typography>
                                    <Typography
                                        sx={{

                                            left: '215px',
                                            top: '176px',
                                            margin: '-7px 0px 0px 5px',
                                            fontFamily: 'Nunito Sans',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '30px',


                                            color: '#663399',
                                        }}>
                                        205
                                    </Typography>
                                </Box>

                            </Container>


                        </Card>
                    </Grid>
                </Grid>


                {/* card-2 */}
                <Grid item sm={3}>
                    <Grid container justifyContent="center" spacing={3} sx={{

                    }}>

                        <Card sx={{
                           width: '290px',
                            height: '131px',
                            margin: '50px 2px 0px 0px',

                            background: '#FFFFFF',
                            borderRadius: '24px',
                        }}>
                            <Container sx={{
                                display: 'flex'
                            }} >
                                <Box sx={{
                                    background: '#C5DBFF',
                                    margin: '30px 0px 0px 0px',
                                    height: '70px',
                                    width: '36px',
                                    borderRadius: '18px',
                                }}>
                                    <Avatar variant="square" alt="Cindy Baker" src="/card/2.png"
                                        sx={{
                                            margin: '22px 0px 0px 9px',
                                            width: '18px',
                                            height: '20px',



                                        }} />
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        margin: '40px 0px 0px 5px',

                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: '14px',


                                    }}>
                                        Sales
                                    </Typography>
                                    <Typography
                                        sx={{

                                            left: '215px',
                                            top: '176px',
                                            margin: '-7px 0px 0px 5px',
                                            fontFamily: 'Nunito Sans',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '30px',


                                            color: '#3981F7',
                                        }}>
                                        $4021
                                    </Typography>
                                </Box>

                            </Container>


                        </Card>
                    </Grid>
                </Grid>

                {/* card-3 */}
                <Grid item sm={3}>
                    <Grid container justifyContent="center" spacing={3} sx={{

                    }}>
                        <Card sx={{
                        width: '290px',
                            height: '131px',
                            margin: '50px 2px 0px 0px',

                            background: '#FFFFFF',
                            borderRadius: '24px',
                        }}>
                            <Container sx={{
                                display: 'flex'
                            }} >
                                <Box sx={{
                                    background: '#BCDDB3',
                                    margin: '30px 0px 0px 0px',
                                    height: '70px',
                                    width: '36px',
                                    borderRadius: '18px',
                                }}>
                                    <Avatar variant="square" alt="Cindy Baker" src="/card/3.png"
                                        sx={{
                                            margin: '24px 0px 0px 9px',
                                            width: '18px',
                                            height: '20px',



                                        }} />
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        margin: '40px 0px 0px 5px',

                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: '14px',


                                    }}>
                                        Orders
                                    </Typography>
                                    <Typography
                                        sx={{

                                            left: '215px',
                                            top: '176px',
                                            margin: '-7px 0px 0px 5px',
                                            fontFamily: 'Nunito Sans',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '30px',


                                            color: '#5DAE49',
                                        }}>
                                        80
                                    </Typography>
                                </Box>

                            </Container>


                        </Card>
                    </Grid>
                </Grid>


                {/* card-4 */}
                <Grid item sm={3}>
                    <Grid container justifyContent="center" spacing={3} sx={{

                    }}>
                        <Card sx={{
                              width: '290px',
                            height: '131px',
                            margin: '50px 2px 0px 0px',

                            background: '#FFFFFF',
                            borderRadius: '24px',
                        }}>
                            <Container sx={{
                                display: 'flex'
                            }} >
                                <Box sx={{
                                    background: '#FFF6E0',
                                    margin: '30px 0px 0px 0px',
                                    height: '70px',
                                    width: '36px',
                                    borderRadius: '18px',
                                }}>
                                    <Avatar variant="square" alt="Cindy Baker" src="/card/4.png"
                                        sx={{
                                            margin: '24px 0px 0px 9px',
                                            width: '18px',
                                            height: '20px',



                                        }} />
                                </Box>

                                <Box>
                                    <Typography sx={{
                                        margin: '40px 0px 0px 5px',

                                        fontFamily: 'Nunito Sans',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: '14px',


                                    }}>
                                        Expense
                                    </Typography>
                                    <Typography
                                        sx={{

                                            left: '215px',
                                            top: '176px',
                                            margin: '-7px 0px 0px 5px',
                                            fontFamily: 'Nunito Sans',
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            fontSize: '30px',


                                            color: '#FFC620',
                                        }}>
                                        $1200
                                    </Typography>
                                </Box>

                            </Container>


                        </Card>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
