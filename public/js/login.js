// https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js

const form = document.getElementById("form");
const username = document.getElementById("username");

const password = document.getElementById("password");


const sendingData=()=>{
  document.getElementById('form').onsubmit();
}

//add event
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   validate();
// });
//senddata
const sendData=(sRate,count)=>{
  if(sRate===count){
    alert('Login Successfully ');
    swal("Welcome Joginder", " Login Successful!", "success");
  }
}


//final validation
const successMsg=()=>{
  let formCon=document.getElementsByClassName('form-control');
  let count=formCon.length-1;
  for(let i=0;i<formCon.length;i++){
    if(formCon[i].className=='form-control success'){
      let sRate=0+i;
      sendData(sRate,count);
    }else{
      return false;
    }
  }
}


//define the validate

const validate = () => {
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  ;
  //validate username
  if (usernameVal == "") {
      setErrorMsg(username,"username cannot be blank");
  }else if(usernameVal.length<=2){
    setErrorMsg(username,"username min char.. ");
  }else{
      setSuccessMsg(username);
  }
  
  //validate password
  if (passwordVal == "") {
      setErrorMsg(password," cannot be blank");
  }else if(passwordVal.length <= 5){
    setErrorMsg(password,"min 6 char.. ");
  }
  else{
      setSuccessMsg(password);
  }
  //cpassword
  

  successMsg();
};


 function setErrorMsg(input,errormsgs){
     const formControl=input.parentElement;
     const small=formControl.querySelector('small');
     formControl.className="form-control error";
     small.innerText=errormsgs;
 }
 function setSuccessMsg(input){
     const formControl=input.parentElement;
     formControl.className="form-control success";
 }


