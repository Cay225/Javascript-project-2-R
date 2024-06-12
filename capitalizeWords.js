function capitalizeWords(inputSentence) {
    return inputSentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("bonjour je suis chris"));  // Output: "Bonjour Je Suis Chris"