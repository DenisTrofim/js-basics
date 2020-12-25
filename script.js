//function returnTypeTwo(x) {
//    console.log(typeof x + '1');
//    console.log(typeof x + '2');
//    console.log(x)
//    
//}

//returnTypeTwo(3);
//
//function form-id(x){
//    console.log('#form-id');
//}
//
//form-id();

//function submit(x) {
//  console.log('#form\\-id') ;
//  document.querySelector('#form\\:id');
//}


//function dataHandler () {
//
//  let userNameImpyt = document.querySelector("#user_name, #pass, #email, #phone").value;
//  console.log(userNameImpyt)
//}

function dataHandler () {
  let userNameInpyt = document.querySelector("#user_name").value;
  let userNamePass = document.querySelector("#pass").value;
  let userNameEmail = document.querySelector("#email").value;
  let userNamePhone = document.querySelector("#phone").value;
  console.log(userNameInpyt)
  console.log(userNamePass)
  console.log(userNameEmail)
  console.log(userNamePhone)


  let arr = [];
   arr.push(userNameInpyt);
   arr.push(userNamePass);
   arr.push(userNameEmail);
   arr.push(userNamePhone);

   console.log(arr);


  let user = {
    push : [0],
    name : [1]
    }
   console.log(user.name);
   console.log(user.push);

  }

  



     
    

 //let elementis = ['user_name', 'pass', 'email', 'phone'];
 //console.log(elementis)
 //}


  function help() {
    let buttonHelp = document.querySelector("#keep").value;
    alert('Не могу помочь!!!');

  }