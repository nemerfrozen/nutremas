import React from 'react';

function Page2(props) {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [idade, setIdade] = React.useState(0);
    const [sexo, setSexo] = React.useState('masculino');
    const [tmb, setTmb] = React.useState(0);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'peso':
                setPeso(value);
                break;
            case 'altura':
                setAltura(value);
                break;
            case 'idade':
                setIdade(value);
                break;
            case 'sexo':
                setSexo(value);
                break;
            default:
                break;
        }
    }

    const CalculateTMB = () => {
        let tmb = 0;
        if (sexo === 'masculino') {
            tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
        } else {
            tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
        }
        setTmb(tmb);
    }




    return (
        <div className='card'>
            <h2 className='title'>Calcular TMB</h2>
            <div className="flex__center">
                <input className='form__control' type="number" placeholder="Peso" onChange={HandleChange} />
                <input className='form__control' type="number" placeholder="Altura" onChange={HandleChange} />
                <input className='form__control' type="number" placeholder="Idade" onChange={HandleChange} />
               
               
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
                <h3>TMB: {tmb}</h3>
            </div>
        </div>
    );
}

export default Page2;