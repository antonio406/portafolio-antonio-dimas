import { useState, KeyboardEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          placeholder={disabled ? 'Conectando...' : 'Escribe un mensaje...'}
          className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg 
                   text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none
                   focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all text-sm"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500
                   text-white rounded-lg font-semibold
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:shadow-lg hover:shadow-purple-500/50
                   transition-all flex items-center gap-2"
        >
          <FaPaperPlane className="text-sm" />
        </button>
      </div>
    </div>
  );
};
