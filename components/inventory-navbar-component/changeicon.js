//!Switch icon menu => X

let btnImage = document.getElementById('btnChange');
let changeImage = document.getElementById('icon-navbar');
let counter = 0;


const change = () => {

    if(counter === 0){
        let pic1;
        pic1 =  '/images/X.png';
        document.getElementById('icon-navbar').src = pic1 ;
        counter= 1 ;
    }
    else{
        let pic2;
        pic2 = '/images/menu.png';
        document.getElementById('icon-navbar').src = pic2 ;
        counter= 0;
    }
} 

btnImage.addEventListener('click' , change , true );
