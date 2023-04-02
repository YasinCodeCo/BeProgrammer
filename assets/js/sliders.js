// aboutUs---------
const btn_left_slid = document.getElementById('btn_left_slid');
const btn_right_slid = document.getElementById('btn_right_slid');
const slider1 = document.getElementById('slider1');
const maxScrollLeft = slider1.scrollWidth - slider1.clientWidth;

function autoPlay() {
    if(slider1.scrollLeft > (maxScrollLeft-1)){
        slider1.scrollLeft -= maxScrollLeft;
    }else{
        slider1.scrollLeft += 2;
    }
}

btn_left_slid.addEventListener('click',function(){
    slider1.scrollLeft -= 125 ;
})
btn_right_slid.addEventListener('click',function(){
    slider1.scrollLeft += 125 ;
})

let slider_item=document.getElementsByClassName('slider_item');
let play = setInterval(autoPlay,50)

for(let i=0;i<slider_item.length;i++){
    slider_item[i].addEventListener('mouseover',()=>{
        clearInterval(play)
    })
    slider_item[i].addEventListener('mouseout',()=>{
        return play = setInterval(autoPlay,50)
    })
}



// aboutUs---------------------------------------------------------

const btn_right_slid2 = document.getElementById('btn_right_slid2');
const btn_left_slid2 = document.getElementById('btn_left_slid2');
const slider2 = document.getElementById('slider2');
const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

function autoPlay2() {
    if(slider2.scrollLeft > (maxScrollLeft2-1)){
        slider2.scrollLeft -= maxScrollLeft2;
    }else{
        slider2.scrollLeft += 2;
    }
}

btn_left_slid2.addEventListener('click',function(){
    slider2.scrollLeft -= 125 ;
})
btn_right_slid2.addEventListener('click',function(){
    slider2.scrollLeft += 125 ;
})

let slider_item2 = document.getElementsByClassName('slider_item2');
let play2 = setInterval(autoPlay2,50)

for(let i=0;i<slider_item2.length;i++){
    slider_item2[i].addEventListener('mouseover',()=>{
        clearInterval(play2)
    })
    slider_item2[i].addEventListener('mouseout',()=>{
        return play2 = setInterval(autoPlay,50)
    })
}

// aboutUs---------------------------------------------------------

const btn_right_slid3 = document.getElementById('btn_right_slid3');
const btn_left_slid3 = document.getElementById('btn_left_slid3');
const slider3 = document.getElementById('slider3');
const maxScrollLeft3 = slider3.scrollWidth - slider3.clientWidth;

function autoPlay3() {
    if(slider3.scrollLeft > (maxScrollLeft3-1)){
        slider3.scrollLeft -= maxScrollLeft3;
    }else{
        slider3.scrollLeft += 2;
    }
}

btn_left_slid3.addEventListener('click',function(){
    slider3.scrollLeft -= 125 ;
})
btn_right_slid3.addEventListener('click',function(){
    slider3.scrollLeft += 125 ;
})

let slider_item3 = document.getElementsByClassName('slider_item3');
let play3 = setInterval(autoPlay3,50)

for(let i=0;i<slider_item3.length;i++){
    slider_item3[i].addEventListener('mouseover',()=>{
        clearInterval(play3)
    })
    slider_item3[i].addEventListener('mouseout',()=>{
        return play3 = setInterval(autoPlay3,50)
    })
}