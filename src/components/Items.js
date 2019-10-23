import React from 'react';
const Items = ({items, deleteItem, updateItem}) => {

    const itemsList = items.length  ? (
        items.map(item => {
            return (
                <div className="collection-item" key={item.id} >
                    <div className="flex">
                        <div className="translate-forms">
                            <p className="updater-text">{item.content}</p>
                            <p className="quantity-text">{item.quantity}x</p>
                        </div>
                        <div className="translate-forms">
                            <form className="updater-form"><input type="number" name="quantity" min="1" value={item.quantity} onChange={(e) => { e.preventDefault();
                    updateItem(item.id, e.target.value);}}/></form>
                            <i className="material-icons" onClick={()=>{deleteItem(item.id)}}>close</i>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
    <p className="center">You have no items left!</p>);


    return(
        <div className="items collection">
            {itemsList}
        </div>
    );
}

export default Items;