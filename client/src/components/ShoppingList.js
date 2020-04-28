
import React from 'react';


const ShoppingList = ({ list }) => {
    return (
        <div className='ingredients-list'>
            <h3 className='subheader'>
                Your Shopping List
      </h3>
            <ul>
                {list.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button className="btn btn-secondary">Save</button>
            <button className="btn btn-secondary">Send to <br>email</br></button>
        </div>

    )
};



export default shoppingList;
