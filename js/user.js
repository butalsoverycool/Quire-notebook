/*
* USER
***********/
(() => { // Runs directly in local scope
    // show welcome popup?
    const popup = document.querySelector(".popup");
    const visited = isStored('myNotes'); // Check if first time user (previously stored notes)
    const blur = document.querySelector(".blur");
    //
    const welcome = () => {
        if (!visited) {
            popup.classList.remove("hidden");
            blur.classList.remove("hidden");
        }
    }
    welcome();
})(); // local scope