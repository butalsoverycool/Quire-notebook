/*
* TINY MCE EDITOR
*********************/

// Just a quick demo with save/load through localStorage, 
// next step is to explore if the Tiny Mce's functionality is enough for this app.


// INIT EDITOR
tinymce.init({
    selector: '#noteEditor',
    height: '50%',
    plugins: 'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'save | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | insertfile image media template link anchor codesample | ltr rtl',
    init_instance_callback: function (editor) { 
        editor.on('Change', function (e) { // on changes in editor
            document.querySelector('#editorMsg').innerHTML = '';
        });
    },
    save_onsavecallback: function () { 
        localStorage.setItem( 'note', tinymce.activeEditor.getContent() );
        document.querySelector('#editorMsg').innerHTML = 'Note saved!';
    }
});


// LOAD NOTE
const loadNote = () => {
    // if local storage is empty
    if( !localStorage.getItem('note') ) {
        document.querySelector('#editorMsg').innerHTML = 'You don\'t have any notes to load.';
        return tinymce.activeEditor.getContent();
    }
    document.querySelector('#editorMsg').innerHTML = 'Note loaded from local storage.';
    return localStorage.getItem('note');
}


// CLEAR NOTE AND LOCAL STORAGE (temporary demo function)
const clearStorage = () => {
    localStorage.removeItem('note');
    document.querySelector('#editorMsg').innerHTML = 'All notes deleted!';
    return '';
}


// EVENT HANDLERS

// LOAD
// (make peace with global event-listener in main.js down the road...)
document.querySelector('#loadNote').onclick = function() {
    tinymce.activeEditor.setContent( loadNote() );
}

// CLEAR STORAGE
document.querySelector('#clearStorage').onclick = function() {
    tinymce.activeEditor.setContent( clearStorage() );
}

