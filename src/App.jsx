import './App.css';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import { useState } from 'react'; // Importa o hook `useState` para gerenciar o estado local do componente

function App() {

    // Definindo uma variável para armazenar o nome da loja. Este dado é fixo e não precisa ser parte do estado.
    const shopName = "Jersey Shop Made with React JS";

    // Hook `useState` para armazenar e atualizar o estado da lista de itens (camisas).
    // `items` contém o estado atual da lista, e `setItems` é a função para atualizá-lo.
    const [items, setItems] = useState([
        // Cada objeto representa uma camisa com propriedades como id, nome, preço, quantidade, etc.
        { id: 1, photo: "real_madrid.webp", name: "Real Madrid", price: 119.99, active: false, quantity: 1, isInBag: false },
        { id: 2, photo: "milan.png", name: "Milan", price: 99.99, active: false, quantity: 1, isInBag: false },
        { id: 3, photo: "chelsea.webp", name: "Chelsea", price: 99.99, active: false, quantity: 1, isInBag: false },
        { id: 4, photo: "barcelona.png", name: "Barcelona", price: 109.99, active: false, quantity: 1, isInBag: false },
        { id: 5, photo: "benfica.png", name: "Benfica", price: 89.49, active: false, quantity: 1, isInBag: false },
        { id: 6, photo: "manchester.webp", name: "Manchester City", price: 129.79, active: false, quantity: 1, isInBag: false },
        { id: 7, photo: "bayern.webp", name: "Bayern", price: 119.99, active: false, quantity: 1, isInBag: false },
        { id: 8, photo: "psg.png", name: "PSG", price: 94.99, active: false, quantity: 1, isInBag: false },
        { id: 9, photo: "ajax.webp", name: "Ajax", price: 89.99, active: false, quantity: 1, isInBag: false }
    ]);

    // Filtra os itens adicionados ao carrinho (isInBag === true), retornando um array com apenas esses itens.
    const itemsInBag = items.filter(item => item.isInBag);

    // Função `selectHandler` para alternar o estado de um item (se está ou não no carrinho).
    // Recebe o `id` do item, busca o item na lista, altera o campo `isInBag` e atualiza o estado com `setItems`.
    function selectHandler(id) {
        let item = items.filter(item => item.id === id)[0];  // Busca o item correspondente pelo id
        item.isInBag = !item.isInBag;  // Alterna o valor de `isInBag`
        // Atualiza o estado dos itens, garantindo a imutabilidade do estado.
        setItems(items.map(element => element.id === id ? item : element));
    }

    // Função `quantityHandler` que ajusta a quantidade de um item no carrinho.
    // Utiliza `e.stopPropagation()` para evitar que o clique nos botões de quantidade dispare o evento de seleção do item.
    function quantityHandler(e, id, increment) {
        e.stopPropagation();  // Evita que o clique afete outros elementos, como o container principal do item
        let item = items.filter(item => item.id === id)[0];  // Busca o item correspondente pelo id
        item.quantity += increment;  // Incrementa ou decrementa a quantidade
        // Atualiza o estado com o item modificado, garantindo a imutabilidade.
        setItems(items.map(element => element.id === id ? item : element));
    }

    return ( 
        <>
            {/* Renderiza a seção dos itens disponíveis */}
            <section className="items">
                <h4>{shopName}</h4>
                {/* Mapeia os itens e renderiza um componente `Item` para cada camisa */}
                {items.map(item =>
                    <Item 
                        selectProduct={(id) => selectHandler(id)}  // Passa a função `selectHandler` como prop
                        changeQuantity={(e, id, increment) => quantityHandler(e, id, increment)}  // Passa a função `quantityHandler` como prop
                        item={item}  // Passa o item como prop
                        key={item.id}  // Define uma chave única para cada item no map, importante para desempenho no React
                    />
                )}  
            </section>
  
            {/* Condicional para renderizar os detalhes do pedido apenas se houver itens no carrinho */}
            {itemsInBag.length > 0 && <OrderDetails itemsInBag={itemsInBag}/>}
        </>
    );
}

export default App;
