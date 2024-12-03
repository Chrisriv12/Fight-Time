import './Button.css';

export default function Exit({ onExit }) {
    return (
        <div className="exit-button">
            <button onClick={onExit}>Exit</button>
        </div>
    );    
}