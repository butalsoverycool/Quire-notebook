let notes = [];
let popup = document.querySelector(".popup");

var visited = false;

//visited is based on localstorage data (change later)
visited = (() => {
    const note = localStorage.getItem('note');
    if(note !== '' && note != 'undefined' && note != null) {
        console.log('Local storage contains a saved note.');
        return true;
    }else{
        console.log('No notes exist in local storage.');
        return false;
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    
    //let visited = localStorage.getItem("visited");
    if (!visited) {
        popup.classList.remove("hidden");
        //localStorage.setItem("visited","1")
    } //else if (visited) {
        //popup.classList.add("hidden");
    //}
    
});

// (we need to position this as low as possible in global scope)
// (maybe move functional blocks to their on event-handler-functions? )
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

function firstTimeVisit(){
    //visited = true;
  
    
}

function save() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function load() {
    let retrievedData = localStorage.getItem("notes");
    notes = JSON.parse(retrievedData);
    if (!notes) {
        notes = [];
    }
    let visitedData = localStorage.getItem("visited")
    let visited = JSON.parse(visitedData);
}