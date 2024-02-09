import React from 'react'
import './aside.scss'

const Aside = () => {
  return (
    <>
        <aside>
            <div className="case">
                <div className="as">
                    <div className="ton">
                        <div className="lef">
                        <h1>Без паники!</h1><br />
                      <p>У нас есть план эвакуации <br /> из любой проблемной <br /> ситуации.</p>
                        </div>
                        <div className="rit">
                            <button>Прокачать реакцию</button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}

export default Aside