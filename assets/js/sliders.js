// // aboutUs---------
// const btn_left_slid = document.getElementById('btn_left_slid');
// const btn_right_slid = document.getElementById('btn_right_slid');
// const slider1 = document.getElementById('slider1');
// const maxScrollLeft = slider1.scrollWidth - slider1.clientWidth;

// function autoPlay() {
//     if(slider1.scrollLeft > (maxScrollLeft-1)){
//         slider1.scrollLeft -= maxScrollLeft;
//     }else{
//         slider1.scrollLeft += 2;
//     }
// }

// btn_left_slid.addEventListener('click',function(){
//     slider1.scrollLeft -= 125 ;
// })
// btn_right_slid.addEventListener('click',function(){
//     slider1.scrollLeft += 125 ;
// })

// let slider_item=document.getElementsByClassName('slider_item');
// let play = setInterval(autoPlay,50)

// for(let i=0;i<slider_item.length;i++){
//     slider_item[i].addEventListener('mouseover',()=>{
//         clearInterval(play)
//     })
//     slider_item[i].addEventListener('mouseout',()=>{
//         return play = setInterval(autoPlay,50)
//     })
// }



// aboutUs---------------------------------------------------------
const btn_left = document.getElementsByClassName('btn_left');
const btn_righ = document.getElementsByClassName('btn_right');
const slider2 = document.getElementsByClassName('slider2');
const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

btn_left.addEventListener('click',function(){
    slider2.scrollLeft -= 125 ;
})
btn_righ.addEventListener('click',function(){
    slider2.scrollLeft += 125 ;
})

function autoPlay2() {
    if(slider2.scrollLeft > (maxScrollLeft2-1)){
        slider2.scrollLeft -= maxScrollLeft2;
    }else{
        slider2.scrollLeft += 2;
    }
}

let slider_item2 =document.getElementsByClassName('slider_item2');
let play2 = setInterval(autoPlay,50)

for(let i=0;i<slider_item2.length;i++){
    slider_item2[i].addEventListener('mouseover',()=>{
        clearInterval(play2)
    })
    slider_item2[i].addEventListener('mouseout',()=>{
        return play2 = setInterval(autoPlay,50)
    })
}