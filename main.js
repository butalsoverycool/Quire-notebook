let notes = [];
let popup = document.querySelector(".popup");
let visited = false;

window.addEventListener('DOMContentLoaded', () => {
    //load();
    if (visited = false) {
        popup.classList.remove("hidden");
    }
});

document.addEventListener("click", function (e){
    if(e.target.classList.contains("submit")){
        
        let visited = true;

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
    localStorage.setItem("visited", JSON.stringify(visited))
}

function load() {
    let retrievedData = localStorage.getItem("notes");
    notes = JSON.parse(retrievedData);
    if (!notes) {
        notes = [];
    }
}