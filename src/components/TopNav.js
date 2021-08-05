import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Badge from '@material-ui/core/Badge';

import Typography from '@material-ui/core/Typography';

const TopNav = () => {
    return (
        <>
            <IconButton aria-label="menu" sx={{
                position: 'absolute',
                width: '16px',
                height: '13px',
                left: '150px',
                top: '49px',
            }}>
                <MenuIcon />
            </IconButton>
            <Paper borderRadius={16} component="form" sx={{
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '500px',
                height: 50,
                top: '30px',
                left: '230px',
                position: 'absolute',
                borderRadius:'16px'
            }}>
                <IconButton type="submit" aria-label="search" sx={{
                    margin:'0px 0px 0px 25px'
                }}>
                    <SearchIcon />
                </IconButton>
                <InputBase

                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search ' }}
                />


            </Paper>

            <Avatar alt="Remy Sharp" src="/topNav/1.png" sx={{
                position: 'absolute',
                width: '60px',
                height: '58px',
                right: '50px',
                top: '30px',
                borderRadius: '20px'
            }} />

            <Badge badgeContent={4} color="primary" sx={{
               
                position: 'absolute',
                width: '8.4px',
                height: '10px',
                right: '128px',
                top: '47.2px',
                fontFamily: "Nunito Sans",
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize:' 7.2px',
                lineHeight: '10px',
            }}>
              
            </Badge>
            <Avatar variant="square" alt="Remy Sharp" src="/topNav/2.png" sx={{
                position: 'absolute',
                width: '16px',
                height: '20px',
                right: '130px',
                top: '54.18px',

            }} />




            <Avatar variant="square"  alt="Remy Sharp" src="/topNav/3.png" sx={{
                position: 'absolute',
                width: '22px',
                height: '20px',
                right: '170px',
                top: '54.18px',

            }} />
        </>
    )
}

export default TopNav
