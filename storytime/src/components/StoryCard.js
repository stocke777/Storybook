import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  maxWidth: 345,
  backgroundColor: '#a3afc7',
  transition: '0.3s',
  "&:hover": {
    backgroundColor: '#899db4',
    transform: 'scale(1.1)'
  }

});


export default function StoryCard({ title, image, summary, likes, ...rest }) {

	return (
		<CustomCard>
			<CardHeader
				title={title}
				subheader={rest?.subHeader}
			/>
			<CardMedia
				component='img'
				height='300'
				image={image}
				alt={rest?.alt}
			/>
			<CardContent>
				<Typography
					variant='body2'
					color='text.secondary'>
					{summary}
				</Typography>
			</CardContent>
			<CardActions
				disableSpacing
				sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box display='flex' alignItems='center'>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<Typography variant='h6'>{likes}</Typography>
				</Box>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</CustomCard>
	);
}
