import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Button, Typography, Paper, Box } from "@mui/material";
import StoryCard from "./../components/StoryCard";
import image1 from '../assets/night.jpg'
import image2 from '../assets/rain.jpg'
import image3 from '../assets/snow.jpg'
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate()
  const handleClick = (story) => {
    navigate(`/${story}/1`)
  }
  return (
    <>
      <ParticlesBackground></ParticlesBackground>
      <Typography
        variant='h3'
        color='secondary'>
        Choose Your Adventure
      </Typography>
      <Button
        variant='outlined'
        size='large'>
        Select which path to take
      </Button>
      <Box display='flex' justifyContent='space-around' align-items='center' mt={2}>
        <Box onClick={()=>handleClick('NightRide')}>
        <StoryCard
          title='Last Ride'
          image={image1}
          likes={9}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Night Ambience'
          alt='Lonely Road'>
        </StoryCard>
        </Box>
        <Box onClick={()=>handleClick('UpTheHill')}>
        <StoryCard
          title='Up the Hill'
          image={image2}
          likes={6}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Rain Ambience'
          alt='Lonely Road'>
        </StoryCard>
        </Box>
        <Box onClick={()=>handleClick('WhiteLie')}>
        <StoryCard
          title='White Lie'
          image={image3}
          likes={15}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Snow Ambience'
          alt='Lonely Road'>
        </StoryCard>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
