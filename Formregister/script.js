const passBtn = document.getElementById('password_input');
const eyeBtn = document.getElementById('show_password');
const clickBtn = document.getElementById('click_btn');
const displayBtn = document.getElementById('disply_sucess');
const backBtn = document.getElementById('back_button');

eyeBtn.addEventListener("click", () => {
    if (passBtn.getAttribute("type") == "password") {
        passBtn.setAttribute("type","text")
    }
    else {
        passBtn.setAttribute("type","password")
    }

});

clickBtn.addEventListener('click',() => {
    displayBtn.style.display='grid';


});
// resetBtn.addEventListener('submit', function(event){
//     event.preventDefault();
//     this.reset();
// });

backBtn.addEventListener('click',() => {
    displayBtn.style.display='none';

});
