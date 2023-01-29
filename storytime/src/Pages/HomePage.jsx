import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { Button, Typography, Paper, Box } from "@mui/material";
import RecipeReviewCard from "./../components/StoryCard";
import StoryCard from "./../components/StoryCard";
import image1 from '../assets/night.jpg'
import image2 from '../assets/rain.jpg'
import image3 from '../assets/snow.jpg'

function HomePage() {
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

      <Paper
        variant='outlined'
        square
        elevation={3}>
        <Typography>
          The change of shade in dark mode is done by applying a
          semi-transparent gradient to the background-image property. This can
          lead to confusion when overriding the styles of Paper, as setting just
          the background-color property will not affect the elevation-related
          shading. To ignore the shading and set the background color that is
          not affected by elevation in dark mode, override the background
          property (or both background-color and background-image).
        </Typography>
      </Paper>

      <Box display='flex' justifyContent='space-around' align-items='center' mt={2}>
        <StoryCard
          title='Last Ride'
          image={image1}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Night Ambience'
          alt='Lonely Road'>
        </StoryCard>
        <StoryCard
          title='Up the Hill'
          image={image2}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Rain Ambience'
          alt='Lonely Road'>
        </StoryCard>
        <StoryCard
          title='White Lie'
          image={image3}
          summary={
            "While cycling at night, you are going to have to make dire decisions to make it out..."
          }
          subHeader='Snow Ambience'
          alt='Lonely Road'>
        </StoryCard>
      </Box>
    </>
  );
}

export default HomePage;
