import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let currDate=new Date();
currDate=currDate.getHours();

let greating="";
let cssStyle={};


if(currDate>=1 && 12>currDate){
    greating="Good Morning";
    cssStyle.color="#afe4ee";
}else if( currDate>=12 && 4>currDate){
    greating="Good AfterNoon";
    cssStyle.color="#ede369";
}else if( currDate>=4 && 8>currDate){
    greating="Good Evening";
    cssStyle.color="#325e76";
}else{
    greating="Good Night";
    cssStyle.color="Black";
};

ReactDom.render(
    <>
        <h1> Hello Aakash ,<span style={cssStyle}>{greating}</span> </h1>

    </>,
    document.getElementById('root')
);


