const palindromes = function (string) {
    const alphanumericals = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumericals.includes(character))
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return reversedString === cleanedString;

};
    

// Do not edit below this line
module.exports = palindromes;
