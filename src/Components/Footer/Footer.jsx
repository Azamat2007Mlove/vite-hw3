import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="case">
                <div className="foot">
                    <div className="ftop">
                        <div className="tleft">
                        <h1>Посмотрите глазами работодателя</h1><br /><br />
                        <p>По результатам наших тестов вы получите <br /> отчёты, идентичные тем, что получает <br /> работодатель после реального теста. <br /> Это поможет вам оценить собственные силы <br /> в глазах будущего босса.</p>
                        <br /><br /><br />
                        <button>
                        Скачать отчеты
                        </button>
                        </div>
                        <div className="tright">
                            <img src="../../img/mac.png" alt="" />
                        </div>
                    </div>
                    <div className="fbottom">
                        <div className="fleft">
                            <p>Политика конфиденциальности</p><br />
                            <b>Copyright 2020 Q solutions</b>
                        </div>
                        <div className="fright">
                            <p>Пользовательское соглашение</p><br />
                            <b>Добрышин Антон +7 (999) 999 99 99</b>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer