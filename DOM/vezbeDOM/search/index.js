import generateTask from "./generateTask.js";

const tasks = [
    {
        taskName: 'POSO',
        priorityLevel: 6,
        taskImage: './images/9i78_d2fa_201217_ss4mp_generated-fotor-bg-remover-20230705221359.png'
    },

    {
        taskName: 'UCENJE',
        priorityLevel: 5,
        taskImage: './images/ksyp_en98_201002-fotor-bg-remover-20230705221431.png'
    },

    {
        taskName: 'TRENING',
        priorityLevel: 4,
        taskImage: './images/vecteezy_realistic-3d-plane-on-transparent-background_24592873-fotor-bg-remover-20230705221522.png'
    }
    ,

    {
        taskName: 'TRENING',
        priorityLevel: 10,
        taskImage: './images/vecteezy_realistic-3d-plane-on-transparent-background_24592873-fotor-bg-remover-20230705221522.png'
    }
    ,

    {
        taskName: 'TRENING',
        priorityLevel: 4,
        taskImage: './images/vecteezy_realistic-3d-plane-on-transparent-background_24592873-fotor-bg-remover-20230705221522.png'
    }
]

const taskContainer = document.querySelector('.priorities_container')

tasks.sort((a, b) => b.priorityLevel - a.priorityLevel)

generateTask(tasks, taskContainer)

const search = document.querySelector('#search')
search.value = 'Q'



const notFound = document.createElement('p')
notFound.textContent = 'NOT FOUND'
notFound.classList.add('not_found')

// search.addEventListener('keyup', () => {

//     const result = tasks.filter(task => task.taskName.toLowerCase().includes(search.value.toLowerCase().trim()))

//     if (result.length === 0) {
//         taskContainer.textContent = ''
//         taskContainer.appendChild(notFound)
//         return
//     }

//     generateTask(result, taskContainer)
// })

if (search.value === 'Q') {
    taskContainer.textContent = ''
    taskContainer.appendChild(notFound)
}