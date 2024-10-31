import React from 'react';
import { Clock, AlertCircle, CheckCircle, Trash2 } from 'lucide-react';
import { useTaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskContext();

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'alta':
        return 'text-red-500';
      case 'media':
        return 'text-yellow-500';
      default:
        return 'text-green-500';
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-4 rounded-lg border ${
            task.completed
              ? 'bg-gray-50 border-gray-200'
              : 'bg-white border-gray-200 hover:border-indigo-200'
          } transition-all duration-200`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleTask(task.id)}
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                task.completed
                  ? 'border-indigo-500 bg-indigo-500'
                  : 'border-gray-300'
              }`}
            >
              {task.completed && <CheckCircle className="h-4 w-4 text-white" />}
            </button>
            
            <div>
              <h3 className={`text-sm font-medium ${
                task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
              }`}>
                {task.title}
              </h3>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {task.dueDate}
                </div>
                <div className={`flex items-center text-sm ${getPriorityColor(task.priority)}`}>
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {task.priority}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Eliminar tarea"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;