import React from 'react';
import ReactDOM from 'react-dom';

let img1="https://picsum.photos/200/300"
let img2="https://picsum.photos/seed/picsum/200/300"
let img3="https://picsum.photos/200/300?grayscale"
let img4="https://picsum.photos/200/300/?blur"
let link="https://www.github.com";
let name='Aakash Kushwaha';

const heading={
  color: "#fa9191",
  textTransform:"capitalize",
  textAlign: "center",
  fontWeight:"bold",
  textShadow :" 0px 2px 4px #ffe9c5",
  margin:"70px 0",
  fontFamily:'"Josfin Sans",sans-serif',
};
const img_dis={
  display: "flex-container",
  justifyContent: "center",
  width: "250px",
  height: "300px",
};

ReactDOM.render(
  <>
    <h1 style={heading} > My name is {name}</h1>

    <div >
      <img src={img1} style={img_dis} alt="ramdomImage"/>
      <img src={img2}  style={img_dis} alt="ramdomImage"/>
      <img src={img4} style={img_dis} alt="randiomImage"/>
      <a href={link}>

        <img src={img3} style={img_dis} alt="github"/>

      </a>
    </div>
  </>,
  document.getElementById("root")
);


