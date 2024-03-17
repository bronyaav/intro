const sidebar = document.querySelector(`.sidebar`);
const open = document.querySelector(`.menu`);
const close = document.querySelector(`.close`);
const dim = document.querySelector(`.dark-bg`);
const list = document.querySelector(`.drop-li`);
const listt = document.querySelector(`.drop-list`);
const listClick = document.querySelector(`.list-click`);
const listClickk = document.querySelector(`.list-clickk`);

open.addEventListener(`click`, () => {
    sidebar.classList.add(`open`);
    dim.classList.add(`dimmer`);
});

close.addEventListener(`click`, () => {
    sidebar.classList.remove(`open`);
    dim.classList.remove(`dimmer`)
});

listClick.addEventListener(`click`, () => {
    if (list.classList.contains(`opened`)) {
        list.classList.remove(`opened`)
    } else {
        list.classList.add(`opened`);
    }
});

listClickk.addEventListener(`click`, () => {
    if (listt.classList.contains(`opened`)) {
        listt.classList.remove(`opened`)
    } else {
        listt.classList.add(`opened`);
    }
});