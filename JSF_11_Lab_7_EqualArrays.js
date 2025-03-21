function equalArrays(arr1, arr2){
    let sum = 0;
    let identical = true;
    for(let i = 0; i < arr1.length; i++){
        sum += Number(arr1[i]);
        if(arr1[i] !== arr2[i]){
            identical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if(identical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']) 
//Arrays are identical. Sum: 60
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']) 
//Arrays are not identical. Found difference at 2 index
equalArrays(['1'], ['10']) 
//Arrays are not identical. Found difference at 0 index