import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';

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
            <Box display='flex' justify-content='space-around' alignItems='center' flexDirection='column' my={10}>
                <Box display='flex' justify-content='start' width='80%'>
                    <Button onClick={() => handleNavigate(pageNumber - 1)}><ArrowBackIcon /></Button>
                </Box>

                <Box px={8} py={8}>
                    <Typography variant='h6'>{children}</Typography>
                </Box>

                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                    <Button onClick={() => handleNavigate(2*pageNumber)}>{left}</Button>
                    <Button onClick={() => handleNavigate(2*pageNumber+1)}>{right}</Button>
                </ButtonGroup>
            </Box>
        </>
    )
}

export default StoryPage