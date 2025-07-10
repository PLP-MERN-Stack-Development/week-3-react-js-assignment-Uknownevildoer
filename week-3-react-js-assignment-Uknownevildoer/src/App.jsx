import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {/* Task Manager Component */}
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <TaskManager />
          </section>
    
          {/* API User List Component */}
          <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">User Directory (API Data)</h2>
            <UserList />
          </section>
        </div>
      </main>

      <Footer />
    </div>
    
  );
}

export default App;
