let arr = [["ironman", "spideran", "thor"], ["suparman", "wonder woman", "flash"]];

for(let i=0; i<=arr.length; i++){
    console.log(i, arr[i], arr[i].length);
    for(let j=0; j<=arr[i].length; j++){
        console.log(`${j}, ${arr[i][j]}`);
    }
}