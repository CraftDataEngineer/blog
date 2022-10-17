import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Divider} from "@mui/material";

export default function ImgMediaCard({ imgSrc , imageHeight = 140, title,text,cardUrl}) {
    return (
        <Card sx={{ maxWidth: 345  }}>
            <CardMedia
                component="img"
                alt="image"
                height={imageHeight}
                image={imgSrc}
            />
            <Divider />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <a className="button button--warning" href={cardUrl}>DÉCOUVRIR </a>
            </CardActions>
        </Card>
    );
}