import React, { useState } from "react"; // Importamos o useState

function Counter (){
    //Criamos a variável de estado
    const [count, setCount] = useState(0);
        // [Variável, funcao_modificador] = useState(valor_inicial);

        //Criamos agora ums função para lidar com o clique
        function handleIncrement(){
            setCount(count + 1); //usamos essa função para atualizar o estado
                }
    return (
        <div className="counter">
             {/*usamos a variável de estado no JSX*/}
            <p>Você clicou {count} vezes</p>
            <button onClick={handleIncrement}>Clique Aqui</button>
        </div>
    );
}

export default Counter;