import React from 'react';

function MenuSubItem(subItemMenu) {
    const dropDownItem = subItemMenu.dropDownItem;
    return (
        dropDownItem.map((dropItem, i) => {
            const {name, link} = dropItem;
            return(
                <a key={name} className="dropdown-item" href={link}>
                    {name}
                </a>
            )
        })
    );
}

export default MenuSubItem;

