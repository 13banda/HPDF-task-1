import Content from './content';
import React,{Component} from 'react';
class NewTweet extends Component{

  render(){
  const style={
    div:{
      border: '1px solid #e6ecf0',
      margin:'0 auto',
      backgroundColor: '#f5f8fa',
      color: '#1DA1F2',
      padding: "10px 0px",
      textAlign: 'center',
      fontSize: '16px',
    },
    img:{
      width:32,
      height:32,
      borderRadius: '50%',
      left: 28,
      position: "relative",
      top: 13,
 }

  }
    return (
      <div style={{width: 590,}}>
        <div style={style.div}>
            See new Tweets
        </div>
      </div>
    );
  }

}
export default function main (){
 return (
  <div>
  <NewTweet />
  <Content
    avatr={'./img/image_bigger.jpg'}
    title={"Shrimp and Chorizo Paella"}
    subheader= {"@Shrimp & Chorizo .10m"}
    content={"Shrimp and mahindra . people send him this photo"}
    src={'./img/img-1.jpg'}
    />

   <Content
     avatr={'./img/0-1.jpeg'}
     title={"Brilliant Ads"}
     subheader= {"@Brilliant_Ads . 11m"}
     content={"WWF billboard uses daylight to remind us of the rising ocean levels"}
     src={"./img/img-2.jpg"}
     />
   <Content
     avatr={'./img/img-3.jpg'}
     title={"Rajdeep Sardesai"}
     subheader= {"@sardesairajdeeep . 27m"}
     content={"seven ministers and more than 40 sitting MLAs lost; Congress senior leaders lost: voters message: give us new, young faces!! #GujaratVerdict"}
    />

   <Content
     avatr={'./img/img-3.jpg'}
     title={"Rajdeep Sardesai"}
     subheader= {"@sardesairajdeeep. 9m"}
     content={"9.30 pm: searching for Kerala's missing fishermen: lost in the cyclone.. @IndiaToday tv"}
       />
   <Content
     avatr={'./img/imgg.jpg'}
     title={"Manchester United"}
     subheader= {"@Man Utd . 11m"}
     content={".@VanCole9 has lifted the lid on his time with Wednesday night's @Carabao_Cup opponents, Bristol City..."}
     src={'./img/img-5.jpg'}   />
   <Content
     avatr={'./img/0-1.jpeg'}
     title={"Brilliant Ads"}
     subheader= {"@Brilliant_Ads . 11m"}
     content={"Amnesty: It's not happening here. But it is happening now"}
     src={"./img/img-6.jpg"}
     />
   <Content
     avatr={'./img/img-8.jpg'}
     title={"EastIndia Comedy‏"}
     subheader= {"@EastIndia Comedy . 11m"}
     content={"Aaj bite lene ki zidd na karo!"}
     src={"./img/img-7.jpg"}
     />
    </div>)

};
