const largeArray = Array.from({ length: 1000 }, (_, i) => i);

function sumUsingReduce(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function sumUsingForLoop(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumUsingForOfLoop(arr: number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function sumUsingForEach(arr: number[]) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

Deno.bench({
  name: "sumUsingReduce",
  baseline: true,
  fn: () => {
    sumUsingReduce(largeArray);
  },
});

Deno.bench({
  name: "sumUsingForLoop",
  fn: () => {
    sumUsingForLoop(largeArray);
  },
});

Deno.bench({
  name: "sumUsingForOfLoop",
  fn: () => {
    sumUsingForOfLoop(largeArray);
  },
});

Deno.bench({
  name: "sumUsingForEach",
  fn: () => {
    sumUsingForEach(largeArray);
  },
});
