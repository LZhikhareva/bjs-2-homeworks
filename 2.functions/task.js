function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length !== 0) {
    return sum = arr.reduce((acc, val) => acc + val, 0)
  } else {
    return 0;
  }

}

function differenceMaxMinWorker(...arr) {
  if (arr.length !== 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return diffence = max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length !== 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? sumEvenElement += arr[i] : sumOddElement += arr[i];
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}



function averageEvenElementsWorker(...arr) {
  if (arr.length !== 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {
  let arr = [...arrOfArr];
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;

    }
  }
  return maxWorkerResult;
}