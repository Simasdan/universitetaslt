import styles from './navigation.module.scss';
import FacebookLogo from '../../assets/icons/facebookLogo.svg?react';
import Input from '../Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import BurgerIcon from '../../assets/icons/burgerIcon.svg?react';
import PageLogo from '../../assets/images/PageLogo.svg?react';
import PlusIcon from '../../assets/icons/plusIcon.svg?react';

export interface NavigationProps {
  onResetSearch?: () => void;
}

const Navigation = ({ onResetSearch }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [resetInput, setResetInput] = useState<boolean>(false)
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleBurgerToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleSearch = (query: string) => {
    navigate(`/straipsniai?search=${encodeURIComponent(query)}`);
    setResetInput(false)
  };

  const resetSearchInput = () => {
    setResetInput(true)
    onResetSearch ? onResetSearch() : setResetInput(true)
    setMenuOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    resetInput && setResetInput(false)

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [resetInput, menuOpen]);

  return (
    <div className={styles.navigationBackground}>
      <div className={styles.navigationWrapper}>
        <figure className={styles.navigationLogo}>
          <Link to={'/'} onClick={resetSearchInput}>
            <PageLogo />
          </Link>
        </figure>
        <nav className={`${styles.navigation} ${[menuOpen ? styles.mobileNavigation : '']}`} ref={menuRef}>
          <div className={styles.burgerIcon} onClick={handleBurgerToggle}>
            <BurgerIcon />
          </div>
          <ul className={`${[menuOpen ? styles.mobileNavigationList : '']}`}>
            <Input onSearch={handleSearch} resetInput={resetInput} />
            <Link to={'/ikelti-skelbima'} onClick={resetSearchInput}>
              <button className={`${[menuOpen ? styles.addsButtonSmall : styles.addsButton]}`}>
                {menuOpen ? '' : <PlusIcon />}
                Įkelti skelbimą
              </button>
            </Link>
            <Link to={'/skelbimai'} onClick={resetSearchInput} className={styles.mobileLink}>
              <li className={`${[menuOpen ? styles.mobileNavigationListItem : styles.straipsniaiNav]}`}>
                {/* {menuOpen ? 'Straipsniai' : <ArticleIcon />} */}
                Skelbimai
              </li>
            </Link>
            <Link to={'/straipsniai'} onClick={resetSearchInput} className={styles.mobileLink}>
              <li className={`${[menuOpen ? styles.mobileNavigationListItem : styles.straipsniaiNav]}`}>
                {/* {menuOpen ? 'Straipsniai' : <ArticleIcon />} */}
                Straipsniai
              </li>
            </Link>
            <a href="https://www.facebook.com/universitetas.lt" target="_blank" className={styles.mobileLinkFacebook} onClick={() => setMenuOpen(false)}>
              <li className={`${styles.logoWrapper} ${[menuOpen ? styles.mobileNavigationListItem : '']}`}>
                {menuOpen ? 'Facebook' : <FacebookLogo />}
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
