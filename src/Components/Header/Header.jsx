import React, { useState } from 'react'
import './header.scss'

const Header = () => {

  const [video, setVideo] = useState(0)

  function videoFunc() {
    if (video == 0) {
      setVideo(1)
    }else if (video == 2){
      setVideo(1)
    }else if (video == 3){
      setVideo(1)
    }else{
      setVideo(0)
    }
  }
  function videoFunc2() {
    if (video == 0) {
      setVideo(2)
    }else if (video == 1){
      setVideo(2)
    }else if (video == 3){
      setVideo(2)
    }else{
      setVideo(0)
    }
  }
  function videoFunc3() {
    if (video == 0) {
      setVideo(3)
    }else if (video == 1){
      setVideo(3)
    }else if (video == 2){
      setVideo(3)
    }else{
      setVideo(0)
    }
  }

  return (
    <>
      <header>
        <div className="case">
          <div className="parent">
            <div className="zon">
              <h1><span>Talent Q:</span> 6 шагов к успеху</h1>
            </div>
            <div className="video">
              <div className="v1">
                <b>Изучите видеоуроки</b>
                <iframe width="560" onClick={videoFunc} height="315"
                  src={video == 0 ? (
                    'https://www.youtube.com/embed/JDw0ubdcBvg?si=fa7Ff8XWKWlaTJXO'
                  ) : video == 1  ? (
                    'https://www.youtube.com/embed/krsBRQbOPQ4?si=77qyaIwHCQBzCl68'
                  ) : video == 2  ? (
                      'https://www.youtube.com/embed/zxYjTTXc-J8?si=onx0Vpw2O6jB1FmD'
                  ) : video == 3 ? (
                    'https://www.youtube.com/embed/lOKASgtr6kU?si=lL-hgg03suCmmREN'
                ) :  null}
                  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br />
              </div>
              <div className="v2">
                <div className="line">
                  <img src={video == 0 ? (
                    'https://i.ytimg.com/vi/0e3GPea1Tyg/sddefault.jpg'
                  ) : video == 1  ? (
                    'https://i.ytimg.com/vi/JDw0ubdcBvg/sddefault.jpg'
                    ) : video == 2 ? (
                      'https://i.ytimg.com/vi/0e3GPea1Tyg/sddefault.jpg'
                    ) : video == 3 ? (
                      'https://i.ytimg.com/vi/0e3GPea1Tyg/sddefault.jpg'
                    ) : null}  onClick={videoFunc}  alt="" />
                    <b>Как успевать <br />
                    в отведенное время?</b>
                </div>
                <div className="line">
                  <img src={video == 0 ? (
                    'https://i.ytimg.com/vi_webp/zxYjTTXc-J8/sddefault.webp'
                  ) : video == 2  ? (
                    'https://i.ytimg.com/vi/JDw0ubdcBvg/sddefault.jpg'
                    ) : video == 1 ? (
                      'https://i.ytimg.com/vi_webp/zxYjTTXc-J8/sddefault.webp'
                    ) : video == 3 ? (
                      'https://i.ytimg.com/vi_webp/zxYjTTXc-J8/sddefault.webp'
                    ) : null} alt=""   onClick={videoFunc2}/>
                  <b>Как успевать <br />
                    в отведенное время?</b>
                </div>
                <div className="line">
                  <img src={video == 0 ? (
                    'https://i.ytimg.com/vi/lOKASgtr6kU/sddefault.jpg'
                  ) : video == 3  ? (
                    'https://i.ytimg.com/vi/JDw0ubdcBvg/sddefault.jpg'
                    ) : video == 1 ? (
                      'https://i.ytimg.com/vi/lOKASgtr6kU/sddefault.jpg'
                    )  : video == 2 ? (
                      'https://i.ytimg.com/vi/lOKASgtr6kU/sddefault.jpg'
                    ) : null} alt=""  onClick={videoFunc3}/>
                  <b>Как успевать <br />
                    в отведенное время?</b>
                </div>
                <div className="line2">
                  <img src="../../img/micr.jpg" alt="" />
                  <h1>Об этом и не только расскажет <br /><span>практикующий эксперт Антон <br /> Добрышин. </span></h1>
                </div>
              </div>
            </div>
            <div className="hbot">
              <div className="hleft">
                <div className="cont">
                  <h1>Тест вашего <br /> работадателя</h1>
                  <img src="../../img/left.png" alt="" />
                </div>
                <div className="cont">
                  <img className='logo' src="../../img/hlogo.png" alt="" />
                  <img className='ri' src="../../img/right.png" alt="" />
                </div>
              </div>
              <div className="hright">
                <h1>Попробуйте <br /> реальные тесты</h1><br />
                <p>Наши и реальные тесты <br /> идентичны по сложности, <br /> тематике и формату <br /> вопросов.</p> <br />
                <button>Пройти тест <img src="../../img/op.png" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header