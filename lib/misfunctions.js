export function loadingFx(){
    setTimeout(()=>{
      document.getElementById('loader').style.display ="none"
      document.getElementById('content').style.display="block"
    },2000)
 }