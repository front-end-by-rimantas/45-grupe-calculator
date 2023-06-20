const equationDOM = document.querySelector('.equation');
const buttonsDOM = document.querySelectorAll('.key');

for (const buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener('click', () => {
        const buttonValue = buttonDOM.innerText;
        const currentEquationValue = equationDOM.innerText;
        let updateEquationValue = currentEquationValue;

        if (buttonValue === 'C') {
            updateEquationValue = '';
        } else if (buttonValue === '<=') {
            updateEquationValue = currentEquationValue.slice(0, -1);
        } else {
            updateEquationValue += buttonValue;
        }

        equationDOM.innerText = updateEquationValue;
    });
}