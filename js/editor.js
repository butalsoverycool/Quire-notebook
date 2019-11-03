/*
* TINY MCE EDITOR
*********************/
// Just a quick demo with save/load through localStorage, 
// next step is to explore if the Tiny Mce's functionality is enough for this app.

// note currently edited
let activeId = false;

(() => { // (runs directly in local scope)
    // always clear local storage notes at refresh (dev temp)
    //localStorage.removeItem('myNotes');

    // ON CHANGE (in editor)
    const onChange = (e) => {
        // clear user msg
        displayMsg('');

        // update or save as new
        let saveAs = false;
        if (e.originalEvent) {
            if (e.originalEvent.command == "mceNewDocument") {
                saveAs = true;
            }
        }
        saveNote(saveAs);
    }

    // INITIALIZE EDITOR
    tinymce.init({
        selector: '#noteEditor',
        height: '50%',
        plugins: 'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'save | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | insertfile image media template link anchor codesample | ltr rtl',
        init_instance_callback: function (editor) {
            // editor events
            editor.on('Change', function (e) {
                onChange(e);
            });
            editor.on('focus', function (e) {
                if (document.querySelector('#side-subnav').dataset.open) {
                    closeSubnav();
                }
            });

        },
        save_onsavecallback: () => saveNote()
    });


})(); // local scope