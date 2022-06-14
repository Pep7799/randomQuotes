let tags = document.querySelector("#tags");
let text = document.querySelector("#text");
let author = document.querySelector("#author");
let next = document.querySelector("#next");

function randomQuote() {
fetch('https://api.quotable.io/random')
	.then(response => response.json())
	.then(data => {
        tags.textContent = data.tags;
        text.textContent = data.content;
        author.textContent=`-- ${data.author}`;
    });
}

randomQuote;

next.addEventListener("click", () => {
    randomQuote();
})


