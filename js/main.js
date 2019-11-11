/*
* Main file
***********/

/*
* QUILL EDITOR
*********************/

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    ,  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme,
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  

//INITIALIZE EDITOR
var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'

  });

/*
* Note list
***********/

let noteList = [];


/* 
* Buttons
***********/
let saveNoteBtn = document.getElementById('save-note');
let deleteNotebtn = document.getElementById('delete-note'); 
let loadNotebtn = document.getElementById('load-note');

function saveNote(){

    let noteObj = {
    favorite: false,
    text: quill.getContents(),
    id: Date.now(),
    title: document.getElementById("title-input").value,
}

function deleteNote(){
    quill.deleteText(0, 999);
}

function loadNote() {
    
}

noteList.push(noteObj);
save();
}

saveNoteBtn.addEventListener("click", saveNote);
loadNotebtn.addEventListener("click", loadNote);
deleteNotebtn.addEventListener("click", deleteNote);


/* 
* Save function
***********/

function save() {
    localStorage.setItem("noteList", JSON.stringify(noteList));
}

function load() {
    let noteListString = localStorage.getItem("notelist");
    let notelist = JSON.parse(noteListString);
    if (!notelist){
        notelist = [];
    }
}


/*
* Popup 
***********/

(() => { // Runs directly in local scope
    // show welcome popup?
    const popup = document.querySelector(".popup");
    const blur = document.querySelector(".blur");
    const visited = isStored('myNotes'); // Check if first time user (previously stored notes)
    //
    const welcome = () => {
        if (!visited) {
            popup.classList.remove("hidden");
            blur.classList.remove("hidden");
        }
    }
    welcome();
})(); // local scope

