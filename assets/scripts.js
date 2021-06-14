const fillArray = () => {
    const a = [];

    for(let i = 0; i < 500000; i++) {
        a.push(Date.now());
    }
}

document.querySelector('.js-start-calculation').addEventListener('click', () => {
    fillArray();
});

document.querySelector('body').addEventListener('mousemove', () => {
    fillArray();
});