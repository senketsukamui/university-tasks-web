let targetColor = "red";
const init = (() => {
    const N = 25;
    const wrapperElement = document.querySelector(".wrapper");

    [...Array(Math.pow(N, 2)).keys()].forEach(e => {
        wrapperElement.innerHTML += "<div class='hoverable'></div>";
    });
    document.querySelectorAll(".form-group [name = 'color']").forEach(checkbox => {
        checkbox.onclick = evt => {
            targetColor = checkbox.getAttribute("value");
        };
    });
    document.querySelectorAll(".hoverable").forEach(square => {
        square.onmouseover = evt => {
            evt.target.style.backgroundColor = targetColor;
        }
    })
})()