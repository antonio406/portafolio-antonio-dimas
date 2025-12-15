import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaRobot } from 'react-icons/fa';
import { useWebSocket } from '../../hooks/useWebSocket';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

export const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, status, sendMessage } = useWebSocket();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getStatusColor = () => {
    switch (status) {
      case 'connected':
        return 'bg-green-500';
      case 'connecting':
        return 'bg-yellow-500';
      case 'disconnected':
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'connected':
        return 'Conectado';
      case 'connecting':
        return 'Conectando...';
      case 'disconnected':
        return 'Desconectado';
      case 'error':
        return 'Error';
      default:
        return 'Desconocido';
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 
                 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 
                 flex items-center justify-center transition-all"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Indicador de estado */}
        <div className={`absolute top-0 right-0 w-4 h-4 ${getStatusColor()} rounded-full border-2 border-white`} />
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] 
                     bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
                     border border-gray-200 dark:border-gray-700
                     flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <FaRobot className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat Bot</h3>
                    <div className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
                      <span>{getStatusText()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl mb-3"
                    >
                      💬
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      ¡Hola! Soy tu asistente virtual.<br />
                      ¿En qué puedo ayudarte?
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message, index) => (
                    <ChatMessage key={message.id} message={message} index={index} />
                  ))}
                  
                  {/* Indicador de escritura */}
                  {status === 'connected' && messages.length > 0 && messages[messages.length - 1].sender === 'user' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start mb-3"
                    >
                      <div className="backdrop-blur-md bg-white/90 dark:bg-gray-800/90 border border-white/20 px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <ChatInput onSendMessage={sendMessage} disabled={status !== 'connected'} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
