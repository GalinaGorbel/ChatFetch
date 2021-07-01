import React from 'react';

import Users from './Users';
import './style.less';

/**
 * @component
 * @param {Array} arr - Массив с объектами, содержащими сообщения.
 * @description получает данные  с сервера и передает их в компонент User для отображения сообщений на странице
 * @returns {Element} 
 */

const ShowMessage = ({ arr = []}) => {

    const elements = arr.map(elem => {

        const { id, ...elemProps } = elem;

        return (
            <div className="messageBox" key={ id }>
                <Users { ...elemProps } />
            </div>
        )
    })
    return (
        <>
            <h1>Все сообщения</h1>
            {elements}
        </>
    )
}

export default ShowMessage;