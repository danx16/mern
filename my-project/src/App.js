import React from 'react';
import './App.css';
import GoalList from './components/GoalList';


const App = () => {
  const GList = [
    {id:'gl1', text:'React Course'},
    {id:'gl2', text:'I want to finish this course at the end'},
    {id:'gl3', text:'I want to learn all'},
  ];

  return (
    <div className='course-goals'>
    <h2>Course Goal</h2>
      <GoalList goals={GList} /> 
      {/* merge jsx code with some js expressions */}
    </div>
  );
};

export default App;
