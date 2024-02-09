import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <>
        <nav>
            <div className="case">
                <div className="navbar">
                    <div className="left">
                        <img src="../../img/nlogo.png" alt="" />
                    </div>
                    <div className="right">
                        <button>Регистрация</button>
                        <h1>Вход</h1>
                    </div>
                </div>
                <div className="bot">
                    <div className="nleft">
                    <h1>Первая интеллектуальная платформа <br /> для подготовки к тестам <span>Talent Q</span></h1>
                    <b>от эксперта Антона Добрышина</b>
                    <br /><br /><br /><br /><br />
                    <div className="btns">
                        <div className="btn1">
                        <button>Начать сейчас ▶</button><br />
                        <i>Время - деньги</i>
                        </div>
                        <div className="btn2">
                        <button>Подробнее →</button><br />
                        <i>Формула успеха</i>
                        </div>
                    </div>
                    </div>
                    <div className="nright">
                        <img src="../../img/pc.png" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav