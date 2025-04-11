window.addEventListener("load", function () {
    // const user = JSON.parse(localStorage.getItem("user"));
    const user = null;
    if (user === null) {
        console.log(window.location.href);
        window.location.href = "/pages/login.html";
    }
});