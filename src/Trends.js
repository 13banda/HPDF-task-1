import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
//components
const Subheading = styled.div`
      color: #8899a6;
      font-size: 12px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      margin-top: -3px;
      margin-bottom: 5px;
      `;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: Segoe UI,Arial,sans-serif;
  display: 'block';
  `;
const A = styled.a`
   Color: #1DA1F2 ;
   display: 'block';
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   &:hover{
    text-decoration: underline;
  }
`
class Link extends Component{

    render(){
      const s={
        fontSize: 12,
        color: '#1DA1F2',
        fontSize: this.props.size,
        fontWeight: this.props.bold,
        display: 'block',
      };
      return(
        <A href={this.props.href} style={s}>{this.props.children}</A>
      );
    }
}

const styles = theme => ({
  card: {
    border: '1px solid #e6ecf0',
    marginTop:15,
    boxShadow: "inherit",
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
});


function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={{width: 290,}}>
      <Card className={classes.card}>
        <CardContent >
        <Typography type="title" style={{display: 'flex'}} >
          <Title style={{marginTop:-3.5,marginRight: 7}}>Trends for you.</Title>
          <Link size={'12px'}  >  Change</Link>
        </Typography>
        <Link size={'14px'} bold={'bold'}>#MTVBCL</Link>
        <Subheading>22.9k Tweets</Subheading>
        <Link size={'14px'} bold={'bold'}>#BENJAM</Link>
        <Subheading>1295 Tweets</Subheading>
        <Link size={'14px'} bold={'bold'}>#WardrobeRefreshSale</Link>
        <Subheading>7,177 Tweets</Subheading>
        <Link size={'14px'} bold={'bold'}>#GiftASmile</Link>
        <Subheading>2,639 Tweets</Subheading>
        <Link size={'14px'} bold={'bold'}>#VirushkaReception</Link>
        <Subheading> Virathost their wedding reception in Delhi </Subheading>
        <Link size={'14px'} bold={'bold'}>#ChatWithRanbir</Link>
        <Subheading> 22.7K Tweets </Subheading>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
