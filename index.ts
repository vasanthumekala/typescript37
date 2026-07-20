function anagrams(str1: string,str2: string): void {
    const convertCase1 = str1.toLowerCase().split("").sort().join("");
    const convertCase2 = str2.toLowerCase().split("").sort().join("");
    console.log(convertCase1 == convertCase2);
}

anagrams("listen","silent");

//anagrams("listen","silent");
//define a function that takes two strings as input and checks if they are anagrams of each other. The function should ignore case and whitespace, and return true if they are anagrams, and false otherwise.   