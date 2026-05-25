(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./assets/`,t=[{slug:`san-isidro`,title:`San Isidro`,price:`€11,50`,roast:`Medium roast`,notes:[`Chocolate`,`Caramel`,`Yellow fruit`],rating:`4.9`,image:`${e}26-Finca-San-Isidro-VK.jpg`,story:`Een ronde Colombiaanse specialty coffee met warme chocolade, karamel en geel fruit. Gebrand voor dagelijks comfort zonder vlak te worden.`,specs:[`86+ SCA`,`Colombia`,`Espresso & filter`,`250g / 1kg`]},{slug:`palo-grande`,title:`Palo Grande`,price:`€11,50`,roast:`Filter roast`,notes:[`Fruity`,`Winey`,`Bright`],rating:`4.8`,image:`${e}29-Finca-Palo-Grande-scaled.jpg`,story:`Een levendige filterkoffie met fruitige zuren en een elegante, wijnachtige afdronk. Voor drinkers die helderheid zoeken.`,specs:[`Single origin`,`Light/medium`,`Filter`,`250g`]},{slug:`duo-proefpakket`,title:`Duo Proefpakket`,price:`€22,50`,roast:`Tasting set`,notes:[`Two farms`,`Direct trade`,`Gift`],rating:`4.9`,image:`${e}31-Van-KoffieBonen-tot-Familieband-Het-bijzondere-verhaal-van-Rojas-Specialty-Coffee.jpg`,story:`Twee Rojas-profielen naast elkaar: ideaal om herkomst, brandstijl en zetmethode thuis te vergelijken.`,specs:[`2 zakken`,`Gift-ready`,`Tasting notes`,`Vers gebrand`]},{slug:`barista-workshop`,title:`Barista Workshop`,price:`€75,00`,roast:`Experience`,notes:[`Crop to cup`,`Tasting`,`Zwolle`],rating:`4.8`,image:`${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg`,story:`Leer proeven, malen, doseren en extraheren in een compacte specialty coffee sessie in Zwolle.`,specs:[`Hands-on`,`Zwolle`,`Tasting`,`Voor beginners`]},{slug:`private-label`,title:`Private Label`,price:`Offerte`,roast:`For business`,notes:[`Custom`,`Monthly`,`Fresh`],rating:`4.9`,image:`${e}32-DSC08869-2aa-scaled.jpg`,story:`Een eigen koffielijn voor horeca, kantoren of retail: gebrand, verpakt en afgestemd op jouw merk.`,specs:[`Custom roast`,`Label support`,`Recurring supply`,`B2B`]},{slug:`coffee-bar-beans`,title:`Coffee Bar Beans`,price:`vanaf €11,50`,roast:`House roast`,notes:[`Zwolle`,`Fresh`,`SCA 87`],rating:`4.9`,image:`${e}02-sub-banner-1.jpg`,story:`De vertrouwde Rojas house roast voor espresso, cappuccino en dagelijks gebruik aan de bar.`,specs:[`House roast`,`Espresso`,`Fresh weekly`,`250g / 1kg`]}],n=[[`✦`,`Freshly Roasted`,`Wekelijks vers gebrand`],[`♢`,`Direct Trade`,`Eerlijk vanaf familie-finca’s`],[`♕`,`Award Quality`,`86+ SCA specialty score`],[`✓`,`Fast Delivery`,`Veilig en snel in huis`]],r=[[`#/shop`,`Shop`],[`#/about`,`About Us`],[`#/brew-guide`,`Brew Guide`],[`#/wholesale`,`Wholesale`],[`#/contact`,`Contact`]],i=document.querySelector(`#app`),a=e=>`
  <article class="product-card">
    <a href="#/product/${e.slug}" aria-label="Bekijk ${e.title}">
      <div class="rating">★ ${e.rating}</div>
      <div class="product-img"><img src="${e.image}" alt="${e.title}" /></div>
      <h3>${e.title}</h3>
      <strong>${e.price}</strong>
      <p>${e.roast}</p>
      <ul>${e.notes.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </a>
  </article>
`,o=()=>`
  <header class="site-header">
    <a class="logo" href="#/">Rojasify<span>◎</span></a>
    <nav aria-label="Hoofdnavigatie">
      ${r.map(([e,t])=>`<a href="${e}">${t}</a>`).join(``)}
    </nav>
    <div class="header-icons"><a href="#/shop" aria-label="Zoeken">⌕</a><a href="#/shop" aria-label="Winkelwagen">▢</a><a href="#/contact" aria-label="Favorieten">♡</a></div>
  </header>
`,s=()=>`
  <footer id="contact" class="footer">
    <div class="footer-brand">
      <a class="logo" href="#/">Rojasify<span>◎</span></a>
      <p>Direct-trade specialty coffee van familie-finca’s in Colombia naar Zwolle, horeca en thuisbarista’s.</p>
    </div>
    <div>
      <h3>Explore</h3>
      <a href="#/shop">Signature collection</a>
      <a href="#/subscription">Subscription</a>
      <a href="#/brew-guide">Brew guide</a>
    </div>
    <div>
      <h3>Rojas</h3>
      <a href="#/about">Our story</a>
      <a href="#/about#farm">Visit the farm</a>
      <a href="#/wholesale">Wholesale</a>
    </div>
    <div>
      <h3>Contact</h3>
      <span>Luttekestraat 25, Zwolle</span>
      <a href="tel:+31612726466">(+31) 6 12726466</a>
      <a href="#/contact">Plan a tasting →</a>
    </div>
  </footer>
`,c=e=>`${o()}<main id="top">${e}</main>${s()}`,l=()=>c(`
  <section class="hero-reference">
    <div class="hero-title" aria-hidden="true">LUXURY COFFEE</div>
    <div class="hero-copy">
      <p class="eyebrow">Direct trade · Colombian specialty</p>
      <h1>Exceptional Coffee, Crafted for Everyday Luxury</h1>
      <p>Ethically sourced, small-batch roasted specialty coffee delivered fresh to your door — direct from the Rojas family farms.</p>
      <div class="actions">
        <a class="btn primary" href="#/shop">Shop Coffee</a>
        <a class="btn outline" href="#/subscription">Start Subscription</a>
      </div>
    </div>
    <div class="hero-product-panel">
      <a class="pack-card" href="#/product/san-isidro"><img src="${e}26-Finca-San-Isidro-VK.jpg" alt="Rojas San Isidro koffiebonen" /></a>
      <a class="hero-mini-card" href="#/product/san-isidro">
        <span>86+ SCA</span>
        <strong>San Isidro</strong>
        <small>Chocolate · caramel · yellow fruit</small>
      </a>
    </div>
    <div class="cup-shot"><img src="${e}03-parallax-img.jpg" alt="Verse espresso" /></div>
  </section>

  <section class="why section-shell">
    <h2>Why Coffee Lovers Choose Rojas</h2>
    <div class="benefit-grid">
      ${n.map(([e,t,n])=>`<article><span>${e}</span><strong>${t}</strong><small>${n}</small></article>`).join(``)}
    </div>
  </section>

  <section class="collection section-shell">
    <div class="section-title">
      <h2>Our Signature Coffee Collection</h2>
      <p>Explore single origins, experiences and business solutions crafted for every taste.</p>
    </div>
    <div class="gallery-wrap">
      <button class="gallery-btn prev" type="button" aria-label="Vorige producten">‹</button>
      <div class="product-gallery" aria-label="Horizontale productgalerij">${t.map(a).join(``)}</div>
      <button class="gallery-btn next" type="button" aria-label="Volgende producten">›</button>
    </div>
    <a class="wide-cta" href="#/shop">Shop All Coffee</a>
  </section>

  <section class="subscription">
    <div class="subscription-copy">
      <h2>Fresh Coffee. Delivered Automatically.</h2>
      <p>Enjoy freshly roasted coffee on your schedule. Save money, save time, and never run out of your favorite beans.</p>
      <a class="wide-cta yellow" href="#/subscription">Start Subscription</a>
      <div class="ticks"><span>✓ Save 10% on every order</span><span>✓ Free shipping</span><span>✓ Flexible schedule</span><span>✓ Cancel anytime</span></div>
    </div>
    <div class="pour-image"><img src="${e}02-sub-banner-1.jpg" alt="Filterkoffie wordt gezet" /></div>
    <div class="kettle-row"><img src="${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg" alt="Roastery" /><img src="${e}09-Hugo-Perdomo-Tello-working-to-dry-the-coffee-beans-VK.jpg" alt="Koffiebonen drogen" /></div>
    <p class="subscription-note">Plus, if you choose an annual plan, we’ll send you a curated Crop-to-Cup tasting guide for free.</p>
  </section>

  <section class="quality-band">
    <div class="quality-image"><img src="${e}01-Our-story-burn-scaled.jpg" alt="Rojas familie en koffieplantage" /></div>
    <div class="quality-copy">
      <h2>Our Commitment to Quality</h2>
      <p>At Rojas, we source exceptional beans directly from trusted family farms. Every batch is roasted with precision and passion, delivering consistent excellence in every cup.</p>
      <a class="wide-cta yellow" href="#/about">Learn More</a>
    </div>
  </section>

  <section class="testimonial section-shell">
    <h2>Real customers. Real coffee rituals.</h2>
    <p>“Colombiaanse koffie in overtreffende trap — heerlijk, traceerbaar en met een verhaal dat klopt.”</p>
  </section>
`),u=(e,t,n,r)=>`
  <section class="sub-hero">
    <div><p class="eyebrow">${e}</p><h1>${t}</h1><p>${n}</p></div>
    <img src="${r}" alt="${t}" />
  </section>
`,d=()=>c(`
  ${u(`Signature collection`,`Shop specialty coffee`,`Alle Rojas producten in één luxe storefront, met single origins, proefpakketten, workshops en zakelijke koffie.`,`${e}02-sub-banner-1.jpg`)}
  <section class="page-section">
    <div class="shop-grid">${t.map(a).join(``)}</div>
  </section>
`),f=()=>c(`
  ${u(`Family farms · Zwolle roastery`,`From Colombian roots to daily rituals`,`Rojas verbindt familie, herkomst en specialty roasting. Iedere koffie vertelt waar hij vandaan komt en waarom hij zo smaakt.`,`${e}01-Our-story-burn-scaled.jpg`)}
  <section class="story-grid page-section" id="farm">
    <article><span>01</span><h2>Direct trade</h2><p>De keten blijft kort: van vertrouwde finca’s naar de branderij, met aandacht voor kwaliteit en eerlijke relaties.</p></article>
    <article><span>02</span><h2>Small batch roasting</h2><p>Iedere batch wordt gebrand om zoetheid, balans en herkenbare smaaknotities naar voren te halen.</p></article>
    <article><span>03</span><h2>Community</h2><p>In Zwolle brengt Rojas thuisbarista’s, horeca en koffieliefhebbers samen rondom betere koffie.</p></article>
  </section>
`),p=()=>c(`
  ${u(`Brew guide`,`Better coffee starts with rhythm`,`Een compacte gids voor espresso, filter en tasting zodat iedere zak bonen thuis consistent smaakt.`,`${e}03-parallax-img.jpg`)}
  <section class="guide-steps page-section">
    ${[`Gebruik vers water en spoel je filter voor.`,`Maal vlak voor het zetten en houd je recept consistent.`,`Begin met 60g koffie per liter voor filter, of 18g in / 36g uit voor espresso.`,`Proef, noteer en pas één variabele tegelijk aan.`].map((e,t)=>`<article><span>0${t+1}</span><p>${e}</p></article>`).join(``)}
  </section>
`),m=()=>c(`
  ${u(`Wholesale · Private label`,`Coffee programs for cafés, offices and brands`,`Van huisblend tot private label: Rojas helpt bedrijven met verse specialty coffee, training en terugkerende levering.`,`${e}32-DSC08869-2aa-scaled.jpg`)}
  <section class="page-section split-cards">
    <article><h2>For horeca</h2><p>Consistente espresso, training, receptuur en levering voor bars en restaurants.</p><a class="wide-cta" href="#/contact">Vraag offerte aan</a></article>
    <article><h2>For brands</h2><p>Custom roast, verpakking en storytelling voor een eigen premium koffielijn.</p><a class="wide-cta" href="#/contact">Start project</a></article>
  </section>
`),h=()=>c(`
  ${u(`Subscription`,`Never run out of fresh coffee`,`Kies jouw ritme, smaakprofiel en hoeveelheid. Wij branden vers en leveren wanneer jij wilt.`,`${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg`)}
  <section class="page-section plan-grid">
    ${[`Every 2 weeks`,`Monthly`,`Office plan`].map((e,t)=>`<article><h2>${e}</h2><p>${[`Voor fanatieke thuisbarista’s.`,`Voor dagelijks comfort zonder voorraadstress.`,`Voor teams, horeca en zakelijke ritmes.`][t]}</p><a class="wide-cta" href="#/contact">Selecteer plan</a></article>`).join(``)}
  </section>
`),g=()=>c(`
  ${u(`Contact`,`Plan a tasting or ask for advice`,`Kom langs in Zwolle, vraag advies voor bonen of start een wholesale/private-label gesprek.`,`${e}05-sub-banner-2.jpg`)}
  <section class="page-section contact-panel">
    <div><h2>Rojas Specialty Coffee</h2><p>Luttekestraat 25, Zwolle</p><p>(+31) 6 12726466</p><p>Voor shop, subscription, workshops en zakelijke koffie.</p></div>
    <form><label>Naam<input placeholder="Jouw naam" /></label><label>E-mail<input placeholder="naam@email.nl" /></label><label>Vraag<textarea placeholder="Waar kunnen we mee helpen?"></textarea></label><button class="wide-cta" type="button">Verstuur aanvraag</button></form>
  </section>
`),_=e=>{let n=t.find(t=>t.slug===e)||t[0];return c(`
    <section class="product-detail">
      <div class="product-detail-image"><img src="${n.image}" alt="${n.title}" /></div>
      <div class="product-detail-copy">
        <p class="eyebrow">${n.roast}</p>
        <h1>${n.title}</h1>
        <strong>${n.price}</strong>
        <p>${n.story}</p>
        <ul>${n.specs.map(e=>`<li>${e}</li>`).join(``)}</ul>
        <div class="actions"><a class="btn primary" href="#/contact">Reserve / bestel</a><a class="btn outline dark" href="#/shop">Terug naar shop</a></div>
      </div>
    </section>
  `)},v={"/":l,"/shop":d,"/about":f,"/brew-guide":p,"/wholesale":m,"/subscription":h,"/contact":g};function y(){return window.location.hash.replace(/^#/,``).split(`#`)[0]||`/`}function b(){let e=y();e.startsWith(`/product/`)?i.innerHTML=_(e.replace(`/product/`,``)):i.innerHTML=(v[e]||l)(),x(),window.scrollTo({top:0,behavior:`instant`})}function x(){let e=document.querySelectorAll(`.hero-copy, .hero-product-panel, .why h2, .benefit-grid article, .section-title, .product-card, .subscription-copy, .pour-image, .kettle-row img, .subscription-note, .quality-image, .quality-copy, .testimonial, .footer > div, .sub-hero > *, .page-section > *, .product-detail > *`);e.forEach((e,t)=>{e.classList.add(`reveal`),e.style.setProperty(`--reveal-delay`,`${Math.min(t%6,5)*70}ms`)});let t=document.querySelector(`.product-gallery`);document.querySelector(`.gallery-btn.prev`)?.addEventListener(`click`,()=>t?.scrollBy({left:-340,behavior:`smooth`})),document.querySelector(`.gallery-btn.next`)?.addEventListener(`click`,()=>t?.scrollBy({left:340,behavior:`smooth`}));let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.12,rootMargin:`0px 0px -8% 0px`});e.forEach(e=>n.observe(e));let r=document.querySelector(`.hero-title`),i=document.querySelector(`.cup-shot`);window.addEventListener(`scroll`,()=>{let e=window.scrollY;r&&(r.style.transform=`translateY(${Math.min(e*.08,28)}px)`),i&&(i.style.transform=`translateY(${Math.min(e*-.05,0)}px)`)},{passive:!0})}window.addEventListener(`hashchange`,b),b();