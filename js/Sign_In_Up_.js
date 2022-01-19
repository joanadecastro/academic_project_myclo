
/*==========================================================================
...............................SIGN UP........................................
============================================================================*/

const SignUp = document.querySelector(".rectangle_blue");
const SignIn = document.querySelector(".rectangle_green");

/*.........EVENTO CLICK SIGN UP...........*/

SignUp.addEventListener("click", function () {


  const boxUpL = document.querySelector(".box_up_L");

  boxUpL.style.display = "block";
 
  const btnSignUp = document.querySelector(".button_sign_Up");

  btnSignUp.style.display = "block";
  
  const noneUp = document.querySelectorAll(".rectangle_blue, .rectangle_orange, .rectangle_green, .rectangle_yellow, .button_sign_In");
  

  document.querySelectorAll(".rectangle_blue, .rectangle_orange, .rectangle_green, .rectangle_yellow, .button_sign_In").forEach((element, index) => {
    element.style.display = "none";

  });
 
/*.......PARAR A ANIMAÇAO DE BTNSIGNup.........*/


 let animationyellow = btnSignUp.animate([

    { transform: 'translate(0)' },
    { transform: 'translate(60px, -20px)' }

  ], 5000);

  animationyellow.addEventListener('finish', function () {

    btnSignUp.style.transform = 'translate(60px, -20px)';

  });

});

/*==========================================================================
...............................SIGN IN........................................
============================================================================*/

/*.........EVENTO CLICK SIGN IN...........*/

SignIn.addEventListener("click", function () {


  const boxInL = document.querySelector(".box_in_L"); 

  boxInL.style.display = "block";

  const btnSignIn = document.querySelector(".button_sign_In");

  btnSignIn.style.display = "block";

  const noneIn = document.querySelectorAll(".rectangle_green, .rectangle_orange, .rectangle_blue, .rectangle_yellow, .button_sign_Up");
 
  document.querySelectorAll(".rectangle_green, .rectangle_orange, .rectangle_blue, .rectangle_yellow, .button_sign_Up").forEach((element, index) => {

    element.style.display = "none";

  });

/*.......PARAR A ANIMAÇAO DE BTNSIGNin..........*/

  let animationyellow = btnSignIn.animate([

    { transform: 'translate(0)' },
    { transform: 'translate(60px, 50px)' }

  ], 5000);

  animationyellow.addEventListener('finish', function () {

    btnSignIn.style.transform = 'translate(60px, 50px)';

  });

});



