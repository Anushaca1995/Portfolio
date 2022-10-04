const scores=[50,20,10,9,23,52];


const getBigScore = (scores,threshold) =>{
for(let index=0;index<scores.length;index++){
    if (scores[index]>threshold){
        console.log(scores[index]+" is a big score");
    }
}
}
const getFirstAndLastItems = (toReverseArr) => {
    let newArray=[];
    for (let index=(toReverseArr.length)-1;index>=0;index--){
     console.log(index);
      newArray.push(toReverseArr[index]);
    
    }
    return newArray;
  };

getBigScore(scores,10);
getBigScore(scores,20);
getBigScore(scores,40);
getBigScore(scores,50);
const arr=[1,2,3,4,5];
console.log(getFirstAndLastItems(arr));