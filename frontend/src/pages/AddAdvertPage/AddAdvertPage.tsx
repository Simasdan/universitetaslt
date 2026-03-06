import styles from './addadvertpage.module.scss';
import EmailLogo from '../../assets/icons/emailLogo.svg?react';
import PhoneLogo from '../../assets/icons/phoneLogo.svg?react';
import LocationLogo from '../../assets/icons/locationLogo.svg?react';
import Button, { ButtonType } from '../../components/Button/Button';
import { useState } from 'react';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AddAdvertPageProps {
  jobTitle?: string;
  jobDescription?: string;
  positionName?: string;
  positionDescription?: string;
  email?: string;
  phoneNumber?: string;
  city?: string;
}

const AddAdvertPage = ({
  jobTitle = '',
  jobDescription = '',
  positionName = '',
  positionDescription = '',
  email = '',
  phoneNumber = '',
  city = ''
}: AddAdvertPageProps) => {

  const [error, setError] = useState<Partial<AddAdvertPageProps>>({});
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [data, setData] = useState<AddAdvertPageProps>({
    jobTitle,
    jobDescription,
    positionName,
    positionDescription,
    email,
    phoneNumber,
    city
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setError(prev => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors: Partial<AddAdvertPageProps> = {};

    Object.entries(data).forEach(([key, value]) => {
      const val = value ?? '';
      if (val.trim() === '') {
        newErrors[key as keyof AddAdvertPageProps] = 'Šis laukas privalomas';
      }
    });

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      setAlertMessage('Prašome užpildyti visus laukus');
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/adverts/add-advert/`, data);
      setAlertMessage('Skelbimas sėkmingai paskelbtas!');
    } catch (error) {
      setAlertMessage('Klaida! Bandykite dar kartą.');
    }
  }

  return (
    <section className={styles.addAdvertPageWrapper}>

      <AlertDialog open={!!alertMessage} onOpenChange={() => setAlertMessage(null)}>
        <AlertDialogContent className={styles.alertDialogContent}>
          <AlertDialogHeader>
            <AlertDialogTitle
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: '2.4rem',
                textAlign: 'left',
                color: '#3835FF'
              }}>Dėmesio!</AlertDialogTitle>
            <AlertDialogDescription
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: '2.4rem',
                textAlign: 'left',
                color: '#222222'
              }}
            >{alertMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction style={{ padding: '12px', fontSize: '1.2rem', fontWeight: 500, cursor: 'pointer' }} onClick={() => setAlertMessage(null)}>Gerai</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className={styles.intro}>
        <h4>Ką norite paskelbti?</h4>
      </div>

      <div className={styles.nameWrapper}>
        <h5>Pavadinimas</h5>
        <input name='jobTitle' type="text" className={error.jobTitle ? styles.inputError : ''} placeholder='...' value={data.jobTitle} onChange={handleChange} onFocus={handleFocus} />
        {error.jobTitle && <span>{error.jobTitle}</span>}
      </div>

      <div className={styles.summaryWrapper}>
        <h5>Aprašymas</h5>
        <textarea name="jobDescription" id="jobDescription" className={error.jobDescription ? styles.inputError : ''} placeholder='...' value={data.jobDescription} onChange={handleChange} onFocus={handleFocus}></textarea>
        {error.jobDescription && <span>{error.jobDescription}</span>}
      </div>

      <h4>Kokio komandos nario ieškote?</h4>

      <div className={styles.nameWrapper}>
        <h5>Pozicijos pavadinimas</h5>
        <input name='positionName' type="text" className={error.positionName ? styles.inputError : ''} placeholder='...' value={data.positionName} onChange={handleChange} onFocus={handleFocus} />
        {error.positionName && <span>{error.positionName}</span>}
      </div>
      <div className={styles.summaryWrapper}>
        <h5>Pozicijos aprašymas</h5>
        <textarea name="positionDescription" id="positionDescription" className={error.positionDescription ? styles.inputError : ''} placeholder='...' value={data.positionDescription} onChange={handleChange} onFocus={handleFocus}></textarea>
        {error.positionDescription && <span>{error.positionDescription}</span>}
      </div>

      <div className={styles.contactsWrapper}>
        <h4>Jūsų kontaktai:</h4>
        <div className={`${styles.contactInput} ${error.email ? styles.inputError : ''}`}>
          <EmailLogo />
          <input name="email" type="email" placeholder='Jūsų el. paštas' value={data.email} onChange={handleChange} onFocus={handleFocus} />
        </div>
        {error.email && <span className={styles.error}>{error.email}</span>}
        <div className={`${styles.contactInput} ${error.phoneNumber ? styles.inputError : ''}`}>
          <PhoneLogo />
          <input name="phoneNumber" type="text" placeholder='Jūsų tel. nr,' value={data.phoneNumber} onChange={handleChange} onFocus={handleFocus} />
        </div>
        {error.phoneNumber && <span className={styles.error}>{error.phoneNumber}</span>}
        <div className={`${styles.contactInput} ${error.city ? styles.inputError : ''}`}>
          <LocationLogo />
          <input name="city" type="text" placeholder='Jūsų miestas' value={data.city} onChange={handleChange} onFocus={handleFocus} />
        </div>
        {error.city && <span className={styles.error}>{error.city}</span>}
      </div>

      <div className={styles.applyWrapper}>
        <Button text='Talpinti skelbimą' type={ButtonType.REGULAR} onClick={handleSubmit} />
      </div>
    </section >
  );
};

export default AddAdvertPage;