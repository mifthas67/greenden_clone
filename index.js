
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close_nav=document.getElementById("close-nav")

menuicon.addEventListener("click",function(){

sidenav.style.right=0


})


close_nav.addEventListener("click",function(){

sidenav.style.right="-50%"


})


var product_container=document.getElementById("product_container")
var plant_list=product_container.querySelectorAll("div")
var search=document.getElementById("search")


search.addEventListener("keyup",()=>{

    var inputValue=event.target.value

    for(i=0;i<plant_list.length;i++){

        var productname=plant_list[i].querySelector("p").textContent

        if(productname.indexOf(inputValue)<0){

            plant_list[i].style.display="none"

        }
        else{

            plant_list[i].style.display="block"

        }

    }



})

