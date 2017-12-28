import React,{Component} from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import Aadhar from './aadhar';
import Main from './main-content';
// customize the theme
const theme = createMuiTheme({
  palette: {
    primary: blue, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 49,
    width: '100%',
    display: 'flex',
    position: 'fixed',
    zIndex: 10,
  },
  flex: {
    margin: 'auto',
   color: '#1DA1F2',
  },
  Tabs:{
    fontFamily: "Segoe UI,Arial,sans-serif",
    textTransform: 'none',
    fontSize: 13,
    fontWeight: 'bold',
    minWidth: 110,
  },
  img:{
    width:35,
    height:35,
    borderRadius: '50%',
    cursor : 'pointer',
    margin: 'auto 0',
  },
  button: {
    textTransform: 'none',
    margin: theme.spacing.unit,
    fontWeight: 'bold',
    marginLeft: '20px',
  },
  field: {
          fontSize: 13,
  },
  input : {//#e6ecf0
          backgroundColor: '#f5f8fa',
          borderRadius: '21px',
          border: '1px solid #e6ecf0',
          color: '#14171a',
          lineHeight: '1',
          padding: '0px 5px 0px 5px',
          marginRight: '20px',
          margin: 'auto 0',
          display: 'flex',
  }
});
const  TweetBtn= styled.div`
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

const primary = red[500]; // #F44336

const Span = styled.span`

  &::before{
    margin-right: 4px;
    font-family: "edgeicons";
    font-size: 21px;
    line-height: 1;
    content : '\f${props => props.content}';
  }
`
const SearchIcons = styled.div`
  padding-top: 2px;
  margin-right: 4px;
  &::before{
    font-family: "edgeicons";
    font-size: 18px;
    line-height: 1;
    color: #66757F;
    content : '\f058';
  }
`
class Icon extends Component{
  render(){
    return(
      <Span content={this.props.content}>{this.props.label}</Span>
    )
  }
}

class Appbar extends React.Component {
    state = {
      value: 0,
      name: '',
    };

    handleChange = (e,value) => {
      this.setState({ value});
    };
    handleChangeInput = (e) => {
      this.setState({name: e.target.value })
    }
   catchReturn = (e) => {
      if (e.key === 'Enter') {
           if(e.target.value==='aadhar')
             {
               render(<Aadhar />,document.querySelector('#content'));
             }
           else {
             alert("please type aadhar")
           }
     e.preventDefault();
     }
   }
   handleClick= () => {
     if(this.state.name==='aadhar'){
       render(<Aadhar />,document.querySelector('#content'));
     }
     else{
       alert('Please enter aadhar');
     }
   }
   handleHome= () => {
     render(<Main />,document.querySelector('#content'));
   }
  render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Paper className={classes.root} >
            <div style={{maxWidth: 1190,minWidth:1190,display: 'flex',margin: '0 auto'}}>
            <Tabs
               value={this.state.value}
               onChange={this.handleChange}
               indicatorColor="primary"
               textColor='primary'
               style={{height: 46,width:'40%',}}
            >
              <Tab className={classes.Tabs} icon={<Icon content={'553'} label={'Home'} />} onClick={this.handleHome} />
              <Tab className={classes.Tabs} icon={<Icon content={'160'} label={'Moments'} />}   />
              <Tab className={classes.Tabs} icon={<Icon content={'019'} label={'Notifications'} />} />
              <Tab className={classes.Tabs} icon={<Icon content={'054'} label={'Messages'} />}  />
            </Tabs>
            <div className={classes.flex}><Icon content={'179'} /></div>
            <div style={{width: '35%', display: 'inline-flex'}}>
            <div className={classes.input}>
               <Input
                      placeholder="Search Tweets"
                      className={classes.field}
                      onChange={this.handleChangeInput}
                      onKeyPress={this.catchReturn}
                      disableUnderline='true'
                    />
                  <SearchIcons content={'054'} onClick={this.handleClick}/>
                </div>
               <img className={classes.img} src="./img/default_profile_normal.png"></img>
                <Button raised color="primary" className={classes.button}>
                 Tweet
               </Button>
            </div>
          </div>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

Appbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);
