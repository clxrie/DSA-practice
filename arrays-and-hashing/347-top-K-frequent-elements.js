function topKfrequent(nums, k){
    const count = {};
    for(let n of nums){
        count[n] = (count[n] || 0) + 1;
    }

    const shelves = [];
    for(let i =0; i <= nums.length; i++){
        shelves.push([]);
    }

    for(let num in count){
        const freq = count[num];
        shelves[freq].push(num);
    }

    const result = [];
    for(let i = shelves.length - 1; i >= 0; i--){
        for(let num of shelves[i]){
            result.push(num);
            if(result.length === k){
                return result;
            }
        }
    }

}