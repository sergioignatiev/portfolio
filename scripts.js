import {en} from './about.js';
import {ru} from './about.js';
let me=ru

document.querySelector('.lang').addEventListener('click',Me)
function Me(){
    
if(me===en){me=ru}
else if(me===ru){me=en}
let nav=document.querySelectorAll('.nav')
    nav[0].innerHTML=me.main;
    nav[1].innerHTML=me.about;
    nav[2].innerHTML=me.skills;
    nav[3].innerHTML=me.portfolio;
    nav[4].innerHTML=me.contacts;
    nav[5].innerHTML=me.lang;
    
}
Me()

    


