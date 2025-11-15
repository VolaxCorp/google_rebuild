

function searchresult() {
    const searchResult = document.getElementById("searchq")
    searchq = searchResult.value.toLowerCase();
    searchq= searchq.replace(/\s+/g, "+")
    console.log("https://www.google.com/search?q="+searchq);
    top.location.href = 'https://www.google.com/search?q='+searchq;
    return searchq;
}

searchq.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        searchresult();
    }
})
