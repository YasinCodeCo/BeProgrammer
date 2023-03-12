var hamberMenuImg =document.getElementById("hamberMenuImg")
        var hamberMenu =document.getElementById("hamberMenu")
        var headerRes =document.getElementById("header_res")

        hamberMenu.addEventListener("click",function(){
            if(headerRes.style.right === "-300px"){
                headerRes.style.right = "0"
                hamberMenuImg.src="./assets/images/icons/close.png";
                hamberMenu.style.position="fixed";
                hamberMenu.style.right="20px";
            }else{
                headerRes.style.right = "-300px"
                hamberMenuImg.src="./assets/images/icons/hamberMenuwhite.png";
                hamberMenu.style.right="-30px";
                hamberMenu.style.position="relative";

            }
        })

        