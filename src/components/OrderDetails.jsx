function OrderDetails({ itemsInBag }) {

    // Função `calculateTotal` para calcular o valor total dos itens no carrinho.
    // Usa `forEach` para somar os preços, multiplicando pela quantidade de cada item.
    function calculateTotal() {
        let orderTotal = 0;
        // Percorre cada item no carrinho e adiciona o preço multiplicado pela quantidade
        itemsInBag.forEach(item => orderTotal += item.price * item.quantity);
        return orderTotal.toFixed(2);  // Formata o total para ter duas casas decimais
    }

    return (
        <>
            {/* Renderiza a seção de detalhes do pedido com uma tabela */}
            <section className="summary">
                <strong>Detalhes do Pedido</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Itera sobre os itens no carrinho e exibe a quantidade e o preço total de cada item */}
                        {itemsInBag.map(item => (
                            <tr key={item.id}>
                                <td>{item.quantity}x {item.name}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>  {/* Calcula o preço total de cada item */}
                            </tr>
                        ))}
                        <tr>
                            <th>Total</th>
                            <th>${calculateTotal()}</th>  {/* Exibe o total do pedido */}
                        </tr>
                    </tbody>
                </table> 
            </section>
        </>
    );
}

export default OrderDetails;
