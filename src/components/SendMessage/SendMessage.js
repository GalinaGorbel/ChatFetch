import React from 'react';
import { useState } from 'react';

import '../style.less';
import '../SendMessage/SendMessage.less'

/**
 * @component
 * @description форма для отправки сообщения
 * @namespace SendMessage
 */

const SendMessage = () => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    /**
    * @function
    * @description срабатывает по нажатию кнопки отправить. Отправляет введенные данные на сервер
    * @memberof SendMessage
    */

    function onSubmit(e) {
        e.preventDefault();

        fetch('https://chatfetch-gorbel-default-rtdb.firebaseio.com/chat.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                name: name,
                message: message,
            }),
        });

        setMessage('');
        setName('');
    }

    return (
        <>
            <h1>Введите сообщение</h1>
            <div className="messageBox">
                <form onSubmit={onSubmit}>
                    <div className="formControl">
                        <label htmlFor="text">Имя</label>
                        <input onChange={e => setName(e.target.value)} id="name" type="text" name="name" value={name} required />
                    </div>
                    <div className="formControl">
                        <label htmlFor="text">Сообщение</label>
                        <textarea onChange={e => setMessage(e.target.value)} id="text" name="mess" value={message} required></textarea>
                    </div>
                    <button type="submit" name="submit">Отправить</button>
                </form>
            </div>
        </>
    )
}

export default SendMessage;