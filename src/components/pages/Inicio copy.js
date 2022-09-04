import React from 'react'
import im from './outpu.png'

const Inicio = () => {
  return (
    <div  >
      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v13.0" nonce="6jVGwWq6"></script>

      <img src={im} style={{display: 'flex',  justifyContent:'auto', alignItems:'center', margin: "auto"}} width="auto" height="auto" ></img>

      <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
    </div>
  )
}

export default Inicio