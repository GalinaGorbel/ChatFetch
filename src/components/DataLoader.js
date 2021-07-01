import React, { useEffect, useState } from 'react';
import ShowMessage from './ShowMessages';

/**
 * @component
 * @description загрузка данных с сервера
 */

function DataLoader() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch('https://chatfetch-gorbel-default-rtdb.firebaseio.com/chat.json')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                const results = [];
                for (const id in data) {
                    results.unshift({
                      id: data[id].id,
                      name: data[id].name,
                      message: data[id].message,
                    });
                  }
                setArr(results);
            })
            
    }, [ arr ]);

    return (
        <div>
           <ShowMessage arr={ arr }/>
        </div>
    )
}

export default DataLoader;