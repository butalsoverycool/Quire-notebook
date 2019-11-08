let theme = document.querySelector("*");
let lightmode = document.getElementById("lightmode");
let darkmode = document.getElementById("darkmode");
let nightmode = document.getElementById("nightmode");

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("lightmode")){
        theme.className = "";
        console.log("pressed");
    }

    if (e.target.classList.contains("darkmode")){
        theme.className = "";
        theme.classList.add("darkModeTheme");
    }

    if (e.target.classList.contains("nattläge")) {
        theme.className = "";
        theme.classList.add("nightModeTheme");
    }

});

function postInitWork()
{
  var editor = tinyMCE.getInstanceById('editorContainer');
  editor.getBody().style.backgroundColor = "#000";
}

