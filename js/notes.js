/*
* NOTES
********************/

// CLASS
class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.id = Date.now();
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
    if (asNew || !activeId) {
        updated = new Note('Some title', tinymce.activeEditor.getContent());
    } else {
        updated = {
            title: 'Some title',
            content: tinymce.activeEditor.getContent(),
            id: activeId
        }
    }

    // If id exists in storage, overwrite orig with updated. 
    let orig = notes.find(item => item.id == activeId) || false;
    if (orig) {
        notes.splice(notes.indexOf(orig), 1, updated);
    } else {
        // Otherwhise, add updated as new.
        notes.push(updated);
    }

    // save to my notes-arr
    store('myNotes', notes);

    displayMsg('Note saved!');
}
