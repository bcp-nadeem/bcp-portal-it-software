import React, { useState, useEffect } from 'react';

const Message = ({ 
  type = 'success', 
  message = 'Operation successful!', 
  action,
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div className={`message ${type} ${isVisible ? 'visible' : ''}`}>
      <div className="message-content">
        <p>{message}</p>
      </div>
      {action && (
        <button className="action-button" onClick={action.onClick}>
          {action.text}
        </button>
      )}
      <button className="close-button" onClick={handleClose} aria-label="Close">
        ×
      </button>
    </div>
  );
};

export default Message;