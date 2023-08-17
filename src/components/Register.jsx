import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userMail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [district, setDistrict] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name,
            lastName,
            userMail,
            password,
            address,
            province,
            district,
            postCode,
            phoneNumber
        };
        addUser(user);
    }

    const addUser = (user) => {
        fetch('http://localhost:8080/api/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
                window.alert("Kaydınız başarıyla eklendi");
            });
    }

    return (
        <div className="modal fade" id="registermodal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-fullscreen" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="ti-close" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">İsim</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                                    <label htmlFor="lastName">Soyisim</label>
                                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" value={userMail} onChange={(e) => setEmail(e.target.value)} />

                                    <label htmlFor="password">Şifreniz</label>
                                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                
                                    <label htmlFor="phoneNumber">Telefon Numaranız</label>
                                    <input type="textarea" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                                    <label htmlFor="address">Adresiniz</label>
                                    <input type="textarea" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

                                    <label htmlFor="province">İl</label>
                                    <input type="text" id="province" value={province} onChange={(e) => setProvince(e.target.value)} />

                                    <label htmlFor="district">İlçe</label>
                                    <input type="text" id="district" value={district} onChange={(e) => setDistrict(e.target.value)} />

                                    <label htmlFor="postCode">Posta Kodu</label>
                                    <input type="text" id="postCode" value={postCode} onChange={(e) => setPostCode(e.target.value)} />

                                    <button type="submit">Kayıt Ol</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}
export default Register;

