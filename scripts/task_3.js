const wsUri = "wss://echo.websocket.org/";

const client = document.getElementById('client-side');
const server = document.getElementById('server-side');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

let websocket;

function write(message, type) {
    let pre = document.createElement("div");
    pre.classList.add('message');
    if (type === 'client') {
        pre.classList.add('client');
        pre.innerHTML = message;
        client.appendChild(pre);
    }
    else {
        pre.classList.add('server');
        pre.innerHTML = message;
        server.appendChild(pre);
    }
}

websocket = new WebSocket(wsUri);
websocket.onmessage = function (evt) {
    write("Hello, how can we help you?", 'server');
};

websocket.onerror = function(evt) {
    write('Error: ' + evt.data, 'server');
};

btnSend.addEventListener('click', () => {
    const message = document.querySelector('input').value;
    if (message.length > 0) {
        write(message, 'client');
    }
    websocket.send(message);
});

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        write('Error', 'server');
    } else {
        navigator.geolocation.getCurrentPosition((position => {
            const { coords } = position;
            let link = document.createElement("a");
            link.setAttribute('href',`https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`);
            link.textContent = "Geolocation";
            link.target = '_blank';
            let pre = document.createElement("div");
            pre.classList.add('message');
            pre.classList.add('client');
            client.appendChild(pre);
            pre.append(link);
        }));
    }
});