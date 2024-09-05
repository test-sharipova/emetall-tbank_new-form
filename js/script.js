//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '0(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//modal thanks
$('.t-modal__close').on('click', function(){
    $('.t-modal__thanks, .overlay').fadeOut();
});