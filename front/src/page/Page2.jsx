import React from 'react';
import axios from 'axios';

function Page2(props) {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [edad, setEdad] = React.useState(0);
    const [sexo, setSexo] = React.useState('masculino');
    const [ejercicio, setEjercicio] = React.useState(0);
    const [calculoTMB, setCalculoTMB] = React.useState(0);
    const [platos, setPlatos] = React.useState([]);
    const [disbutton, setDisbutton] = React.useState(true);
    const [objetivo, setObjetivo] = React.useState(0);

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
            case 'objetivo':
                setObjetivo(value);
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

    const obejtivoCalc = (tmb) => {
        console.log('objetivo', objetivo, tmb);
        let calc = 0;
        switch (parseInt(objetivo)) {
            case 0:
                console.log('case 0');
                calc = tmb - 500;
                break;
            case 1:
                console.log('case 1');
                calc = tmb;
                break;
            case 2:
                console.log('case 1');
                calc = tmb + 500;
                break;
            default:
                break;
        }
        console.log('calc', calc);
        setCalculoTMB(calc);
        setDisbutton(false);
    }
    

    const calculo2 = (tmb) => {    
        console.log('ejercicio', ejercicio, tmb); 
        let calc = 0;   
        switch (parseInt(ejercicio)) {
            case 0:
                console.log('case 0');                
                calc = tmb * 1.2;             
                break;
            case 1:
                console.log('case 1');
                calc = tmb * 1.375;
                break;
            case 2:
                calc = tmb * 1.55;
                break;
            case 3:
                calc = tmb * 1.725;
                break;
            case 4:
                calc = tmb * 1.9;
                break;
            default:
                break;
        }
        console.log('calc2', calc);
        setCalculoTMB(calc);
        obejtivoCalc(calc);
        setDisbutton(false); 
    }

    const getPlatoNutricional = () => {
        console.log('getPlatoNutricional');
        let _platos = [];        
        const url = 'http://localhost:4000/platos/';
        const dayfood =['desayuno', 'comida', 'cena', 'merienda' ];
        // wait for all promises to resolve
        Promise.all(dayfood.map(async (food) => {
            console.log('food', food);
            const response = await axios.get(url + food);
            if (response.status === 200) {
                console.log('response', response.data);
                _platos.push(response.data);
            }
        })).then(() => {
            console.log('platos', _platos);
            setPlatos(_platos);
        });
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

                <select className='form__control' name="objetivo" id="objetivo" onChange={HandleChange}>
                    <option value="0">Perder peso</option>
                    <option value="1">Mantener peso</option>
                    <option value="2">Ganar peso</option>
                </select>


            </div>
            <button className='btn__primary' onClick={CalculateTMB}>Calcular TMB</button>
            <div className="result">
                <h3>TMB: {calculoTMB}</h3>
                <button className='btn__primary' disabled={disbutton} onClick={getPlatoNutricional}>Platos Nutricionales</button>
                {platos.length > 0 && platos.map((plato, index) => {
                    return (
                        <div key={index} className="card__nutricional">
                            <h3>Nombre: {plato.name}</h3>
                            <p>Calorias: {plato.calorias}</p>
                            <p>Carbohidratos:{plato.carbohidratos}</p>
                            <p>Grasas:{plato.grasas}</p>
                            <p>Palato:{plato.proteinas}</p>                           
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Page2;