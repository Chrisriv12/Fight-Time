import Dropdown from "./Dropdown";
import Add from "./Add";
import './Week.css';

export default function Week({ weekNumber }) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleSelect = (selectedWeek) => {
        console.log(`Selected week: ${selectedWeek}`);
    };

    return (
        <div>
            <h1>Week {weekNumber}</h1>
            {days.map((day, index) => (
                <div key={index} className="day-container">
                    <div className ="day">{day}</div>
                    <label>Skill: </label>
                    <input type="text" />
                    <label>Time: </label>
                    <input type="time" />
                    <Add/>
                </div>
            ))}
        </div>
    );
}

