import React from 'react';
import '../App.css';
import './MainSection.css';
import { Button } from './Button';


function MainSection() {
    return (
        <div className="main-section">
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            
            <h1>UNISALAD</h1>
            <p>Uma comida leve e saudável para o dia a dia das pessoas.</p>
            <p>Use os botões abaixo para conhecer nosso cardapio virtual e venha se conectar com a UNI!</p>
            <div className='main-btn' >
                <a href="https://instadelivery.com.br/unisalad" target="_blank" rel="noreferrer">
               
                <Button className='btn'
                buttonStyle='btn-outline'
                buttonSize='large'
                >
                    FAÇA SEU PEDIDO
                </Button>

                </a>
                <a href="https://api.whatsapp.com/send?phone=5545999776682" target="_blank" rel="noreferrer">
                    <Button className='btns'
                        buttonStyle='btn-outline'
                        buttonSize='large'
                    >
                    WhatsApp
                </Button>
                </a>

                <a href="https://www.instagram.com/uni.salad/" target="_blank" rel="noreferrer">
                    <Button className='btns'
                        buttonStyle='btn-outline'
                        buttonSize='large'
                    >
                        Instagram
                    </Button>
                </a>

                <a href="https://www.ifood.com.br/delivery/foz-do-iguacu-pr/uni-salad-jardim-das-laranjeiras/6af16469-4fe9-4297-a143-5d53e4dbc853" target="_blank" rel="noreferrer">
                <Button className='btn'
                buttonStyle='btn-outline'
                buttonSize='large'
                >
                    IFOOD
                </Button>
                </a>
            </div>
        </div>
    )
}

export default MainSection
