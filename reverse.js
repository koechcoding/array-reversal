function reverseArrayA(A) {

    let leftIndex = 0;
    let rightIndex = A.length - 1;
  
    while (leftIndex < rightIndex) {
  
    
      let temp = A[leftIndex];
      A[leftIndex] = A[rightIndex];
      A[rightIndex] = temp;
  
      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
  }
  let A = [10,5,6,9];
  reverseArrayA(A);
  
  console.log(A);