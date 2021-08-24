// https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   validate();
//   document.getElementById("form").submit();
// });


const sendingData=()=>{
  document.getElementById("form").onsubmit();
  
}


//senddata
const sendData=(sRate,count)=>{
  if(sRate===count){
    alert('Registration Successfully Submitted');
    swal("Welcome Joginder", "Registration Successful!", "success");
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

// more define email
const isEmail=(emailVal)=>{
    var atSymbal=emailVal.indexOf("@");
    var dot=emailVal.lastIndexOf(".");
    if(atSymbal<1)return false;
    if(dot<=atSymbal+2)return false;
    if(dot==emailVal.length-1)return false;
    return true;
}
//define the validate

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  //validate username
  if (usernameVal == "") {
      setErrorMsg(username,"username cannot be blank");
  }else if(usernameVal.length<=2){
    setErrorMsg(username,"username min char.. ");
  }else{
      setSuccessMsg(username);
  }
  //validate email
  if (emailVal == " ") {
      setErrorMsg(email,"email cannot be blank");
  }else if(!isEmail(emailVal)){
    setErrorMsg(email,"not a valid email ");
  }else{
      setSuccessMsg(email);
  }
  //validate phone
  if (phoneVal == "") {
      setErrorMsg(phone," cannot be blank");
  }else if(phoneVal.length != 10){
    setErrorMsg(phone,"not a valid phone number ");
  }
  else{
      setSuccessMsg(phone);
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
  if (cpasswordVal == "") {
      setErrorMsg(cpassword," cannot be blank");
  }else if(passwordVal != cpasswordVal){
    setErrorMsg(cpassword,"password is not matching ");
  }
  else{
      setSuccessMsg(cpassword);
  }

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


