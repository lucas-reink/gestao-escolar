import React, { useState, useRef } from 'react';
import './style.css';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Referência ao dropdown para controle de eventos

  // Alterna entre abrir e fechar o dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Fecha o dropdown quando o clique ocorre fora dele
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Adiciona e remove o evento de clique fora do dropdown
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={toggleDropdown} // Exibe ou esconde o menu ao clicar
      >
        ⋮
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map((option, index) => (
          <li
            key={index}
            className="dropdown-item"
            onClick={() => {
              onSelect(option);
              setIsOpen(false); // Fecha o menu após a seleção
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
