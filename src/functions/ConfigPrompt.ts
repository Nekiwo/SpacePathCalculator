// Async function to prompt the user the config options, you may change this into whatever
export var ConfigPrompt = async (): Promise<void> => {
    const result: any = {};
    result.planet = prompt("Choose planet to go to from 1 to 9");
    return Promise.resolve(result);
}