import React from 'react';

function Page2(props) {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [edad, setEdad] = React.useState(0);
    const [sexo, setSexo] = React.useState('masculino');
    const [ejercicio, setEjercicio] = React.useState(0);
    const [calculoTMB, setCalculoTMB] = React.useState(0);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        switch (name) {
            case 'peso':
                setPeso(value);
                break;
            case 'altura':
                setAltura(value);
                break;
            case 'edad':
                setEdad(value);
                break;
            case 'sexo':
                setSexo(value);
                break;
            case 'ejercicio':
                setEjercicio(value);
                break;
            default:
                break;
        }
    }

    const CalculateTMB = () => {     
        
        if (sexo === 'masculino') {
           let calc = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
           console.log('masc', calc);
            calculo2(calc);
            
        } else {
            let calc = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
            console.log('fem', calc);
            calculo2(calc); 
        }
        
        
    }

    const calculo2 = (tmb) => {        
        switch (ejercicio) {
            case 0:                
                setCalculoTMB(tmb * 1.2);                
                break;
            case 1:
                setCalculoTMB(tmb * 1.375);
                break;
            case 2:
                setCalculoTMB(tmb * 1.55);
                break;
            case 3:
                setCalculoTMB(tmb * 1.725);
                break;
            case 4:
                setCalculoTMB(tmb * 1.9);
                break;
            default:
                break;
        } 
    }




    return (
        <div className='card'>
            <h2 className='title'>Calcular TMB</h2>
            <div className="flex__center">
                <input className='form__control' name='peso' type="number" placeholder="Peso KG: 80" onChange={HandleChange} />
                <input className='form__control' name='altura' type="number" placeholder="Altura cm: 150" onChange={HandleChange} />
                <input className='form__control' name='edad' type="number" placeholder="Edad: 30" onChange={HandleChange} />
               
               
            </div>
            <div className="flex__center">
            <select className='form__control' name="sexo" id="sexo" onChange={HandleChange}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                      
                <select className='form__control' name="ejercicio" id="ejercicio" onChange={HandleChange}>
                    <option value="0">Sin ejercicio</option>
                    <option value="1">Ejercicio ligero</option>
                    <option value="2">Ejercicio moderado </option>
                    <option value="3">Ejercicio fuerte</option>
                    <option value="4">Ejercicio muy fuerte</option>
                </select>

            </div>
            <button className='btn__primary' onClick={CalculateTMB}>Calcular TMB</button>
            <div className="result">
                <h3>TMB: {calculoTMB}</h3>
            </div>
        </div>
    );
}

export default Page2;