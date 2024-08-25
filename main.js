function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    const conversions = {
        CtoF: (t) => (t * 9/5) + 32,
        FtoC: (t) => (t - 32) * 5/9
    };
    
    if (conversions[scale]) {
        
        let result;
        for (let key in conversions) {
            if (key === scale) {
                result = conversions[key](temp);
                const units = scale === 'CtoF' ? '°F' : '°C';
                document.getElementById('result').innerText = `${temp}°${scale === 'CtoF' ? 'C' : 'F'} es igual a ${result.toFixed(2)}${units}`;
                break;
            }
        }
    } else {
        document.getElementById('result').innerText = 'Selecciona una escala válida, por favor.';
    }
}
