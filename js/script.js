var item = document.getElementsByClassName("item")
var special = document.getElementsByClassName("special-card")
var reserve1 = document.getElementsByClassName("reservation1")[0]
var reserve2 = document.getElementsByClassName("reservation2")[0]
console.log(reserve1)
window.onscroll = function () {
    if (scrollY > 1150) {
        item[0].style.animation = "fadeInUpItem 1s forwards"
        item[1].style.animation = "fadeInUpItem 1s 0.2s forwards"
        item[2].style.animation = "fadeInUpItem 1s 0.4s forwards"
    }
    if (scrollY > 250) {
        special[1].style.animation = "fadeInSpecial1 0.8s 0.2s forwards"
        special[2].style.animation = "fadeInSpecial2 0.8s 0.2s forwards"
    }
    if (scrollY > 2515) {
        reserve1.style.animation = "fadeInReserve1 3s  forwards"
        reserve2.style.animation = "fadeInReserve2 3s forwards"
    }
}
