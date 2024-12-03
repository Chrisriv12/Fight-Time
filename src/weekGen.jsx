import React, { useState, useEffect } from 'react';
import Weeks from './Weeks';
import Card from './Card';
import './weekGen.css';

export default function WeekGenerator() {
  const [scheduleName, setScheduleName] = useState('');
  const [numberOfWeeks, setNumberOfWeeks] = useState(0);
  const [generatedSchedule, setGeneratedSchedule] = useState([]);
  const [schedules, setSchedules] = useState(() => {
    const savedSchedules = localStorage.getItem('schedules');
    return savedSchedules ? JSON.parse(savedSchedules) : [];
  });

  const [schedule, setSchedule] = useState({
    Monday: { skill: '', time: '', to: '' },
    Tuesday: { skill: '', time: '', to: '' },
    Wednesday: { skill: '', time: '', to: '' },
    Thursday: { skill: '', time: '', to: '' },
    Friday: { skill: '', time: '', to: '' },
    Saturday: { skill: '', time: '', to: '' },
    Sunday: { skill: '', time: '', to: '' },
  });

  const [isInputMode, setIsInputMode] = useState(true);
  const [editWeek, setEditWeek] = useState(null);

  useEffect(() => {
    const savedSchedules = JSON.parse(localStorage.getItem('schedules'));
    if (savedSchedules) {
      setSchedules(savedSchedules);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
  }, [schedules]);

  const handleWeeksChange = (event) => {
    const value = event.target.value !== '' ? parseInt(event.target.value, 10) : 0;
    setNumberOfWeeks(value);
  };

  const handleInputChange = (day, field, value) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value,
      },
    }));
  };

  const handleAddButtonClick = () => {
    if (numberOfWeeks > 0 && scheduleName) {
      const weeksArray = Array.from({ length: numberOfWeeks }, () => schedule);
      setGeneratedSchedule(weeksArray);
      setIsInputMode(false);
    } else {
      alert('Please enter a valid number of weeks and schedule name');
    }
  };

  const saveGeneratedSchedule = () => {
    if (scheduleName) {
      const newSchedule = { name: scheduleName, data: generatedSchedule };
      const updatedSchedules = [...schedules, newSchedule];
      setSchedules(updatedSchedules);

      localStorage.setItem('schedules', JSON.stringify(updatedSchedules));

      setScheduleName('');
      setNumberOfWeeks(0);
      setSchedule({
        Monday: { skill: '', time: '', to: '' },
        Tuesday: { skill: '', time: '', to: '' },
        Wednesday: { skill: '', time: '', to: '' },
        Thursday: { skill: '', time: '', to: '' },
        Friday: { skill: '', time: '', to: '' },
        Saturday: { skill: '', time: '', to: '' },
        Sunday: { skill: '', time: '', to: '' },
      });
      setIsInputMode(true);
      setGeneratedSchedule([]);
    } else {
      alert('Please enter a schedule name before saving.');
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div>
      {isInputMode ? (
        <Card header="Training camp length">
          <h2>Number of weeks</h2>
          <div className="week-selector">
          <input 
            type="number" 
            value={numberOfWeeks} 
            onChange={handleWeeksChange} 
            min="1"
          
          />
          </div>
          <div className="schedule-name">
            <input 
              type="text" 
              value={scheduleName} 
              onChange={(e) => setScheduleName(e.target.value)} 
              placeholder="Schedule Name"
            />
          </div>
          {days.map((day) => (
            <div key={day}>
              <h2>{day}</h2>
              <div className="skill-label">
                <label>Skill: </label>
                <input 
                  type="text" 
                  value={schedule[day].skill} 
                  onChange={(e) => handleInputChange(day, 'skill', e.target.value)} 
                />
              </div>
              <div className="time-label">
                <label>From: </label>
                <input 
                  type="text" 
                  value={schedule[day].time} 
                  onChange={(e) => handleInputChange(day, 'time', e.target.value)} 
                />
              </div>
              <div className="time-label">
                <label>To: </label>
                <input 
                  type="text" 
                  value={schedule[day].to} 
                  onChange={(e) => handleInputChange(day, 'to', e.target.value)} 
                />
              </div>
            </div>
          ))}
          <button onClick={handleAddButtonClick}>Add</button>
        </Card>
      ) : (
        <div className="cards-container">
          {generatedSchedule.map((week, weekIndex) => (
            <div key={weekIndex} className="week-container">
              <Card header={`Week ${weekIndex + 1}`}>
                {days.map((day) => (
                  <div key={day}>
                    <h3>{day}</h3>
                    <p>Skill: {week[day].skill}</p>
                    <p>From: {week[day].time}</p>
                    <p>To: {week[day].to}</p>
                  </div>
                ))}
              </Card>
            </div>
          ))}
          <div className="save-schedule-container">
            <label>Schedule Name: </label>
            <input 
              type="text" 
              value={scheduleName} 
              onChange={(e) => setScheduleName(e.target.value)} 
              placeholder="Enter a name for the schedule"
            />
            <button onClick={saveGeneratedSchedule}>Save Schedule</button>
          </div>
        </div>
      )}
    </div>
  );
}
