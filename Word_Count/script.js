let myText = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.getElementById("count-result").textContent = `Total characters: ${count}`;
    let str = (myText.value);
    let spaces1 = str.split(' ').length - 1;
    document.getElementById("word-count").textContent = `Total words: ${spaces1}`;
});