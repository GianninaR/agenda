import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Completar propuesta del proyecto',
      dueDate: '2024-10-30',
      priority: 'alta',
      completed: false,
    },
    {
      id: 2,
      title: 'Revisar actualizaciones del equipo',
      dueDate: '2024-10-30',
      priority: 'media',
      completed: true,
    },
  ]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext debe ser usado dentro de un TaskProvider');
  }
  return context;
}