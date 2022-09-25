// 1 меню
document.getElementById('CatalogID').addEventListener("mouseenter", showSub, false);
document.getElementById('CatalogID').addEventListener("mouseleave", hideSub, false);

function showSub(e){
    //console.log("try to show CatalogID")
    if (!document.getElementById('popupMenuID').classList.contains("show")) {
        document.getElementById('popupMenuID').classList.toggle("show")
    }
}
function hideSub(e){
    //console.log("try to leave CatalogID")
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



// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");

//         /* Toggle between hiding and showing the active panel */
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }
