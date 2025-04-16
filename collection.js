var search = document.getElementById("search")

var collection = document.querySelector(".result")

var h1List = collection.querySelectorAll("h1")
var occationList = collection.querySelectorAll(".OCCASSION")
var priceList = collection.querySelectorAll(".price")


search.addEventListener("keyup",function(){
    var enteredValue = event.target.value
    console.log(enteredValue)
for(count=0;count<h1List.length;count=count+1){
    if(h1List[count].textContent.indexOf(enteredValue)<0){
        h1List[count].parentElement.style.display="none"
    }
    else{
        h1List[count].parentElement.style.display="block"
    }
}
})


//checkbox value 
var check = document.getElementsByClassName("check")
let occassion=[]
let color=[]
let arrival=[]


for(count=0;count<check.length;count=count+1){
    check[count].addEventListener("click",function(){
        if(event.target.checked){
            console.log("checked"+event.target.name)
            if(event.target.name==="OCCASSION"){
                occassion.push(event.target.value)
                console.log(occassion,color,arrival);
                updateProduct()
            }else if(event.target.name==="Color"){
                color.push(event.target.value)
                console.log(occassion,color,arrival);
                updateProduct()

            }else if(event.target.name==="Arrivals"){
                arrival.push(event.target.value)
                console.log(occassion,color,arrival);
    
            }
           
        }else{
            if(event.target.name==="OCCASSION"){
                occassion.splice(occassion.indexOf(event.target.value),1)
                console.log(occassion,color,arrival);
                updateProduct()
            }else if(event.target.name==="Color"){
            
                color.splice(color.indexOf(event.target.value),1)
                console.log(occassion,color,arrival);
                updateProduct()

            }else if(event.target.name==="Arrivals"){
                arrival.splice(arrival.indexOf(event.target.value),1)
                console.log(occassion,color,arrival);
            }

            console.log("unchecked"+event.target.value)
        }
    })
    
    
    
    
}

const updateProduct=()=>{

// console.log(occationList,priceList);
for(count=0;count<occationList.length;count++){
    console.log(occationList[count].textContent.toLocaleLowerCase().indexOf(occassion));
    
    if(occationList[count].textContent.toLocaleLowerCase().indexOf(occassion)<0){
        occationList[count].parentElement.style.display="none"
    }
    else{
        occationList[count].parentElement.style.display="block"
    }
}

}



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