let show = true;

const menucontent = document.querySelector('.content'); /*pega o content do html e interage com o JS*/
const menuToggle = menucontent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () =>{

        menucontent.classList.toggle('on',show);
        show = !show;


});

