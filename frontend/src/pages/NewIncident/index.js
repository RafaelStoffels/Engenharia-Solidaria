import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
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

            navigate('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso. Tente novamente.')
        }
    }

    return (
        <div className='new-incident-container'>
            <div className='content'>
            <section>
                <img src={logoImg} alt="Engenharia Solidaria"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrrar um herói para resolver isso.</p>

                <Link className=".back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar
                </Link>
            </section>

            <form>
                <input 
                    placeholder='Título do caso'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea type='Descrição' 
                    placeholder='E-mail'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder='Valor em reais'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <button onClick={handleNewIncident} className='new-incident-button' type="submit">Cadastrar</button>
            </form>
            </div>
        </div>
    );
}