function Item({ item, selectProduct, changeQuantity }) {

    return (
        <>
            {/* Define a classe dinamicamente com base em `isInBag`, para destacar o item selecionado */}
            <div onClick={() => selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`}>
                <div className="photo">
                    {/* Exibe a imagem do item, montando o caminho da imagem dinamicamente */}
                    <img src={"./img/" + item.photo} alt={item.name}/>
                </div>
                <div className="description">
                    <span className="name">{item.name}</span>  {/* Exibe o nome do item */}
                    <span className="price">${item.price}</span>  {/* Exibe o preço do item */}
                    
                    {/* Se o item estiver no carrinho (`isInBag`), renderiza a área de quantidade */}
                    {item.isInBag && (
                        <div className="quantity-area">
                            {/* Botão para diminuir a quantidade, desabilitado quando a quantidade é 1 */}
                            <button disabled={item.quantity <= 1} onClick={(e) => changeQuantity(e, item.id, -1)}>-</button>
                            <span className="quantity">{item.quantity}</span>  {/* Exibe a quantidade atual do item */}
                            {/* Botão para aumentar a quantidade */}
                            <button onClick={(e) => changeQuantity(e, item.id, +1)}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Item;
