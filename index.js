/*popup*/

  var close = document.getElementById("close");
  var popup = document.querySelector(".popup");

  close.addEventListener("click", function () {
    popup.classList.add("hidden");
  });


/*image-slider*/
const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')

const imageList =[1,2,3,4,5]

let index = 0 
container.style.background = `url("./image/${imageList[index]}.jpeg") center/cover no-repeat`;
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
          index--;
          if(index<0){
            index = imageList.length-1;
          }
          container.style.background = `url("./image/${imageList[index]}.jpeg") center/cover no-repeat`;
       


        }

        else{
            index++;
            if(index===imageList.length){
                index = imageList.length-1;
                
            }
            container.style.background=`url("./image/${imageList[index]}.jpeg") center/cover  no-repeat`


        }
    })
})


//side navbar,menu icon 
var sidenav = document.getElementById("sidenav") 
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function(){
  sidenav.style.right=0
})

closenav.addEventListener("click",function(){
  sidenav.style.right="-50%"
})