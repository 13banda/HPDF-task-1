import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
//components
const styles = theme => ({
  card: {
    border: '1px solid #e6ecf0',
    boxShadow: "inherit",
    cursor: 'pointer',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
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
});
const Btn = styled.div`
    width: 35px;
    display: block;
    color: #1DA1F2;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background-color: '#fff';
    font-size: 12px;
    font-weight: bold;
    &:hover{
    background-color: #eaf5fd;
    }
    border: 1px solid #1da1f2;
    border-radius: 100px;
    padding: 4px 25px 0px 25px ;
    margin-top: -17px;
    margin-left: 50px;
    text-align: center;
`;
const Linke = styled.a`
   display: inline-flex;
   color:  #8899a6;
   font-family: "Segoe UI",Arial,sans-serif;
   &:hover{
    text-decoration: underline;
    Color: #1DA1F2 ;
  }
  margin-Left: 5px;
  font-size: 12px;
`
const Subheading = styled.div`
      color: #657786;
      font-size: 14px;
      margin-Left: 5px;
      font-weight: normal;
      font-family: "Segoe UI",Arial,sans-serif;
    `;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: Segoe UI,Arial,sans-serif;
  display: 'block';
  `;
const A = styled.a`
   display: 'block';
   margin-Left: 13px;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   &:hover{
    text-decoration: underline;
    Color: #1DA1F2 ;
  }
`
class Link extends Component{

    render(){
      const s={
        fontSize: 12,
        color: this.props.color,
        fontSize: this.props.size,
        fontWeight: this.props.bold,
        display: 'block',
      };
      return(
        <A href={this.props.href} style={s}>{this.props.children}</A>
      );
    }
}
class Banner extends Component {

  render(){
    return(
      <div>
        <div style={{display:'flex'}}>
        <Avatar aria-label="Recipe">
        {this.props.avatar}
       </Avatar>
             <Link size={'14px'} bold={'bold'} >{this.props.head}</Link>
             <Subheading>{this.props.subhead}</Subheading>
        </div>
        <Btn>Follow</Btn>
      </div>
    );
  }
}
function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const Divid = <Divider style={{marginTop: 5,marginBottom: 12,}} light/> ;
  return (
    <div style={{width: 290,}}>
    <Card className={classes.card}>
    <CardContent>

        <Typography type="title" style={{display: 'flex'}} >
          <Title style={{marginTop:-3.5,marginRight: 7,marginBottom: 10}}>Who to follow</Title>
          <Link size={'12px'}  color={'#1DA1F2'}>  Refresh</Link>
          <Link size={'12px'}  color={'#1DA1F2'}>  View all</Link>
        </Typography>
     <Banner avatar={"R"} head={'Roy shab'} subhead={'@howsay'}/>
     {Divid}
     <Banner avatar={"M"} head={'Manish kesi'} subhead={'@manish kesik'}/>
     {Divid}
     <Banner avatar={"p"} head={'Pardeep goli'} subhead={'@goli ni deni'}/>
      </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent>
      <Subheading style={{fontSize: 12,display: 'inline'}}>© 2017 Twitter</Subheading>
        <Linke >About</Linke>
        <Linke >Help Center</Linke>
        <Linke >Terms</Linke>
        <Linke >Privacy policy</Linke>
        <Linke >Cookies</Linke>
        <Linke >Ads info</Linke>
        <Linke >Brand</Linke>
        <Linke >Blog</Linke>
        <Linke >Status</Linke>
        <Linke >Apps</Linke>
        <Linke >Jobs</Linke>
        <Linke >Marketing</Linke>
        <Linke >Businesses</Linke>
        <Linke >Developers</Linke>
      </CardContent>
    </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
