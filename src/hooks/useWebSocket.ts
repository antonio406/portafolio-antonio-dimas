import { useState, useEffect, useRef, useCallback } from 'react';
import { ChatMessage, WebSocketStatus } from '../types/chat.types';

// Obtener URL del WebSocket desde variables de entorno
const getWebSocketUrl = () => {
  return import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:8080';
};

interface UseWebSocketReturn {
  messages: ChatMessage[];
  status: WebSocketStatus;
  sendMessage: (message: string) => void;
  clearMessages: () => void;
}

export const useWebSocket = (url?: string): UseWebSocketReturn => {
  const wsUrl = url || getWebSocketUrl();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<WebSocketStatus>('connecting');
  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    try {
      setStatus('connecting');
      ws.current = new WebSocket(wsUrl);

      ws.current.onopen = () => {
        console.log('WebSocket conectado');
        setStatus('connected');
      };

      ws.current.onmessage = (event) => {
        const newMessage: ChatMessage = {
          id: Date.now().toString(),
          content: event.data,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        setStatus('error');
      };

      ws.current.onclose = () => {
        console.log('WebSocket desconectado');
        setStatus('disconnected');
        
        // Intentar reconectar después de 3 segundos
        reconnectTimeout.current = setTimeout(() => {
          console.log('Intentando reconectar...');
          connect();
        }, 3000);
      };
    } catch (error) {
      console.error('Error al conectar WebSocket:', error);
      setStatus('error');
    }
  }, [wsUrl]);

  const sendMessage = useCallback((message: string) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      // Agregar mensaje del usuario
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content: message,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);

      // Enviar al servidor
      ws.current.send(message);
    } else {
      console.error('WebSocket no está conectado');
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [connect]);

  return { messages, status, sendMessage, clearMessages };
};
