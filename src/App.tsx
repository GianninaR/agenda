import React, { useState } from 'react';
import { PlusCircle, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import { TaskProvider } from './context/TaskContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                <h1 className="text-xl font-semibold text-gray-900">Mis Tareas</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-gray-500" />
                <Clock className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Lista de Tareas</h2>
                <p className="text-gray-500 mt-1">Mantente organizado y productivo</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Agregar Tarea
              </button>
            </div>
            
            <TaskList />
          </div>
        </main>

        <AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </TaskProvider>
  );
}

export default App;