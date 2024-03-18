let btn = document.getElementById("color")


btn.addEventListener("change", () => {
    console.log(btn.value)
    document.body.style.backgroundColor = btn.value;
})