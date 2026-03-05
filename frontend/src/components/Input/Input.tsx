import styles from './input.module.scss';
import SearchLogo from '../../assets/icons/searchLogo.svg?react';
import { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';

export interface InputProps {
    icon?: boolean;
    onSearch: (query: string) => void;
    resetInput?: boolean
}

const Input = ({icon = true, onSearch, resetInput = false}: InputProps) => {

  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onSearch(e.target.value);
  }

  useEffect(() => {
    resetInput && setInputValue('')
  }, [resetInput])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <div className={styles.inputWrapper}>
        {icon && <SearchLogo className={styles.inputIcon}/>}
        <input
          type="text"
          placeholder='Ieškoti'
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
    </div>
  )
}

export default Input
