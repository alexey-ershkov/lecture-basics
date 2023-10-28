const initialText = 'Нажмите на кнопку, чтобы получить предсказание';

const button = document.getElementById('get-prediction');
const cardText = document.getElementsByClassName('card')[0].children[0];

cardText.textContent = initialText;

button.onclick = () => {
    fetch('http://localhost:4000/prediction').then(response => response.json()).then(data => {
        cardText.textContent = data.text;
    })
}

