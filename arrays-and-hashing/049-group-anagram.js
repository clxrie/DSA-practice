function groupAnagrams(strs){
    const map = {};

    for(let word of strs){
        const label = word.split("").sort().join("");

        if(!map[label]){
            map[label] = [];
        }
        map[label].push(word);
    }
    return Object.values(map);
}

