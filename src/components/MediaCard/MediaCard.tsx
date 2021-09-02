import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface MediaCardProps {
  /** Card title */
  title: string;
  /** Card image */
  image: string;
  /** Card image alt text */
  imageAltText: string;
  /** Button Label */
  buttonLabel: string;
  /** Button Link */
  buttonLink: string;
   /** Children of the card content, such as a string, or a react element */
   children: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MediaCard: FC<MediaCardProps> = ({
  title = 'Title',
  // eslint-disable-next-line max-len
  image = 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
  imageAltText = 'image alt text',
  buttonLabel = 'click for more...',
  buttonLink = 'https://www.google.co.uk',
  // eslint-disable-next-line max-len
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={imageAltText}
          height="200"
          image={image}
          title={imageAltText}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={buttonLink}>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
