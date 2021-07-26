const {performance} = require('perf_hooks');
const readline =require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const unoptimisedSolution = noOfDoors => {
    const START = performance.now();
    let doors = new Array(noOfDoors + 1).fill(0);
    let i, j;
    for (i = 1; i <= noOfDoors; i += 1)
        for (j = i; j <= noOfDoors; j += i)
            doors[j] = !doors[j];
    let openedDoors = [];
    for (i = 1; i <= noOfDoors; i += 1)
        if (doors[i])
            openedDoors.push(i)
    const STOP = performance.now();
    console.log(`Unoptimised Solution, Ans: ${JSON.stringify(openedDoors)}, Time: ${(STOP-START)/1000} seconds`);
};

const optimisedSolution = noOfDoors => {
    const START = performance.now();
    let openedDoors = [];
    const sqrtOfNoOfDoors = Math.ceil(noOfDoors ** 0.5);
    for (let i = 1; i <= sqrtOfNoOfDoors; i += 1)
        openedDoors.push(i * i);
    const STOP = performance.now();
    console.log(`Optimised Solution, Ans: ${JSON.stringify(openedDoors)}, Time: ${(STOP-START)/1000} seconds`);
};

readline.question("No of Doors: ", input => {
    let convertedInput = parseInt(input);
    unoptimisedSolution(convertedInput);
    optimisedSolution(convertedInput);
    readline.close();
});