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

    const allNotes = () => {
        // get stored notes and print list
        let notes = getStored('myNotes') || [];

        // sort notes by updated last
        notes.sort((a, b) => a.lastUpdated > b.lastUpdated ? -1 : 1);

        // put formated notes in arr
        let htmlArr = [];
        for (let x = 0; x < notes.length; x++) {
            let content =
                `<li class="item note" data-id="${notes[x].id}" data-created="" data-lastUpdated="">
                <h4 class="itemTitle">${notes[x].title}</h4>
                <div class="itemContent">${notes[x].content}</div>
                <div class="meta">
                    <p class="lastUpdated">updated <span>${notes[x].lastUpdated}</span></p>
                    <p class="created">created <span>${notes[x].created}</span></p>
                </div>
            </li>`;
            htmlArr.push(content);
        }

        // make html-str
        let htmlStr = '';
        htmlArr.forEach((el, i) => {
            htmlStr += el;
        });

        // print note-list
        document.querySelector('#side-subnav .body .content').innerHTML =
            `<ul class="noteList">
            ${htmlStr}
        </ul>`;

        // create excerpt
        const listItems = document.querySelectorAll('.itemContent');
        listItems.forEach(function (content, index) {
            console.log(content.childNodes[3], index);
            let excerpt = content.childNodes[3].innerHTML.substring(0, 25) + '...';
            content.childNodes[3].innerHTML = excerpt;
        });
    }

    // return if not on "all notes" /temp***
    if (title === 'all') {
        allNotes()
    } else { // temp*
        document.querySelector('#side-subnav .body .content').innerHTML = '';
        return;
    }


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