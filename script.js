
let button=document.querySelector("#button");
function myfunction(){
const name=document.querySelector("#name").value;
const pass=document.querySelector("#password").value;
let dt=JSON.stringify({"username":name.toString(), "password":pass.toString()});
const option ={
    method:'post',
    body:dt,
    headers:{
        "content-type":"application/json",
        'Access-Control-Allow-Origin':'*'
    }
}
 const  url='http://myapplication-env.eba-p3miuaui.ap-south-1.elasticbeanstalk.com/' 



fetch(url,option)
.then((res)=>res.text())
.then((data)=>{
if (!data){
    console.log("error")
}else{
    document.write(data)
    }
})

}
button.addEventListener("click",myfunction);
