import { useState, useEffect } from "react"; // importamos os dois Hooks

function UserGallery(){
    // Criamos um estado para guardar alista de usuários. Valor inicial: um array vazio
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // A função dentro do useEffect será executada APÓS o componenete ser rendereizado
        console.log("Componenente montado, buscando dados...");

        //Usamos a API fetch do navegador para fazer a requisição
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) //convertendo a resposta para JSON
            .then(data => {
                console.log("Dados recebidos:", data);
                setUsers(data); //Guardamos os dados recebidos no nosso estado
            });
    }, []); // o array de dependência vazio. CRUCIAL!

    return (
    <div className="gallery-container">
        {/*Mapeamos o array de usuários  para renderizar cada um*/}
        {users.map(user => (
            <div key={user.id} className="gallery-item">
                {user.name}
            </div>
        ))}
    </div>
    );
}
export default UserGallery;