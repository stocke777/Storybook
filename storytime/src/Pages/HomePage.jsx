import React from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { Button, Typography } from '@mui/material';

function HomePage() {
  return (
    <>
    <ParticlesBackground></ParticlesBackground>
    <Typography variant="h3" color="secondary">
        Choose Your Adventure
    </Typography>
    <Button>CLICK</Button>
    </>
  )
}

export default HomePage