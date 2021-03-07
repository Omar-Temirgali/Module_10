const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let width1 = document.documentElement.clientWidth;
    let height1 = document.documentElement.clientHeight;
    let result = "Width: " + width + ", " + "height: " + height;
    let result1 = "\nWidth1: " + width1 + ", " + "height1: " + height1;
    alert(result + result1);
})