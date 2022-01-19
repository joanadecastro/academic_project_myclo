let IconesL;
let SquareBlue;
let SquareGreen;
let SquareOrange;
let SquareYellow;
let LineHover;
let MenuPage;
let MenuButtonPage;
let IconButtonPage;


/*=============================================================================================
        ICON HOMEPAGE-HOVER
=============================================================================================*/

/*.........EVENTO MOUSEOVER HOMEPAGE...........*/

IconesL = document.querySelector(".Icones_1_L");

IconesL.addEventListener("mouseover", function () {


  LineHover = document.querySelector(".horizontal_line_Y");

  LineHover.style.opacity = 0;

  SquareBlue = document.querySelector(".square_hiden_B");
  SquareGreen = document.querySelector(".square_hiden_G");
  SquareOrange = document.querySelector(".square_hiden_O");

  SquareBlue.classList.replace("square_hiden_B", "square_visible_B");
  SquareGreen.classList.replace("square_hiden_G", "square_visible_G");
  SquareOrange.classList.replace("square_hiden_O", "square_visible_O");


});


/*.........EVENTO MOUSEOUT HOMEPAGE...........*/

IconesL.addEventListener("mouseout", function () {

  LineHover.style.opacity = 1;

  SquareBlue = document.querySelector(".square_visible_B");
  SquareGreen = document.querySelector(".square_visible_G");
  SquareOrange = document.querySelector(".square_visible_O");

  SquareBlue.classList.replace("square_visible_B", "square_hiden_B");
  SquareGreen.classList.replace("square_visible_G", "square_hiden_G");
  SquareOrange.classList.replace("square_visible_O", "square_hiden_O");


});

/*===========================================================================================
        ICON USER - HOVER
=============================================================================================*/

/*.........EVENTO MOUSEOVER USER...........*/


IconesL = document.querySelector(".Icones_2_L");

IconesL.addEventListener("mouseover", function () {


  LineHover = document.querySelector(".vertical_line_B");

  LineHover.style.opacity = 0;

  SquareGreen = document.querySelector(".square_hiden_G");
  SquareOrange = document.querySelector(".square_hiden_O");
  SquareYellow = document.querySelector(".square_hiden_Y");

  SquareGreen.classList.replace("square_hiden_G", "square_visible_G");
  SquareOrange.classList.replace("square_hiden_O", "square_visible_O");
  SquareYellow.classList.replace("square_hiden_Y", "square_visible_Y");

});


/*.........EVENTO MOUSEOUT USER...........*/

IconesL.addEventListener("mouseout", function () {

  LineHover.style.opacity = 1;

  SquareGreen = document.querySelector(".square_visible_G");
  SquareOrange = document.querySelector(".square_visible_O");
  SquareYellow = document.querySelector(".square_visible_Y");

  SquareGreen.classList.replace("square_visible_G", "square_hiden_G");
  SquareOrange.classList.replace("square_visible_O", "square_hiden_O");
  SquareYellow.classList.replace("square_visible_Y", "square_hiden_Y");


});


/*===========================================================================================
        ICON SEARCH - HOVER
=============================================================================================*/

/*.........EVENTO MOUSEOVER SEARCH...........*/

IconesL = document.querySelector(".Icones_3_L");

IconesL.addEventListener("mouseover", function () {


  LineHover = document.querySelector(".vertical_line_G");

  LineHover.style.opacity = 0;

  SquareBlue = document.querySelector(".square_hiden_B");
  SquareOrange = document.querySelector(".square_hiden_O");
  SquareYellow = document.querySelector(".square_hiden_Y");

  SquareBlue.classList.replace("square_hiden_B", "square_visible_B");
  SquareOrange.classList.replace("square_hiden_O", "square_visible_O");
  SquareYellow.classList.replace("square_hiden_Y", "square_visible_Y");

});


/*.........EVENTO MOUSEOUT SEARCH...........*/

IconesL.addEventListener("mouseout", function () {

  LineHover.style.opacity = 1;

  SquareBlue = document.querySelector(".square_visible_B");
  SquareOrange = document.querySelector(".square_visible_O");
  SquareYellow = document.querySelector(".square_visible_Y");

  SquareBlue.classList.replace("square_visible_B", "square_hiden_B");
  SquareOrange.classList.replace("square_visible_O", "square_hiden_O");
  SquareYellow.classList.replace("square_visible_Y", "square_hiden_Y");


});


/*=================================================================================================
        ICON CHAT - HOVER
=============================================================================================*/

/*.........EVENTO MOUSEOVER CHAT...........*/

IconesL = document.querySelector(".Icones_4_L");

IconesL.addEventListener("mouseover", function () {


  LineHover = document.querySelector(".horizontal_line_O");

  LineHover.style.opacity = 0;

  SquareBlue = document.querySelector(".square_hiden_B");
  SquareGreen = document.querySelector(".square_hiden_G");
  SquareYellow = document.querySelector(".square_hiden_Y");

  SquareBlue.classList.replace("square_hiden_B", "square_visible_B");
  SquareGreen.classList.replace("square_hiden_G", "square_visible_G");
  SquareYellow.classList.replace("square_hiden_Y", "square_visible_Y");

});


/*.........EVENTO MOUSEOUT CHAT...........*/

IconesL.addEventListener("mouseout", function () {

  LineHover.style.opacity = 1;

  SquareBlue = document.querySelector(".square_visible_B");
  SquareGreen = document.querySelector(".square_visible_G");
  SquareYellow = document.querySelector(".square_visible_Y");

  SquareBlue.classList.replace("square_visible_B", "square_hiden_B");
  SquareGreen.classList.replace("square_visible_G", "square_hiden_G");
  SquareYellow.classList.replace("square_visible_Y", "square_hiden_Y");


});

/*=================================================================================================
       ICON HOMEPAGE-CLICK- ACESSO AO SEPARADOR HOMEPAGE
=============================================================================================*/

/*.........EVENTO CLICK HOMEPAGE...........*/

IconesL = document.querySelector(".Icones_1_L");

IconesL.addEventListener("click", function () {

  MenuPage = document.querySelector(".menu_page_hiden_Y");

  MenuPage.classList.replace("menu_page_hiden_Y", "menu_page_visible_Y");


  /*.........EVENTO CLICK MENU ICON...........*/


  MenuButtonPage = document.querySelector(".menu_button_Y2");

  MenuButtonPage.addEventListener("click", function () {

    MenuPage.classList.replace("menu_page_visible_Y", "menu_page_hiden_Y");


  });

  /*.INACABADO........EVENTO CLICK ICON..........INACABADO.*/

});

/*=================================================================================================
       ICON USER-CLICK- ACESSO AO SEPARADOR USER
=============================================================================================*/

/*.........EVENTO CLICK HOMEPAGE...........*/

IconesL = document.querySelector(".Icones_2_L");

IconesL.addEventListener("click", function () {

  MenuPage = document.querySelector(".menu_page_hiden_B");

  MenuPage.classList.replace("menu_page_hiden_B", "menu_page_visible_B");


  /*.........EVENTO CLICK MENU ICON...........*/


  MenuButtonPage = document.querySelector(".menu_button_B3");

  MenuButtonPage.addEventListener("click", function () {

    MenuPage.classList.replace("menu_page_visible_B", "menu_page_hiden_B");


  });

  /*.INACABADO........EVENTO CLICK ICON..........INACABADO.*/

});

/*=================================================================================================
       ICON SEARCH-CLICK- ACESSO AO SEPARADOR SEARCH
=============================================================================================*/

/*.........EVENTO CLICK HOMEPAGE...........*/

IconesL = document.querySelector(".Icones_3_L");

IconesL.addEventListener("click", function () {

  MenuPage = document.querySelector(".menu_page_hiden_G");

  MenuPage.classList.replace("menu_page_hiden_G", "menu_page_visible_G");


  /*.........EVENTO CLICK MENU ICON...........*/


  MenuButtonPage = document.querySelector(".menu_button_G2");

  MenuButtonPage.addEventListener("click", function () {

    MenuPage.classList.replace("menu_page_visible_G", "menu_page_hiden_G");


  });

  /*.INACABADO........EVENTO CLICK ICON..........INACABADO.*/

});

/*=================================================================================================
       ICON CHAT-CLICK- ACESSO AO SEPARADOR CHAT
=============================================================================================*/

/*.........EVENTO CLICK CHAT...........*/

IconesL = document.querySelector(".Icones_4_L");

IconesL.addEventListener("click", function () {

  MenuPage = document.querySelector(".menu_page_hiden_O");

  MenuPage.classList.replace("menu_page_hiden_O", "menu_page_visible_O");


  /*.........EVENTO CLICK MENU ICON...........*/


  MenuButtonPage = document.querySelector(".menu_button_O2");

  MenuButtonPage.addEventListener("click", function () {

    MenuPage.classList.replace("menu_page_visible_O", "menu_page_hiden_O");


  });

   /*.INACABADO........EVENTO CLICK ICON..........INACABADO.*/
    

});





















