const main = document.querySelector(".maincontent");
const notmain = document.querySelector(".notmain");

function practice(param){
    param.innerHTML = `<h1>Hello World</h1>`;
}

practice(main);

const morePractice = function(param){
    param.innerHTML = `<h1>Hello Again</h1>`;
}

practice(main);
morePractice(notmain);




