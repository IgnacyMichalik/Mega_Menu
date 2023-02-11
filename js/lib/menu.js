export default () => {
    let first_parent = document.querySelectorAll(".first_parent");
    let secound_parent_a = document.querySelectorAll(".secound_parent_a");



    first_parent.forEach(function (first_parent_item){
        first_parent_item.addEventListener("click",function (){



            if(first_parent_item.classList.contains('active')){
                first_parent_item.classList.remove('active');
                secound_parent_a.forEach(function (secound_parent_a_item){
                    secound_parent_a_item.classList.remove('active');
                })
            }else{
                first_parent.forEach(function (first_parent_item) {
                    first_parent_item.classList.remove('active');
                })
                first_parent_item.classList.add('active');
            }
        })
    })





    secound_parent_a.forEach(function (secound_parent_a_item){
        secound_parent_a_item.addEventListener("click",function (){

            if(secound_parent_a_item.classList.contains('active')){
                secound_parent_a_item.classList.remove('active');
            }else{
                secound_parent_a.forEach(function (secound_parent_a_item) {
                    secound_parent_a_item.classList.remove('active');
                })
                secound_parent_a_item.classList.add('active');
            }
        })
    })

    const header = document.getElementById('header');
    const menu = document.querySelectorAll('.main .element')

    menu.forEach((element) =>{
        element.addEventListener('click', (event) =>{
            header.innerHTML = element.children[0].innerHTML.trim();

            event.preventDefault();
            return false;
        })
    })

};
