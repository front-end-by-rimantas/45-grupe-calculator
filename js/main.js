/*
1. susirasti tevini elementa (.calc)
2. sugeneruoti visa HTML
3. istatyti i tevini elementa
4. susirasti visus mygtukus (.key)
5. mygtukams uzdeti event listener'ius
*/

const equationDOM = document.querySelector('.equation');
const buttonsDOM = document.querySelectorAll('.key');

for (const buttonDOM of buttonsDOM) {
    buttonDOM.addEventListener('click', () => {
        const buttonValue = buttonDOM.innerText;
        const currentEquationValue = equationDOM.innerText;
        let updateEquationValue = currentEquationValue;

        switch (buttonValue) {
            case 'C':
                updateEquationValue = '';
                break;

            case '<=':
                updateEquationValue = currentEquationValue.slice(0, -1);
                break;

            default:
                updateEquationValue += buttonValue;
                break;
        }

        equationDOM.innerText = updateEquationValue;
    });
}