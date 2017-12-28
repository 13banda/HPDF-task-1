import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia,CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import PortraitIcon from 'material-ui-icons/Portrait';
import SvgIcon from 'material-ui/SvgIcon';
const styles = {
  card: {
    maxWidth: 290,
    boxShadow: "inherit",
  },
  media: {
    height: 95,
    backgroundColor: '#1DA1F2',
  },
  avatar: {
    backgroundColor: '#1DA1F2',
    color: 'red'
  } ,
  bigAvatar: {
     width: 74,
     height: 75,
     color: '#fff',
     backgroundColor: '#1DA1F2',
     marginTop: -70,
     border: '3.7px solid #fff'
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div style={{width: 290,}}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          />
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar,classes.bigAvatar}>
            <SvgIcon style={{width:30,height: 36}}>
               <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z" />
             </SvgIcon>
           </Avatar>
          }
          title="Shrimp "
          subheader="@Shrimp"
          Style={{padding:'0',margin:0}}
        />
        <CardContent style={{display:'inline-flex',margin:0,marginTop:'-25',}}>
            <div style={{display:'block'}}>
            <Typography type="body1" noWrap='true' style={{'&:hover': {color:'#1DA1F2'},cursor:'pointer',color:'#657786',fontWeight: 'bold',fontFamily: "Segoe UI,Arial,sans-serif"}}>
            Tweets
            </Typography>
            <Typography type="subheading"  style={{'&:hover': {color:'#1DA1F2'},cursor:'pointer',color:'#1DA1F2',fontWeight: 'bold',fontFamily: "Segoe UI,Arial,sans-serif"}}>
            0
            </Typography>
            </div>
            <div style={{display:'block',marginLeft:'60'}}>
            <Typography type="body1" noWrap='true' style={{'&:hover': {color:'#1DA1F2'},cursor:'pointer',color:'#657786',fontWeight: 'bold',fontFamily: "Segoe UI,Arial,sans-serif"}}>
            Following
            </Typography>
            <Typography type="subheading"  style={{'&:hover': {color:'#1DA1F2'},cursor:'pointer',color:'#1DA1F2',fontWeight: 'bold',fontFamily: "Segoe UI,Arial,sans-serif"}}>
            0
            </Typography>
            </div>
            </CardContent>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
