let container = null;
let canvas = null;

function initCanvas() {
    document.body.style.margin = "0";

    container = document.createElement("div");
    container.id = "container";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.width = "100vw";
    container.style.height = "100vh";
    document.body.appendChild(container);

    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.style.display = "block";
    container.appendChild(canvas);

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
    if (container.clientHeight < container.clientWidth) {
        canvas.style.height = container.clientHeight.toString() + "px";
        canvas.style.width = canvas.style.height;
    } else {
        canvas.style.width = container.clientWidth.toString() + "px";
        canvas.style.height = canvas.style.width;
    }

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

export { initCanvas };
