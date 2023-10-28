import './App.css';
import {useState} from "react";

function App() {
    const [prediction, setPrediction] = useState('Нажмите на кнопку, чтобы получить предсказание');

    const onButtonClick = () => {
        fetch('http://localhost:4000/prediction').then(response => response.json()).then(data => {
            setPrediction(data.text)
        })
    }

    return (
        <div className="layout">
            <header>
                <h1>Астрологические предсказания для IT</h1>
            </header>
            <main>
                <div className="card">
                    <h3>{prediction}</h3>
                </div>
                <button id="get-prediction" onClick={onButtonClick}>
                    Получить предсказание
                </button>
            </main>
            <footer>
                <a href="https://telegram.me/alexey_ershkov">Написать астрологу</a>
            </footer>
        </div>
    );
}

export default App;
