import React from 'react';
import './App.css';
import GoalList from './components/GoalList';


const App = () => {
  return (
    <div className='app'>
    <h2>Course Goal</h2>
      <GoalList />
    </div>
  )
};

export default App;
