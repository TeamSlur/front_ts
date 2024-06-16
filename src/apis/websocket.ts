const BASE_WS_URL = 'ws://localhost:8080/ws/document';

export const createWebSocket = (onMessage: (data: any) => void) => {
    const socket = new WebSocket(BASE_WS_URL);

    socket.onopen = () => {
        console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        onMessage(data);
    };

    socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
        console.log('WebSocket disconnected');
    };

    return socket;
};

export const sendMessage = (socket: WebSocket, message: any) => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
    } else {
        console.error('WebSocket is not open. Message not sent.');
    }
};
