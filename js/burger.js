let doc = document

let burger = doc.querySelector('.burg_menu')

burger.addEventListener('click', () => {
    let modal = doc.querySelector('.modal')
    modal.classList.toggle('modal_pos')
    let div1 = document.querySelector('.top')
    let div2 = document.querySelector('.mid')
    let div3 = document.querySelector('.bot')

    div1.classList.toggle('top_active')
    div3.classList.toggle('bot_active')
    div2.classList.toggle('mid_active')
})