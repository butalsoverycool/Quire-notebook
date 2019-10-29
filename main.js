let notes = [];
let popup = document.querySelector(".popup");

window.addEventListener('DOMContentLoaded', () => {
    //load();
    if (notes === undefined || notes.length == 0) {
        popup.classList.remove("hidden");
    }
});

document.addEventListener("click", function (e){
    if(e.target.classList.contains("submit")){
        
        let noteTitle = document.querySelector("#noteTitle").value;
        let noteText = document.querySelector("#noteText").value;
        
        let note = {
            noteTitle,
            noteText
        };
        notes.push(note);
        for (i = 0; i < notes.length; i++){
            console.log(notes[i]);
        }
    }
    if (e.target.classList.contains("exit")){
        popup.classList.add("hidden");
    }
});

function save() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function load() {
    let retrievedData = localStorage.getItem("notes");
    notes = JSON.parse(retrievedData);
    if (!notes) {
        notes = [];
    }
}