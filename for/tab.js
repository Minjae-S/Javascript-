// 버튼0 누르면 
// 클래스명 추가
// 모든 버튼 에 붙은 오렌지 클래스명 제거
// div0에 show 클래스명 추가
// 모든 div에 부튼 show 클ㄹ래스명 제거

const tabBtn1 = document.querySelectorAll('.tab-button')[0];
const tabBtn2 = document.querySelectorAll('.tab-button')[1];
const tabBtn3 = document.querySelectorAll('.tab-button')[2];

const tabCon = document.getElementsByClassName('tab-content')[0];
const tabCon2 = document.getElementsByClassName('tab-content')[1];
const tabCon3 = document.getElementsByClassName('tab-content')[2]


tabBtn1.addEventListener('click', function() {

    tabBtn1.classList.remove('orange');
    tabBtn2.classList.remove('orange');
    tabBtn3.classList.remove('orange');

     tabBtn1.classList.add('orange');

     tabCon.classList.remove('show');
     tabCon2.classList.remove('show');
     tabCon3.classList.remove('show');

    tabCon.classList.add('show');



})

tabBtn2.addEventListener('click', function() {

    tabBtn1.classList.remove('orange');
    tabBtn2.classList.remove('orange');
    tabBtn3.classList.remove('orange');

     tabBtn2.classList.add('orange');

     tabCon.classList.remove('show');
     tabCon2.classList.remove('show');
     tabCon3.classList.remove('show');

    tabCon2.classList.add('show');



})

tabBtn3.addEventListener('click', function() {

    tabBtn1.classList.remove('orange');
    tabBtn2.classList.remove('orange');
    tabBtn3.classList.remove('orange');

     tabBtn3.classList.add('orange');

     tabCon.classList.remove('show');
     tabCon2.classList.remove('show');
     tabCon3.classList.remove('show');

    tabCon3.classList.add('show');



})