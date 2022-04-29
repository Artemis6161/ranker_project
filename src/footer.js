import React from 'react'
import img1 from "./img/full hd_transparent_logo_white.png"

import "./footer.css"
const Footer = () => {
  return (

    <footer class="footer-container d-flex justify-content-between p-sm-5 p-2" id="footer">
<div id="copy">
<a href="/">
<img src={img1} width="200px" height="50px" />{' '}
    </a>
    <p class="bold-15 mt-5 d-none d-sm-block">© RankerDao. All Rights Reserved 2022</p>
    <p class="text-white mt-3 footer-link d-block d-sm-none">© RankerDao. All Rights Reserved 2022</p></div>
  <div>
        <div class="row row-cols-2 gy-1 gy-lg-5">
        <div class="col">
            <a name="TELEGRAM" link="https://t.me/rankerdao" target="_blank" href="https://t.me/rankerdao" class="footer-link text-start text-white">TELEGRAM</a>
            </div>
            <div class="col">
                <a name="INVENTORY" link="https://rankerdao.com/axies/index.html" target="_blank"  href="https://rankerdao.com/axies/index.html" class="footer-link text-start text-white">INVENTORY</a>
                </div>
                <div class="col">
                    <a name="TWITTER" link="https://twitter.com/rankerdao" target="_blank"  href="https://twitter.com/rankerdao" class="footer-link text-start text-white">TWITTER</a>
                    </div>
                <div class="col">
                    <a name="$RANKER" link="/about" href="/about" class="footer-link text-start text-white">$RANKER</a></div><div class="col"><a name="DISCORD" link="http://discord.gg/rankerdao" target="_blank" rel="noopener noreferrer" href="http://discord.gg/rankerdao" class="footer-link text-start text-white">DISCORD</a>
                    </div>
                <div class="col">
                    <a name="MINT BADGE" link="/mint-badge" href="/mint-badge" class="footer-link text-start text-white">MINT BADGE</a></div><div class="col"><a name="INSTAGRAM" target="_blank" rel="noopener noreferrer" link="https://instagram.com/rankerdao?utm_medium=copy_link" href="https://instagram.com/rankerdao?utm_medium=copy_link" class="footer-link text-start text-white">INSTAGRAM</a>
                    </div>
                <div class="col">
                    <a name="LITEPAPER" link="[RNKR] Handout Page.pdf" download="" href="[RNKR] Handout Page.pdf" class="footer-link text-start text-white">LITEPAPER</a>
                </div>
            
                </div>
                </div>
               
                </footer> 


                
   
  )
}

export default Footer;




