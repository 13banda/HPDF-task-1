import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import ReplyIcon from './reply-Icon'
import RetweetIcon from './retweet-Icon'
import HeartIcon from './heart-Icon'
const styles = theme => ({
            card: {
              cursor: "pointer",
              border: '1px solid #e6ecf0',
              //  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
              boxShadow: "inherit",
            },
            media: {
              height: "100%",
              width: 515,
              maxHeight:451,
              margin: "4 0",
              marginLeft: 62,
              borderRadius: 5,
            },
            avatar: {
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: red[500],
              marginRight: -7,
            },
            flexGrow: {
              flex: '1 1 1 auto',
            },
            menu: {
              height: 6 ,
              color: "skyblue",
              color: "#00000080",
              fontSize: "13px",
           },
           content: {
              marginLeft: 31.6,
              padding: 0,
              color: "#14171a",
              fontSize: "14px",
              fontFamily: "Segoe UI,Arial,sans-serif",
              lineHeight: "20px",
           },
     });

class MainCard extends React.Component {
  state = {
     anchorEl: null,
     open: false,
   };

   handleClick = event => {
     this.setState({ open: true, anchorEl: event.currentTarget });
   };

   handleRequestClose = () => {
     this.setState({ open: false });
   };
  render() {
    const { classes, title,src,avatr,subheader,content,width,maxHeight } = this.props;

    return (
      <div  style={{width: 590,}}>
        <Card className={classes.card} >
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" src={avatr} className={classes.avatar} >
              </Avatar>
            }
            action={
              <IconButton
              aria-owns={this.state.open ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
               >
                <ExpandMoreIcon  />
              </IconButton>
            }
            title={title}
            subheader= {subheader}
            style={{padding: "10 15",paddingBottom: 2 }}
          />
          <Menu
             id="simple-menu"
             anchorEl={this.state.anchorEl}
             open={this.state.open}
             onRequestClose={this.handleRequestClose}
          >
               <MenuItem  className={classes.menu} onClick={this.handleRequestClose}>Copy link to Tweet</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Embed Tweet</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Mute</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Block</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Report Tweet</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Report Tweet</MenuItem>
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>I do not like this Tweet</MenuItem>
               <Divider />
               <MenuItem className={classes.menu} onClick={this.handleRequestClose}>Add to new Moment</MenuItem>
          </Menu>
          <CardContent className={classes.content}>
            <Typography component="p" className={classes.content} >
              {content}
            </Typography>
          </CardContent>


        { src && (
          <CardMedia
            className={classes.media}
            image={src}

            title="Contemplative Reptile"
          />
        )}
          <CardActions  disableActionSpacing="true" style={{ color:'#657786',height: 30,margin: '0',marginLeft: 60}} >
            <ReplyIcon />
            <span style={{margin:"0 38 -1 7", color: '#657786',fontWeight: 'bold',fontSize: 14,'&:hover':{ color:'#1da1f2'},}}>13</span>
            <RetweetIcon />
            <span style={{margin:"0 38 -1 7",color: '#657786',fontWeight: 'bold',fontSize: 14   }}>10</span>
            <HeartIcon />
            <span style={{margin:"0 38 -1 7",color: '#657786',fontWeight: 'bold',fontSize: 14 ,'&:hover':{ color:'#1da1f2'}}}>10</span>
             <div className={classes.flexGrow} />
            </CardActions>
        </Card>
      </div>
    );
  }
}

MainCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCard);
