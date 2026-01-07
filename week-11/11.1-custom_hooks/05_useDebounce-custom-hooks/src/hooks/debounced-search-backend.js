let currentClock;

function searchBackend() {
    console.log("Request sent to backend");

    // fetch()
}

function debouncedSearchBackend() {
    clearTimeout(currentClock); // stops clock

    currentClock = setTimeout(searchBackend, 30); // start the clock again
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();  //only this will trigger backend call after 30ms