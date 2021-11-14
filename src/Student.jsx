import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SpriteAnimator } from 'react-sprite-animator';
import heart from './heart.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    objectFit: 'cover',
    backgroundSize: '50%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Student({ name, branch, company, profile, Package, date, isInternship, URL }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isLiked, setIsLiked] = useState(false)

  const onClick = () => {
    setIsLiked(!isLiked)
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="name" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={URL}
        title={company}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Package} {isInternship ? "Thousand/month" : "Lachs/annum"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <div onClick={onClick}>
            <SpriteAnimator
              width={36}
              height={36}
              sprite={heart}
              shouldAnimate={isLiked}
              fps={60}
              startFrame={0}
              stopLastFrame={true}
              reset={!isLiked}
            />
          </div>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            <div>
              <h6>Student Name</h6>{name}
            </div>
            <div>
              <h6>Student Branch</h6>{branch}
            </div>
            <div>
              <h6>Company</h6>{company}
            </div>
            <div>
              <h6>{isInternship ? "Stipend" : "Package"} offered</h6>{Package}
            </div>
            <div>
              <h6>Job Profile</h6>{profile}
            </div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}