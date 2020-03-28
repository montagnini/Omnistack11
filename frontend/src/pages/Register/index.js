import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Register() {
    const [name, setNameValue] = useState('');
    const [email, setEmailValue] = useState('');
    const [whatsapp, setWhatsappValue] = useState('');
    const [city, setCityValue] = useState('');
    const [uf, setUfValue] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try {
            const result = await api.post('ongs', data);

            alert(`Seu ID de Acesso: ${result.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadatro! Tente novamente.');
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BeTheHero" />
                    <h1> Cadastro </h1>
                    <p>Faça seu cadastro, entre na plataforma e
                         ajuda pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não possuo registro!
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        required="true"  
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setNameValue(e.target.value)}
                    />
                    <input
                        required="true"  
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={e => setEmailValue(e.target.value)}
                    />
                    <input
                        required="true"  
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsappValue(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            required="true" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCityValue(e.target.value)}
                        />
                        <input required="true"
                            placeholder="UF" 
                            maxLength={2} 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUfValue(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}