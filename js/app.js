const menuItems = document.querySelectorAll('menu a');

menuItems.forEach(item=>{
    item.addEventListener('click', scrollToIdOnClick);

})

function scrollToIdOnClick(){

    console.log('clicou');
}
