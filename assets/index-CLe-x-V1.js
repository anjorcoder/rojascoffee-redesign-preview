(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./assets/`,t=[{title:`San Isidro`,price:`€11,50`,roast:`Medium roast`,notes:[`Chocolate`,`Caramel`,`Yellow fruit`],rating:`4.9`,image:`${e}26-Finca-San-Isidro-VK.jpg`,url:`https://rojascoffee.com/product/koffiebonen-san-isidro/`},{title:`Palo Grande`,price:`€11,50`,roast:`Filter roast`,notes:[`Fruity`,`Winey`,`Bright`],rating:`4.8`,image:`${e}29-Finca-Palo-Grande-scaled.jpg`,url:`https://rojascoffee.com/product/koffiebonen-palo-grande/`},{title:`Duo Proefpakket`,price:`€22,50`,roast:`Tasting set`,notes:[`Two farms`,`Direct trade`,`Gift`],rating:`4.9`,image:`${e}31-Van-KoffieBonen-tot-Familieband-Het-bijzondere-verhaal-van-Rojas-Specialty-Coffee.jpg`,url:`https://rojascoffee.com/product/proefpakket/`},{title:`Barista Workshop`,price:`€75,00`,roast:`Experience`,notes:[`Crop to cup`,`Tasting`,`Zwolle`],rating:`4.8`,image:`${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg`,url:`https://rojascoffee.com/product/workshop-barista/`},{title:`Private Label`,price:`Offerte`,roast:`For business`,notes:[`Custom`,`Monthly`,`Fresh`],rating:`4.9`,image:`${e}32-DSC08869-2aa-scaled.jpg`,url:`https://rojascoffee.com/contact/`},{title:`Coffee Bar Beans`,price:`vanaf €11,50`,roast:`House roast`,notes:[`Zwolle`,`Fresh`,`SCA 87`],rating:`4.9`,image:`${e}02-sub-banner-1.jpg`,url:`https://rojascoffee.com/shop/`}],n=[[`✦`,`Freshly Roasted`,`Wekelijks vers gebrand`],[`♢`,`Direct Trade`,`Eerlijk vanaf familie-finca’s`],[`♕`,`Award Quality`,`86+ SCA specialty score`],[`✓`,`Fast Delivery`,`Veilig en snel in huis`]],r=document.querySelector(`#app`);r.innerHTML=`
  <header class="site-header">
    <a class="logo" href="#top">Rojasify<span>◎</span></a>
    <nav aria-label="Hoofdnavigatie">
      <a href="#shop">Shop</a>
      <a href="#why">About Us</a>
      <a href="#brew">Brew Guide</a>
      <a href="#wholesale">Wholesale</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="header-icons" aria-hidden="true"><span>⌕</span><span>▢</span><span>♡</span></div>
  </header>

  <main id="top">
    <section class="hero-reference">
      <div class="hero-title" aria-hidden="true">LUXURY COFFEE</div>
      <div class="hero-copy">
        <p class="eyebrow">Direct trade · Colombian specialty</p>
        <h1>Exceptional Coffee, Crafted for Everyday Luxury</h1>
        <p>Ethically sourced, small-batch roasted specialty coffee delivered fresh to your door — direct from the Rojas family farms.</p>
        <div class="actions">
          <a class="btn primary" href="https://rojascoffee.com/shop/">Shop Coffee</a>
          <a class="btn outline" href="#subscription">Start Subscription</a>
        </div>
      </div>
      <div class="hero-product-panel">
        <div class="pack-card">
          <img src="${e}26-Finca-San-Isidro-VK.jpg" alt="Rojas San Isidro koffiebonen" />
        </div>
        <div class="hero-mini-card">
          <span>86+ SCA</span>
          <strong>San Isidro</strong>
          <small>Chocolate · caramel · yellow fruit</small>
        </div>
      </div>
      <div class="cup-shot"><img src="${e}03-parallax-img.jpg" alt="Verse espresso" /></div>
    </section>

    <section id="why" class="why section-shell">
      <h2>Why Coffee Lovers Choose Rojas</h2>
      <div class="benefit-grid">
        ${n.map(([e,t,n])=>`
          <article>
            <span>${e}</span>
            <strong>${t}</strong>
            <small>${n}</small>
          </article>
        `).join(``)}
      </div>
    </section>

    <section id="shop" class="collection section-shell">
      <div class="section-title">
        <h2>Our Signature Coffee Collection</h2>
        <p>Explore single origins, experiences and business solutions crafted for every taste.</p>
      </div>
      <div class="gallery-wrap">
        <button class="gallery-btn prev" type="button" aria-label="Vorige producten">‹</button>
        <div class="product-gallery" aria-label="Horizontale productgalerij">
          ${t.map(e=>`
            <article class="product-card">
              <a href="${e.url}" aria-label="Bekijk ${e.title}">
                <div class="rating">★ ${e.rating}</div>
                <div class="product-img"><img src="${e.image}" alt="${e.title}" /></div>
                <h3>${e.title}</h3>
                <strong>${e.price}</strong>
                <p>${e.roast}</p>
                <ul>${e.notes.map(e=>`<li>${e}</li>`).join(``)}</ul>
              </a>
            </article>
          `).join(``)}
        </div>
        <button class="gallery-btn next" type="button" aria-label="Volgende producten">›</button>
      </div>
      <a class="wide-cta" href="https://rojascoffee.com/shop/">Shop All Coffee</a>
    </section>

    <section id="subscription" class="subscription">
      <div class="subscription-copy">
        <h2>Fresh Coffee. Delivered Automatically.</h2>
        <p>Enjoy freshly roasted coffee on your schedule. Save money, save time, and never run out of your favorite beans.</p>
        <a class="wide-cta yellow" href="https://rojascoffee.com/contact/">Start Subscription</a>
        <div class="ticks"><span>✓ Save 10% on every order</span><span>✓ Free shipping</span><span>✓ Flexible schedule</span><span>✓ Cancel anytime</span></div>
      </div>
      <div class="pour-image"><img src="${e}02-sub-banner-1.jpg" alt="Filterkoffie wordt gezet" /></div>
      <div class="kettle-row">
        <img src="${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg" alt="Roastery" />
        <img src="${e}09-Hugo-Perdomo-Tello-working-to-dry-the-coffee-beans-VK.jpg" alt="Koffiebonen drogen" />
      </div>
      <p class="subscription-note">Plus, if you choose an annual plan, we’ll send you a curated Crop-to-Cup tasting guide for free.</p>
    </section>

    <section id="brew" class="quality-band">
      <div class="quality-image"><img src="${e}01-Our-story-burn-scaled.jpg" alt="Rojas familie en koffieplantage" /></div>
      <div class="quality-copy">
        <h2>Our Commitment to Quality</h2>
        <p>At Rojas, we source exceptional beans directly from trusted family farms. Every batch is roasted with precision and passion, delivering consistent excellence in every cup.</p>
        <a class="wide-cta yellow" href="https://rojascoffee.com/our-story/">Learn More</a>
      </div>
    </section>

    <section class="testimonial section-shell">
      <h2>Real customers. Real coffee rituals.</h2>
      <p>“Colombiaanse koffie in overtreffende trap — heerlijk, traceerbaar en met een verhaal dat klopt.”</p>
    </section>
  </main>

  <footer id="contact" class="footer">
    <div class="footer-brand">
      <a class="logo" href="#top">Rojasify<span>◎</span></a>
      <p>Direct-trade specialty coffee van familie-finca’s in Colombia naar Zwolle, horeca en thuisbarista’s.</p>
    </div>
    <div>
      <h3>Explore</h3>
      <a href="#shop">Signature collection</a>
      <a href="#subscription">Subscription</a>
      <a href="#brew">Quality</a>
    </div>
    <div>
      <h3>Rojas</h3>
      <a href="https://rojascoffee.com/our-story/">Our story</a>
      <a href="https://rojascoffee.com/bezoek-de-koffie-plantage/">Visit the farm</a>
      <a href="https://rojascoffee.com/contact/">Wholesale</a>
    </div>
    <div>
      <h3>Contact</h3>
      <span>Luttekestraat 25, Zwolle</span>
      <a href="tel:+31612726466">(+31) 6 12726466</a>
      <a href="https://rojascoffee.com/shop/">Shop coffee →</a>
    </div>
  </footer>
`;var i=document.querySelectorAll(`.hero-copy, .hero-product-panel, .why h2, .benefit-grid article, .section-title, .product-card, .subscription-copy, .pour-image, .kettle-row img, .subscription-note, .quality-image, .quality-copy, .testimonial, .footer > div`);i.forEach((e,t)=>{e.classList.add(`reveal`),e.style.setProperty(`--reveal-delay`,`${Math.min(t%6,5)*70}ms`)});var a=document.querySelector(`.product-gallery`);document.querySelector(`.gallery-btn.prev`)?.addEventListener(`click`,()=>{a?.scrollBy({left:-340,behavior:`smooth`})}),document.querySelector(`.gallery-btn.next`)?.addEventListener(`click`,()=>{a?.scrollBy({left:340,behavior:`smooth`})});var o=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.12,rootMargin:`0px 0px -8% 0px`});i.forEach(e=>o.observe(e));var s=document.querySelector(`.hero-title`),c=document.querySelector(`.cup-shot`);window.addEventListener(`scroll`,()=>{let e=window.scrollY;s&&(s.style.transform=`translateY(${Math.min(e*.08,28)}px)`),c&&(c.style.transform=`translateY(${Math.min(e*-.05,0)}px)`)},{passive:!0});