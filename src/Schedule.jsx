import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Schedule.css';

export default function ViewSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    const savedSchedules = JSON.parse(localStorage.getItem('schedules'));
    if (savedSchedules) {
      console.log('Loaded schedules:', savedSchedules);
      setSchedules(savedSchedules);
    }
  }, []);

  const handleScheduleClick = (schedule) => {
    console.log('Schedule clicked:', schedule);
    setSelectedSchedule(schedule);
  };

  const handleBackClick = () => {
    setSelectedSchedule(null);
  };

  const deleteSchedule = (scheduleToDelete) => {
    const updatedSchedules = schedules.filter(schedule => schedule !== scheduleToDelete);
    setSchedules(updatedSchedules);
    localStorage.setItem('schedules', JSON.stringify(updatedSchedules));
    setSelectedSchedule(null); // Go back to the schedule list after deletion
    console.log('Schedule deleted:', scheduleToDelete);
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="view-schedule-container">
      {selectedSchedule ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          {selectedSchedule.data.map((week, weekIndex) => (
            <Card key={weekIndex} header={`Week ${weekIndex + 1}`}>
              <div className="week-schedule">
                <div key={weekIndex} className="week-container">
                  <h2>Week {weekIndex + 1}</h2>
                  {days.map((day) => (
                    <div key={day}>
                      <h3>{day}</h3>
                      <p>Skill: {week[day]?.skill}</p>
                      <p>From: {week[day]?.time}</p>
                      <p>To: {week[day]?.to}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
          <button onClick={() => deleteSchedule(selectedSchedule)}>Delete</button>
        </div>
      ) : schedules.length === 0 ? (
        <p>No saved schedules found.</p>
      ) : (
        schedules.map((schedule, index) => (
          <div key={index} onClick={() => handleScheduleClick(schedule)}>
            <Card header={schedule.name}>
              <div className="schedule-preview">
                <p>Click to view details</p>
              </div>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
