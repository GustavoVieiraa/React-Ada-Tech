import { FormEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  /*
  [
    {title: 'Tafera 1', done: boolean, id: number }
  ]
  */

  // função disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 letras.");
      return;
    }

    // adicione a tarefa
    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];

    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          if (task.done === false) {
            return (
              <li key={task.id}>
                <input type="checkbox" id={`task-${task.id}`} />
                <label htmlFor={`task-${task.id}`}>{task.title}</label>
              </li>
            );
          } else {
            return (
              <li key={task.id} className={styles.taskChecked}>
                <input type="checkbox" id={`task-${task.id}`} />
                <label htmlFor={`task-${task.id}`}>{task.title}</label>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};
