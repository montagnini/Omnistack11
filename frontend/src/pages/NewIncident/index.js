import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css'
export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            alert('Incidente cadastrado com sucesso!');
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar novo incidente, tente novamente');
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BeTheHero" />
                    <h1> Cadastrar Novo Caso </h1>
                    <p>Descreva o caso detalhadamente para encontrar um
                    herói que possa resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar para página da ONG
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        required='true'
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />

                    <input
                        type='number'
                        placeholder="Valor em R$"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}