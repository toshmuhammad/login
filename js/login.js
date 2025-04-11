window.addEventListener("load", function () {
    // const user = JSON.parse(localStorage.getItem("user"));
    const user = null;

    if (user) {
        window.location.href = "/index.html";
    }
});

const elForm = document.getElementById("form");

elForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new formData(e.target);

    const result = {}
    for (const [key, value] of formData.entries()) {
        result[key] = value;
    }
    
    console.log(result);
})