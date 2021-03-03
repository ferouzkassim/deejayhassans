const navbar=document.getElementById('nav'),
     heda=document.querySelector('header');
const fnav=()=>{
if(innerWidth<=760){
navbar.children[0].style.display='none'
}}
 
heda.onload=fnav
heda.onload(fnav)