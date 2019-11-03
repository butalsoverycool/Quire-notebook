/*
* INTERACTION
*************'''''*/

// Display user msg
const displayMsg = (msg, selector = '#editorMsg') => {
    document.querySelector(selector).innerHTML = msg;
}

// NAVBAR
// Get wanted content
const subnavContent = (title) => {
    // set subnav title
    document.querySelector('#side-subnav .body .title').innerHTML = title;
    //
    // return if not on "all notes" /temp***
    if (title !== 'all') {
        document.querySelector('#side-subnav .body .content').innerHTML = '';
        return;
    }
    //
    // get stored notes and print list
    let notes = getStored('myNotes') || [];
    let html = '';
    for (let x = 0; x < notes.length; x++) {
        html +=
            `<li class="item note" data-id="${notes[x].id}" data-created="" data-lastUpdated="">
                <h4 class="itemTitle">${notes[x].title}</h4>
                <p class="itemContent">${notes[x].content}</p>
            </li>`;
    }
    //
    document.querySelector('#side-subnav .body .content').innerHTML =
        `<ul class="noteList">
            ${html}
        </ul>`;
}

// Display subnav
const openSubnav = (e) => {
    subnavContent(e.target.parentElement.dataset.title);
    //
    const subnav = document.querySelector("#side-subnav");
    subnav.style.width = "250px";
    subnav.dataset.open = true;
}

// Hide subnav
const closeSubnav = () => {
    const subnav = document.querySelector("#side-subnav");
    subnav.style.width = "0";
    subnav.dataset.open = false;
}