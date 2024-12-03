import React from 'react';

export default function Weeks({ weekNumber, schedule, editMode, onInputChange }) {
  return (
    <div>
      <h3>Week {weekNumber}</h3>
      {Object.entries(schedule).map(([day, { skill, time, to }]) => (
        <div key={day}>
          <h4>{day}</h4>
          {editMode ? (
            <>
              <label>Skill:</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => onInputChange(day, 'skill', e.target.value)}
              />
              <label>From:</label>
              <input
                type="text"
                value={time}
                onChange={(e) => onInputChange(day, 'time', e.target.value)}
              />
              <label>To:</label>
              <input
                type="text"
                value={to}
                onChange={(e) => onInputChange(day, 'to', e.target.value)}
              />
            </>
          ) : (
            <>
              <p>Skill: {skill}</p>
              <p>From: {time}</p>
              <p>To: {to}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
