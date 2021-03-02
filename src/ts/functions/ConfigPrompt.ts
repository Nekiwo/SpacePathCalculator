// Async function to prompt the user the config options, you may change this into whatever
export var ConfigPrompt = new Promise((resolve) => {
    const result: any = {};
    result.planet = prompt("Choose planet to go to from 1 to 9");
    result.type = prompt("type 0 if you want to go to the planet now, or type 1 if you can wait until the planets align perfectly");
    resolve(result);
});