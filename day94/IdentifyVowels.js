let inputStr = 'Suyan'
const vowels = ['a', 'e', 'i' , 'o', 'u']
let ans;

const identifyVowel = (str) => {
    // let count = 0;
    let arr = []
    for( let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            // count++
            arr.push(letter)
        }
    }
    return arr
}

ans = identifyVowel(inputStr);
console.log(`The vowels present in given string ${inputStr} is ${ans} and its count is ${ans.length}`)

// simply yo chahi arko OR lagaudai janu vanda approach vanda wiser approach vannu paryo
// lowercase maa matra herna lai toLowerCase lagyem
// ani vowels vanni paila kai array maa yedi xa leyyer xa vane tyo letter lai arr vanni array maa push garyo
// finally arr ra tesko count return garyo