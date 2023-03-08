let array = [123, 87, 34, 75, 12, 91];

let isSwapped = false;

for(let i = 0; i<array.length; i++){
    for(j= 0; j<array.length-1; j++){
        if(array[j]<array[j+1]){
            let temp = array[j]
            array[j] = array[j+1];
            array[j+1] = temp;
            isSwapped = true;
        }
    }

    if(!isSwapped){
        break;
    }
}

console.log(array);

