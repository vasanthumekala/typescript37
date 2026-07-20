"use strict";
function anagrams(str1, str2) {
    const convertCase1 = str1.toLowerCase().split("").sort().join("");
    const convertCase2 = str2.toLowerCase().split("").sort().join("");
    console.log(convertCase1 == convertCase2);
}
anagrams("listen", "silent");
//anagrams("listen","silent");
