// DOCUMENT CLICK-LISTENER
/*

const blur = document.querySelector(".blur");
const popup = document.querySelector(".popup");

document.addEventListener("click", function (e) {
    // close welcome popup?
    if (e.target.classList.contains("exit")) {
        popup.classList.add("hidden");
        blur.classList.add("hidden");
    }

    // nav?
    const subnav = document.querySelector('#side-subnav');
    if (e.target.parentElement.classList.contains('button-sidebar')) {
        openSubnav(e);
        // if not nav/subnav, but subnav is open, close subnav
    } else if (e.target !== subnav && !subnav.contains(e.target)) {
        if (this.querySelector('#side-subnav').dataset.open) {
            closeSubnav();
        }
    }
    // subnav closebtn?
    if (e.target.classList.contains('closebtn') && e.target.parentElement.id == 'side-subnav') {
        closeSubnav();
    }

    // load note? (make this smarter?)
    if (e.target.classList.contains('note') && e.target.dataset.id) {
        loadNote(e.target.dataset.id);
    } else if (e.target.parentElement.classList.contains('note') && e.target.parentElement.dataset.id) {
        loadNote(e.target.parentElement.dataset.id);
    } else if (e.target.parentElement.parentElement.classList.contains('note') && e.target.parentElement.parentElement.dataset.id) {
        loadNote(e.target.parentElement.parentElement.dataset.id);
    }

    // clear storage? (dev func)
    if (e.target.id == 'clearStorage') {
        clearStorage();
        displayMsg('Storage cleared!');
    }
    console.log(e);
});

*/