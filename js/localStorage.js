/*
* LOCAL STORAGE 
*****************/

// Structure: [{}, ...{}]

// Check if stored in L-storage
const isStored = (key = 'myNotes') => localStorage.getItem(key) ? true : false;

// Get from L-storage
const getStored = (key = 'myNotes') => JSON.parse(localStorage.getItem(key));

// Write to L-storage
const store = (key = 'myNotes', value) => {
    if (value == 'undefined' || value == null || value == '' || typeof value != 'object') {
        console.log('Will not store data that is undefined, null nor an object/array.');
        return;
    }
    // If first, create empty arr
    if (!isStored(key)) {
        localStorage.setItem('myNotes', JSON.stringify([]));
    }
    //
    localStorage.setItem(key, JSON.stringify(value));
}

// Clear storage and empty editor (dev function)
const clearStorage = () => {
    localStorage.removeItem('myNotes');
    displayMsg('All notes deleted!');
    return '';
}
