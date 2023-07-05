const generateTask = (tasks, taskContainer) => {
    taskContainer.textContent = ''
    tasks.forEach(task => {
        const tasksSection = document.createElement('section')
        tasksSection.classList.add('task')

        const taskImage = document.createElement('img')
        taskImage.classList.add('task_image')
        taskImage.src = task.taskImage

        const taskPriorityDisplay = document.createElement('div')
        taskPriorityDisplay.classList.add('task_priority_level_display')

        let pPriorityLevel = document.createElement('p')
        pPriorityLevel.classList.add('task_priority_level')
        pPriorityLevel.textContent = task.priorityLevel

        const priorityButton = document.createElement('button')
        priorityButton.classList.add('task_priority_btn')
        priorityButton.textContent = 'ADD'

        priorityButton.addEventListener('click', () => {
            task.priorityLevel++
            tasks.sort((a, b) =>
                b.priorityLevel - a.priorityLevel)
                generateTask(tasks, taskContainer)
        })

        taskPriorityDisplay.append(pPriorityLevel, priorityButton)

        const taskName = document.createElement('p')
        taskName.classList.add('task_name')
        taskName.textContent = task.taskName

        tasksSection.append(taskImage, taskPriorityDisplay, taskName)

        taskContainer.appendChild(tasksSection)
    });
}

export default generateTask