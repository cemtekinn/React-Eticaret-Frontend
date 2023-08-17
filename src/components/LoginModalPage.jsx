import React, { useState } from 'react';
import '../pages/LoginModal.css';

const LoginModalPage = ({ show, onClose, onLogin }) => {
  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const user = {
      userMail,
      password
    };

    fetch('http://localhost:8080/api/users/getall')
      .then(response => response.json())
      .then(users => {
        const foundUser = users.find(u => u.userMail === userMail && u.password === password);
        setIsLoading(false);
        if (foundUser) {
          setIsLoggedIn(true); 
          setName(foundUser.name); 
          onLogin(foundUser); 
          onClose();
        } else {
          setErrorMessage('Geçersiz kullanıcı adı veya şifre');
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
        setErrorMessage('Giriş yapılırken bir hata oluştu, lütfen tekrar deneyin.');
      });
  };

  return (
    <div id="loginModal" className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h5>Hoşgeldiniz | Giriş Yap</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}><span className="ti-close" aria-hidden="true"></span></button>
        </div>

        {isLoggedIn ? (
          <div className="success-message">
            <p>Giriş başarılı! Hoş geldin, {name}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Eposta:</label>
            <input type="text" value={userMail} onChange={(e) => setUserMail(e.target.value)} />

            <label>Şifre:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" disabled={isLoading}>{isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModalPage;
