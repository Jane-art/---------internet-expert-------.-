// 1 меню
document.getElementById('CatalogID').addEventListener("mouseenter", showSub, false);
document.getElementById('CatalogID').addEventListener("mouseleave", hideSub, false);

function showSub(e){
    console.log("try to show CatalogID")
    if (!document.getElementById('popupMenuID').classList.contains("show")) {
        document.getElementById('popupMenuID').classList.toggle("show")
    }
}
function hideSub(e){
    console.log("try to leave CatalogID")
    if (document.getElementById('popupMenuID').classList.contains("show")) {
        document.getElementById('popupMenuID').classList.toggle("show")
    }
    if (document.getElementById('popupMenuIDSecond').classList.contains("show")) {
        document.getElementById('popupMenuIDSecond').classList.toggle("show")
    }
}

//2 меню
document.getElementById('subCatalogID').addEventListener("mouseenter", showSubCat, false);
document.getElementById('subCatalogID').addEventListener("mouseleave", hideSubCat, false);


function showSubCat(e){
    if (!document.getElementById('popupMenuIDSecond').classList.contains("show")) {
        document.getElementById('popupMenuIDSecond').classList.toggle("show")
    }
}
function hideSubCat(e){
    if (document.getElementById('popupMenuIDSecond').classList.contains("show")) {
        document.getElementById('popupMenuIDSecond').classList.toggle("show")
    }
}

//меню карточки
document.getElementById('CartID').addEventListener("mouseenter", showCart, false);
document.getElementById('CartID').addEventListener("mouseleave", hideCart, false);

function showCart(e){
    if (!document.getElementById('popupMenuIDThird').classList.contains("show")) {
        document.getElementById('popupMenuIDThird').classList.toggle("show")
    }
}
function hideCart(e){
    if (document.getElementById('popupMenuIDThird').classList.contains("show")) {
        document.getElementById('popupMenuIDThird').classList.toggle("show")
    }
}


// /* Когда пользователь кликает на кнопку переключает видимость у класса myDropdown  */
// function toggleVisibility() {
//   document.getElementById("myDropdown").classList.toggle("show");
//   if (!document.getElementById("myDropdown").classList.contains('show')){
//     removeHighlight();
//     removeRightHighlight();
//   }
// }

// // Закрывает список если пользователь нажал вне его

// window.addEventListener("click", function(e) {
//   // Если то куда нажали не dropdown-button, main-button, btn то закрываем элемент удаляя класс show
//   if (!e.target.matches('.dropdown-button') && !e.target.matches('.main-button') && !e.target.matches('.btn') ) {
//     let myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//         removeHighlight();
//         removeRightHighlight();
//       }
//   } 
// });
// //ищем все классы active и удаляем их 
// //предполагаем что такой класс один но удаляем все
// function removeHighlight(){
//   let activeShow= document.getElementsByClassName("active");
//   for (let i = 0; i < activeShow.length; i++){
//     activeShow[i].className = activeShow[i].className.replace(" active", "");
//   }
// }
// //тоже самое что и у предыдущего но для rightActive класса
// function removeRightHighlight(){
//   let rightActiveShow= document.getElementsByClassName("rightActive");
//   for (let i = 0; i < rightActiveShow.length; i++){
//     rightActiveShow[i].className = rightActiveShow[i].className.replace(" rightActive", "");
//   }
// }

// // Закрывает все списки при нажатии на dropdown-button(Каталог товаров) если они были открыты
// window.addEventListener("click",  function(event) {
//   if (event.target.matches('.dropdown-button')) {
//     //ищем dropRight-content класс
//     let dropRight = document.getElementsByClassName("dropRight-content");
//     for (let i = 0; i < dropRight.length; i++) {
//       let openDropdown = dropRight[i];
//       if (openDropdown.classList.contains('show')) {
//         //если нашли класс show то удаляем
//         openDropdown.classList.remove('show');
//       }
//     }

//     let newLink = document.getElementsByClassName("newLink");
//     for (let i = 0; i < newLink.length; i++) {
//       let openDropdown = newLink[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// });

// //ищем кнопки первого списка
// let mainButtons = document.getElementsByClassName("main-button");
// for (let i = 0; i < mainButtons.length; i++) {
//   //добавляем кнопкам обработчики по нажатию на них
//   mainButtons[i].addEventListener("click", function(e) {
//     //ищем класс active
//     let current = document.getElementsByClassName("active");
//     try{
//       // если такой класс есть то удаляем его чтобы снять выделение кнопки
//       //при первом нажатии класса нет , метод кидает пустое исключение
//       current[0].className = current[0].className.replace(" active", "");
//     } catch {

//     }
    
//     try {
//       if (e.target.matches('.drop')){
//         //включаем новый список по нажатию на кнопку с классом .drop
//         document.getElementById("mySecondDrop").classList.toggle("show");
//       } else {
//         //или закрываем все правые меню
//         document.getElementById("mySecondDrop").classList.remove("show");
//         document.getElementById("mySecondDropRight").classList.remove("show")
//       }
//       removeRightHighlight();
//     } finally{
//       //подсвечиваем нажатую кнопку
//       this.className += " active";
//     }  
  
//   });
// }

// // по аналогии с предыдущим обработчиком для второго правого списка
// let rightButtons = document.getElementsByClassName("btn");
// for (let i = 0; i < rightButtons.length; i++) {
//   rightButtons[i].addEventListener("click", function(e) {
//     let current = document.getElementsByClassName("rightActive");
//     try{
//       current[0].className = current[0].className.replace(" rightActive", "");
//     } 
//     catch {

//     }

//     try {
//       if (e.target.matches('.second-drop')){
//         document.getElementById("mySecondDropRight").classList.toggle("show");
//       } else {
//         document.getElementById("mySecondDropRight").classList.remove("show");
//       }
//       removeRightHighlight();
//     } finally{
//       this.className += " rightActive";
//     }  
//   });
// }
