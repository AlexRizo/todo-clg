import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea',
            },
            {
                value: '2',
                name: '2. Listar tareas',
            },
            {
                value: '3',
                name: '3. Listar tareas completadas',
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes',
            },
            {
                value: '5',
                name: '5. Completar tarea(s)',
            },
            {
                value: '6',
                name: '6. Borrar tarea',
            },
            {
                value: '0',
                name: '0. Salir',
            },
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Selecciona una Opción:  '.bgWhite.black);
    console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const pausar = [
        {
            type: 'input',
            name: 'pausar',
            message: `\nPresiona ${'ENTER'.green} para continuar`,
        }
    ];
    await inquirer.prompt(pausar);
}

export {
    inquirerMenu,
    pausa,
}
