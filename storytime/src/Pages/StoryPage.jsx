import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import BackButton from '../components/DesignSystem/BackButton'
import OptionButton from '../components/DesignSystem/OptionButton'

function StoryPage({ storyName, pageNumber, left, right, children }) {

    useEffect(()=>{
        console.log(' story mounted')
        return ()=>console.log('story unmounted')
    })
    const navigate = useNavigate()
    const handleNavigate = (toPage) => {
        if (toPage === 0) {
            navigate('/')
        } else {
            navigate(`/${storyName}/${toPage}`)
        }
    }
    return (
        <>
            <Box display='flex' justifyContent='space-around' alignItems='center' flexDirection='column' my={10}>
                <Box display='flex' justifContent='start' width='100%' pt={3} px={3}>
                    <BackButton onClick={() => handleNavigate(pageNumber - 1)}><ArrowBackIcon /></BackButton>
                </Box>

                <Box px={8} py={8}>
                    <Typography variant='h6'>{children}</Typography>
                </Box>

                <Box pb={3} width='60%' display='flex' justifyContent='space-around'>
                    <OptionButton onClick={() => handleNavigate(2*pageNumber)}>{left}</OptionButton>
                    <OptionButton onClick={() => handleNavigate(2*pageNumber+1)}>{right}</OptionButton>
                </Box>
            </Box>
        </>
    )
}

export default StoryPage