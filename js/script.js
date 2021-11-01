 var filter = document.getElementById("filter");
 var iSearch = document.getElementById("iSearch")
 var iconSearch = document.getElementById("iconSearch")
 var cardCont = document.getElementById("cardCont")
 var search = document.getElementById("search")
 var logoimg = document.getElementById("logoimg")




 iSearch.addEventListener("click", function () {

     filter.focus()

 })

 //
 //window.onload = function() {
 //  logoimg.style.width = "300px"
 //};

 logoimg.addEventListener("click", function () {

     //    window.scrollTo(0, 0)

     window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth'
     });

     iconSearch.classList.add("fa-search");
     iconSearch.classList.remove("fa-times");

     filter.value = "";
     for (i = 0; i < cards.length; i++) {
         cards[i].classList.remove("none")

     }

     lista.classList.remove("flex")



     //     window.location.reload()
 })




 var Tornillos = {
     c908: {
         nombre: "T1 Mecha 8x9/16",
         peso: 1.8,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_850122-MLA45794892879_052021-O.webp",
     },
     c909: {
         nombre: "T2 Aguja 6x1",
         peso: 1.4,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_2X_884595-MLA42075659698_062020-F.webp",
     },
     c3064: {
         nombre: "T3 Aguja 6x1.1/2",
         peso: 1.95,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_2X_884595-MLA42075659698_062020-F.webp",
     },
     c7749: {
         nombre: "T2 Mecha 6x1.1/8",
         peso: 1.7,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_645033-MLA44160096768_112020-O.webp",
     },
     c8032: {
         nombre: "Fix Madera 8x3",
         peso: 5.3,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },
     c8482: {
         nombre: "T1 Aguja 8x9/16",
         peso: 1.75,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_866719-MLA32865992485_112019-O.webp",
     },
     c9653: {
         nombre: "Fix Madera 10x1.3/4",
         peso: 4.25,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },
     c13411: {
         nombre: "T3 Mecha 6x1.5/8",
         peso: 2.85,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_924774-MLA42501624236_072020-O.webp",
     },
     c14276: {
         nombre: "T4 Aguja 6x2",
         peso: 2.45,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_2X_884595-MLA42075659698_062020-F.webp",
     },
     c14705: {
         nombre: "Alas 8x1.1/4",
         peso: 2.4,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_948404-MLA42073995800_062020-O.webp",
     },
     c15053: {
         nombre: "Hex T2 Chapa 12x3/4",
         peso: 4.7,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_828274-MLA42073886674_062020-O.webp",
     },
     c15063: {
         nombre: "Fix Madera 8x1.1/4",
         peso: 2.3,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },
     c15279: {
         nombre: "Hex T2 Chapa 14x2",
         peso: 12.3,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_742501-MLA29645104080_032019-O.webp",
     },
     c15383: {
         nombre: "T1 Mecha Largo 10x3/4",
         peso: 2.45,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_850122-MLA45794892879_052021-O.webp",
     },
     c15385: {
         nombre: "Alas 10x1.1/2",
         peso: 3.6,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_948404-MLA42073995800_062020-O.webp",
     },
     c15416: {
         nombre: "Alas 10x2",
         peso: 4.7,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_948404-MLA42073995800_062020-O.webp",
     },
     c15445: {
         nombre: "Fix Madera 6x2",
         peso: 2.45,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },
     c15536: {
         nombre: "Fix Madera 10x2",
         peso: 4.75,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },
     c15620: {
         nombre: "Hex T2 Madera 14x2",
         peso: 12.2,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_742501-MLA29645104080_032019-O.webp",
     },
     c15867: {
         nombre: "Hex T1 Chapa 10x3/4",
         peso: 3.4,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_828274-MLA42073886674_062020-O.webp",
     },
     c120258: {
         nombre: "Fix Madera 8x1.3/4",
         peso: 3.1,
         urlImg: "https://http2.mlstatic.com/D_NQ_NP_740046-MLA41382619306_042020-O.webp",
     },




 }

 /*

 Se copia la porcion de codigo con el detalle del tornillo 


             cod109: {
                 nombre: "T3 Aguja",
                 peso: 3.8,
                 urlImg: "https://http2.mlstatic.com/D_NQ_NP_2X_884595-MLA42075659698_062020-F.webp",
             },
             
             
             
             
             */


 // Por cada objeto se crea una tarjeta con su respectiva imagen y descripcion

 var lista = document.getElementById("lista")
 var listUl = document.getElementById("listUl")
 var btnPlus = document.getElementById("btnPlus")
 var btnErace = document.getElementById("btnErace")
 var btnPlusI = document.getElementById("btnPlusI")
 var btnEraceI = document.getElementById("btnEraceI")
 var list = []


 btnErace.addEventListener("click", function () {

     list = [];
     listUl.innerHTML = "";
     btnErace.classList.toggle("animate__backOutDown")

 })


 btnPlus.addEventListener("click", function () {
     //            lista.innerHTML = list
     //            console.log(list)
     //            btnErace.classList.toggle("block"); VER
     btnPlusI.classList.toggle("btnplusClick")
     listUl.innerHTML = "";
     for (i in list) {

         var listLi = document.createElement("li")
         //                var listUl = document.createElement("ul")
         var listLiText = document.createTextNode(list[i])
         listLi.appendChild(listLiText)
         //                listUl.appendChild(listLi)
         listUl.appendChild(listLi)
//         console.log(list)

         //                lista.innerHTML += list[i] + "</br>"

     }
     lista.classList.toggle("flex")

 })

 for (i in Tornillos) {

     //        console.log(Tornillos[i].nombre)
     //        console.log(Tornillos[i].peso)

     var li = document.createElement("li")
     li.setAttribute("onclick",

         `   
                swal({
title: "Cantidad:", 
                       
                      content: {
                        element: "input",
                        attributes: {
                        type: "number",
                        },
                        },

                })
                .then((value) => {
                    swal(value + " ${Tornillos[i].nombre} son: " + Math.round(value * ${Tornillos[i].peso}) + " gr");

                    list.push(value + " ${Tornillos[i].nombre} son: " + Math.round(value * ${Tornillos[i].peso}) + " gr");

                    
                });`

     )


     var p = document.createElement("p")
     var img = document.createElement("img")
     img.setAttribute("src", Tornillos[i].urlImg)
     var text = document.createTextNode(Tornillos[i].nombre)

     li.classList.add("card")

     p.appendChild(text)
     li.appendChild(img)
     li.appendChild(p)
     cardCont.appendChild(li)


     //            console.log(Tornillos[i].nombre)
 }



 // Filtra los objetos y reinicia el buscador


 var cards = document.querySelectorAll(".card")
 var p = document.querySelectorAll("p")
 //        console.log(cards)

 filter.addEventListener("keyup", function (e) {


     for (i = 0; i < cards.length; i++) {
         if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
             cards[i].classList.remove("none")
         } else {
             cards[i].classList.add("none")
         }
     }

     if (filter.value !== "") {
         iconSearch.classList.add("fa-times")
         iconSearch.classList.remove("fa-search")

         iSearch.addEventListener("click", function () {

             filter.value = ""
             for (i = 0; i < cards.length; i++) {
                 cards[i].classList.remove("none")

             }
             iconSearch.classList.add("fa-search")
             iconSearch.classList.remove("fa-times")

         })


     } else {
         iconSearch.classList.add("fa-search")
         iconSearch.classList.remove("fa-times")
     }

 })

 document.body.addEventListener("keydown", function (event) {
     if (event.keyCode === 27) {
         iconSearch.classList.add("fa-search");
         iconSearch.classList.remove("fa-times");

         filter.value = "";
         for (i = 0; i < cards.length; i++) {
             cards[i].classList.remove("none")

         }
         filter.value = ""





         filter.focus();
     }
 });






// if (You need a website) {
//     function Contact me() {
//
//         const Date = {
//             Whatsapp: 358731577,
//             Instagram: "Jc_Desarrollo",
//             Website: "jcdesarrollo.com",
//             Mail: "jcavitelli@gmail.com",
//         };
//     };
// } else {
//     Have a good day
// }



var ch = true



var cheked = document.querySelector(".cheked");
var nav = document.getElementById("nav");
var invert =document.getElementById("invert")

cheked.addEventListener("click", function(){
    
    document.body.classList.toggle("darkBody");
    filter.value = ""
    
   
    
    ch = !ch;
    
//    console.log(ch)
    
    
    if(ch === false){
        
        invert.innerHTML="Gramos"
        
      cardCont.innerHTML = "";  
 for (i in Tornillos) {

     //        console.log(Tornillos[i].nombre)
     //        console.log(Tornillos[i].peso)

     var li = document.createElement("li")
     li.setAttribute("onclick",

         `   
                swal({
title: "Gramos:", 
                       
                      content: {
                        element: "input",
                        attributes: {
                        type: "number",
                        },
                        },

                })
                .then((value) => {

                    swal(value + " gr son " + Math.round(value / ${Tornillos[i].peso}) + " Tornillos  ${Tornillos[i].nombre}");


                    list.push(value + " gr son " + Math.round(value / ${Tornillos[i].peso}) + " Tornillos  ${Tornillos[i].nombre}");
                    
                });`

     )


     var p = document.createElement("p")
     var img = document.createElement("img")
     img.setAttribute("src", Tornillos[i].urlImg)
     var text = document.createTextNode(Tornillos[i].nombre)

     li.classList.add("card")

     p.appendChild(text)
     li.appendChild(img)
     li.appendChild(p)
     cardCont.appendChild(li)


     //            console.log(Tornillos[i].nombre)
 }
        
        var cards = document.querySelectorAll(".card")
 var p = document.querySelectorAll("p")
 //        console.log(cards)

 filter.addEventListener("keyup", function (e) {


     for (i = 0; i < cards.length; i++) {
         if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
             cards[i].classList.remove("none")
         } else {
             cards[i].classList.add("none")
         }
     }

     if (filter.value !== "") {
         iconSearch.classList.add("fa-times")
         iconSearch.classList.remove("fa-search")

         iSearch.addEventListener("click", function () {

             filter.value = ""
             for (i = 0; i < cards.length; i++) {
                 cards[i].classList.remove("none")

             }
             iconSearch.classList.add("fa-search")
             iconSearch.classList.remove("fa-times")

         })


     } else {
         iconSearch.classList.add("fa-search")
         iconSearch.classList.remove("fa-times")
     }

 })


        
    }
    
    if(ch === true){
        
        invert.innerHTML="Cantidad"
      cardCont.innerHTML = "";  
 for (i in Tornillos) {

     //        console.log(Tornillos[i].nombre)
     //        console.log(Tornillos[i].peso)

     var li = document.createElement("li")
     li.setAttribute("onclick",

         `   
                swal({
title: "Cantidad:", 
                       
                      content: {
                        element: "input",
                        attributes: {
                        type: "number",
                        },
                        },

                })
                .then((value) => {
                    swal(value + " ${Tornillos[i].nombre} son: " + Math.round(value * ${Tornillos[i].peso}) + " gr");

                    list.push(value + " ${Tornillos[i].nombre} son: " + Math.round(value * ${Tornillos[i].peso}) + " gr");

                    
                });`

     )


     var p = document.createElement("p")
     var img = document.createElement("img")
     img.setAttribute("src", Tornillos[i].urlImg)
     var text = document.createTextNode(Tornillos[i].nombre)

     li.classList.add("card")

     p.appendChild(text)
     li.appendChild(img)
     li.appendChild(p)
     cardCont.appendChild(li)


     //            console.log(Tornillos[i].nombre)
 }
        var cards = document.querySelectorAll(".card")
 var p = document.querySelectorAll("p")
 //        console.log(cards)

 filter.addEventListener("keyup", function (e) {


     for (i = 0; i < cards.length; i++) {
         if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
             cards[i].classList.remove("none")
         } else {
             cards[i].classList.add("none")
         }
     }

     if (filter.value !== "") {
         iconSearch.classList.add("fa-times")
         iconSearch.classList.remove("fa-search")

         iSearch.addEventListener("click", function () {

             filter.value = ""
             for (i = 0; i < cards.length; i++) {
                 cards[i].classList.remove("none")

             }
             iconSearch.classList.add("fa-search")
             iconSearch.classList.remove("fa-times")

         })


     } else {
         iconSearch.classList.add("fa-search")
         iconSearch.classList.remove("fa-times")
     }

 })


        
    }
    
    
    
        
})



