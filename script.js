function createEle(ele,att,value){
    let x=document.createElement(ele);
    x.setAttribute(att,value);
    return x;
}
let container=createEle("div","class","container");
let h1=createEle("h1","class","content");
h1.innerHTML="Are You Mad..?"
let br1=document.createElement("br");
let yes=createEle("input","type","radio");
yes.setAttribute("id","yes")
yes.setAttribute("value","yes")
yes.setAttribute("name","selection");
let yesLable=createEle("lable","for","yes");
yesLable.innerHTML="Yes"
let no=createEle("input","type","radio");
no.setAttribute("id","no")
no.setAttribute("value","no")
no.setAttribute("name","selection");
let noLable=createEle("lable","for","no");
noLable.innerHTML="No"
let button=createEle("button","type","button");
button.innerHTML="Click Here";
button.addEventListener("click",click);
no.addEventListener("change",()=>{
    if(no.checked) button.style.display="none";
})
yes.addEventListener("change",()=>{
    if(yes.checked) button.style.display=null;
})
function click(){
    let x=document.getElementsByName("selection");
    let xValue;
    let button_css=document.querySelector("button")
    for(let i=0; i<x.length; i++){
        if(x[i].checked){
            xValue=x[i].value;
            if(xValue=="no"){
                button_css.style.display=null;
            } else{
                NoFun();
            }           
        } 
    }
}
function NoFun(){
    let x=document.querySelector("h1");
    x.setAttribute("id","ans");
    x.innerHTML="Already I Know da..!";
    return x;
}
container.append(h1,br1,yes,yesLable,no,noLable,br1,button);
document.body.append(container);

