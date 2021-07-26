const {performance} = require('perf_hooks');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("No of Doors: ", input => {
    const noOfDoors = parseInt(input);
    let openedDoors = [];
    let sqrtNoOfDoors = Math.ceil(noOfDoors ** 0.5);
    for (let i = 1; i <= sqrtNoOfDoors; i += 1)
        openedDoors.push(i * i);
    console.log("Opened Doors: ", openedDoors);
    readline.close();
});