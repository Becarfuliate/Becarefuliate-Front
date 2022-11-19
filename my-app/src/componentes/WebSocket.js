import { createContext, useState, useRef, useEffect, useContext } from 'react';

const WebsocketContext = createContext(false, null, () => {});
//                                            ready, value, send

// Make sure to put WebsocketProvider higher up in
// the component tree than any consumers.
export const WebsocketProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);

  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("wss://echo.websocket.events/");

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const ret = [isReady, val, ws.current?.send.bind(ws.current)];

  return (
    <WebsocketContext.Provider value={ret}>
      {children}
    </WebsocketContext.Provider>
  );
};

export const WsConsumer = () => {
  const [ready, val, send] = useContext(WebsocketContext); // use it just like a hook

  useEffect(() => {
    if (ready) {
      send("test message");
    }
  }, [ready, send]); // make sure to include send in dependency array

  return (
    <div>
      Ready: {JSON.stringify(ready)}, Value: {val}
    </div>
  );
};