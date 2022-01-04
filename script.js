let url = 'https://jsonplaceholder.typicode.com/posts';

const getData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'db.json', true);
    xhr.send();
    
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState != 4) {
            return;
          }
        
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            sendData(JSON.parse(xhr.responseText));
        } else {
        console.log('Ошибка, такого файла нет');
        }
    });
};

const sendData = (obj) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(obj));

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        }
    });
};

getData();
