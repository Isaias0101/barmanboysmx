import React from 'react'

const Tabs = () => {
  return (
    <div>
  <div className='app'>
    <div className='app_inner'>
      <input checked='' id='tab-1' name='buttons' type='radio'/>
      <label for='tab-1'>
    
      </label>
      <input false='' id='tab-2' name='buttons' type='radio'/>
      <label for='tab-2'>
        <div className='app_inner__tab'>
          <h2>
            <i className='icon ion-android-alarm-clock'></i>
            Promo 3 Accesible
          </h2>
          <div className='tab_left'>
          <i className='icon ion-android-bar'></i>
            <div className='tab_left__image'>
            <i className='icon ion-android-bar'></i>
            </div>
          </div>
          <div className='tab_right'>
            <h3>Arctic Monkeys Live</h3>
            <h4>Monday - Wednesday</h4>
            <p>Music for your lug holes</p>
            <button>More information</button>
          </div>
        </div>
      </label>
      <input false='' id='tab-3' name='buttons' type='radio'/>
      <label for='tab-3'>
        <div className='app_inner__tab'>
          <h2>
          <i className='icon ion-android-bar'></i>
           Promo 2 Standar
          </h2>
          <div className='tab_left'>
          <i className='icon ion-android-bar'></i>
            <div className='tab_left__image'>
            <i className='icon ion-android-bar'></i>
            </div>
          </div>
          <div className='tab_right'>
            <h3>Steven Fry podcast</h3>
            <h4>Staurday - Sunday</h4>
            <p>Steven Fry says words</p>
            <button>More information</button>
          </div>
        </div>
      </label>
      <input false='' id='tab-4' name='buttons' type='radio'/>
      <label for='tab-4'>
        <div className='app_inner__tab'>
          <h2>
          <i className='icon ion-android-bar'></i>
            Promo 1 VIP
          </h2>
          <div className='tab_left'>
            <i className='big icon ion-android-bar'></i>
            <div className='tab_left__image'>
              <i className='icon ion-android-bar'></i>
            </div>
          </div>
          <div className='tab_right'>
            <h3>Massive event</h3>
            <h4>Monday - Friday</h4>
            <p>Some kind of music festival</p>
            <button>More information</button>
          </div>
        </div>
      </label>
      <br></br>


      <div></div>
     
    </div>
  </div>


    </div>
  )
}

export default Tabs