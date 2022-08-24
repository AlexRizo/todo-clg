import { inquirerMenu, pausa } from './helpers/inquirer.js';
import colors from 'colors';

console.clear();

const main = async() =>{
    console.log('Hello World');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});

        await pausa();

    } while (opt !== '0');

    // pausa();
}

main();