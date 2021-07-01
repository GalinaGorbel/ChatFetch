import React from 'react';

import './style.less';

/**
 * @component
 * @param {String} name - имя введенное пользователем
 * @param {String} message - сообщение написанное пользователем
 * @description отображение сообщений на странице
 * @returns {Element} 
 */

const Users = ({ name, message }) => {

    return (
        <>
            <div>
                <h3>{ name }</h3>
                <p>{ message }</p>
            </div>
        </>
    )
}

export default Users;