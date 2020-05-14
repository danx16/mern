import React from 'react';

const GoalList = (props) => {
    console.log(props.goals);
    return (
          <ul className='list'>
              {props.goals.map((GList) => {
                  return <li key={GList.id}>{GList.text}</li>
              })}
          </ul>
    )
};

export default GoalList;