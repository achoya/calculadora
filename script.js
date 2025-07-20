function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos');
        return;
    }

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                alert('No se puede dividir por cero');
                return;
            }
            resultado = num1 / num2;
            break;
    }

    document.getElementById('valorResultado').textContent = resultado;
}
