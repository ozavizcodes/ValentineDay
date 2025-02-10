const fetchLoveQuote = async () => {
    const response = await fetch("https://api.quotable.io/random?tags=love");
    const data = await response.json();
    console.log(data.content); // Love quote
};

fetchLoveQuote();
