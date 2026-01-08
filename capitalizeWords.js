function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalizedWords = [];
    for (let word of words) {
        capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
    return capitalizedWords;
}
console.log(capitalizeWords("hello world from javascript"));