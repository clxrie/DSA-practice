function decode(str){
    const result = [];
    let i = 0;

    while (i< str.length){
        j = i;
        while(j !== "#"){
            j++;
        }

        const len = Number(str.slice(i, j));
        const word = str.slice (j+1, j+1 + len);

        result.push(word);
        i = j + 1 + len;
    }

    return result;
}