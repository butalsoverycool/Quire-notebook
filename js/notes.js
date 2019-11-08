/*
* NOTES
***********/
// data model local storage:
/*
quire: {
    notes: [{note},{}],
    currentNote: 459834759837,
    settings: {
        darkomdoe: false
    }
}

note = {
    id: 545435435345,
    content: Delta (getContents),
    favourite: false,
    deleted: false
}
*/
// CLASS
class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.id = Date.now();
        this.created = printFullDate();
        this.lastUpdated = printFullDate();

        // set global var active id to this
        activeId = this.id;
    }
}



// Load specific note
const loadNote = (id, key = 'myNotes') => {
    // if local storage is empty, display msg
    if (getStored('myNotes').length < 1) {
        displayMsg('You don\'t have any notes to load.');
        return;
    }
    //
    let notes = getStored(key); // all notes-arr
    let note = notes.find(item => item.id == id) || false;
    if (note) {
        activeId = note.id;
        tinymce.activeEditor.setContent(note.content);
        displayMsg('Note loaded from local storage');
    };
}

// Get note title
const getTitle = () => {
    
    const doc = document.getElementById("title-input").getContent;
    return doc;
    /*// editor doc-html 
    const doc = tinymce.activeEditor.getContent();

    // return innerHTML of the first tag inside doc-<body>
    // i.e. the note-title 
    const start = (nthIndex(doc, '>', 6)) + 1;
    const end = nthIndex(doc, '<', 7);
    return doc.substring(start, end);*/
}

// Save currently edited note
const saveNote = (asNew = false) => {
    // if !Local storage
    if (localStorage === 'undefined') {
        displayMsg('Note could not be saved :( <br/> (Local storage unavailable)');
        return;
    }

    // get notes from storage
    let notes = getStored('myNotes') || [];

    // create new note or use active id
    let updated;
    let title = getTitle() || 'Untitled';
    if (asNew || !activeId) {
        updated = new Note(title, quill.getContents());
    } else {
        updated = {
            title: title,
            content: quill.getContents(),
            id: activeId,
            created: printFullDate(),
            lastUpdated: printFullDate()
        }
    }

    // If id exists in storage, overwrite orig with updated. 
    let orig = notes.find(item => item.id == activeId) || false;
    if (orig) {
        updated.created = orig.created;
        notes.splice(notes.indexOf(orig), 1, updated);
    } else {
        // Otherwhise, add updated as new.
        notes.push(updated);
    }

    // save to my notes-arr
    store('myNotes', notes);

    displayMsg('Note saved!');
}
