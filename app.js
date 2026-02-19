// let a7d=3, falak=3, nas=3, radet=3,asba7t=4,hasby=7,ydr=3,sob7an=3,afny=3,a3oz=3, hay=3, tamat=3,profit=10,no4rk=3,ham=3, kayom=3, yarb=3, la=100,b7mdh=100,ast8fr=100;

document.addEventListener("click", One);

function One(event) {
    clk = event.target;
    section = event.target.parentElement.parentElement;
    let i = 0;
    if (clk.tagName === "BUTTON") {
        i = clk.innerText;
        i--;
        clk.innerText = i;
        if (i === 0) {
            section.style.display = "none";
        }
    }
}
