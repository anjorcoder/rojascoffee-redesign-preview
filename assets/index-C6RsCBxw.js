(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/`,t=[{title:`San Isidro`,subtitle:`Gebalanceerd: chocolade, karamel en geel fruit`,price:`€11,50 — €34,95`,badge:`Single Estate`,image:`${e}26-Finca-San-Isidro-VK.jpg`,url:`https://rojascoffee.com/product/koffiebonen-san-isidro/`},{title:`Palo Grande`,subtitle:`Fruitig, wijnachtig en sprankelend zuur`,price:`€11,50 — €34,95`,badge:`Direct trade`,image:`${e}29-Finca-Palo-Grande-scaled.jpg`,url:`https://rojascoffee.com/product/koffiebonen-palo-grande/`},{title:`Proefpakket Grande & Isidro`,subtitle:`Twee finca’s, één duidelijke smaakreis`,price:`€22,50`,badge:`Bestseller`,image:`${e}31-Van-KoffieBonen-tot-Familieband-Het-bijzondere-verhaal-van-Rojas-Specialty-Coffee.jpg`,url:`https://rojascoffee.com/product/proefpakket/`},{title:`Workshop Barista`,subtitle:`Koffieproeverij & Crop to Cup ervaring`,price:`€75,00`,badge:`Experience`,image:`${e}21-Coffee-roasting-at-our-own-roastery-VK.jpg`,url:`https://rojascoffee.com/product/workshop-barista/`}],n=document.querySelector(`#app`);n.innerHTML=`
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Rojas Specialty Coffee home">
      <span class="brand-mark">R</span>
      <span><strong>Rojas</strong><small>Specialty Coffee</small></span>
    </a>
    <nav aria-label="Hoofdnavigatie">
      <a href="#bar">Coffee Bar</a>
      <a href="#shop">Shop</a>
      <a href="#impact">Impact</a>
      <a href="#business">B2B</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="https://rojascoffee.com/shop/">Bestel koffie</a>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow">Direct-trade • Single Estate • Colombia → Zwolle</p>
        <h1>Specialty coffee met familie, finca en impact in elke kop.</h1>
        <p class="lead">Rojas brengt vers gebrande koffie van de eigen familieplantages San Isidro en Palo Grande rechtstreeks naar restaurants, bedrijven, shops en koffieliefhebbers thuis.</p>
        <div class="hero-actions">
          <a class="button primary" href="https://rojascoffee.com/shop/">Shop koffiebonen</a>
          <a class="button secondary" href="#bar">Bezoek de coffee bar</a>
        </div>
        <div class="proof-row" aria-label="Belangrijkste voordelen">
          <span><strong>86+ SCA</strong> cuppingscore</span>
          <span><strong>80 families</strong> community impact</span>
          <span><strong>Vers</strong> gebrand</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="Koffieplantage fotografie">
        <img src="${e}01-Our-story-burn-scaled.jpg" alt="Rojas koffieboerderij en familie" />
        <div class="floating-card">
          <span>Signature</span>
          <strong>“From our farm to your cup”</strong>
        </div>
      </div>
    </section>

    <section class="marquee" aria-label="Kernwaarden">
      <span>Single Estate</span><span>Direct Trade</span><span>Fresh Roasted</span><span>Farm to Cup</span><span>Huila Colombia</span>
    </section>

    <section id="bar" class="split section-shell">
      <div class="image-card tall"><img src="${e}02-sub-banner-1.jpg" alt="Rojas koffiebeleving" /></div>
      <div class="copy-card accent-card">
        <p class="eyebrow">Nieuw in Zwolle</p>
        <h2>Rojas Specialty Coffee Bar aan de Luttekestraat 25.</h2>
        <p>In het hart van Zwolle, met uitzicht op de Peperbus, draait alles om ambacht, kwaliteit en samenzijn. Geniet van specialty koffie, patisserie van Meesterbakker Jan Bakt, lunch en een warm interieur over drie verdiepingen.</p>
        <ul class="checklist">
          <li>Colombiaanse specialty koffie, SCA 87</li>
          <li>Lunch, patisserie en mediterrane terrasbeleving</li>
          <li>Een plek voor proeven, ontmoeten en ontspannen</li>
        </ul>
      </div>
    </section>

    <section id="shop" class="section-shell product-section">
      <div class="section-heading">
        <p class="eyebrow">Webshop uitgelicht</p>
        <h2>Kies je finca, formaat en frequentie.</h2>
        <a href="https://rojascoffee.com/shop/">Bekijk volledige shop →</a>
      </div>
      <div class="product-grid">
        ${t.map(e=>`
          <article class="product-card">
            <a href="${e.url}" aria-label="Bekijk ${e.title}">
              <div class="product-image"><img src="${e.image}" alt="${e.title}" /><span>${e.badge}</span></div>
              <div class="product-body">
                <h3>${e.title}</h3>
                <p>${e.subtitle}</p>
                <div class="product-meta"><strong>${e.price}</strong><span>Bekijk opties</span></div>
              </div>
            </a>
          </article>
        `).join(``)}
      </div>
    </section>

    <section id="impact" class="impact section-shell">
      <div>
        <p class="eyebrow">Waarom Rojas</p>
        <h2>Een aankoop maakt direct verschil in Huila, Colombia.</h2>
      </div>
      <div class="impact-grid">
        <article><strong>01</strong><h3>Traceerbaar</h3><p>Van finca tot zak: San Isidro en Palo Grande zijn geen anonieme blends maar koffie met herkomst.</p></article>
        <article><strong>02</strong><h3>Familiebedrijf</h3><p>Meer dan 100 jaar kennis, passie en vakmanschap van familie Rojas.</p></article>
        <article><strong>03</strong><h3>Community</h3><p>Direct-trade helpt de koffieregio en ongeveer 80 families rondom de plantages.</p></article>
      </div>
    </section>

    <section id="business" class="business section-shell">
      <div class="business-copy">
        <p class="eyebrow">Voor bedrijven</p>
        <h2>Maak goede koffie het visitekaartje van je bedrijf.</h2>
        <p>Rojas levert aan restaurants, bedrijven, roasters en shops. Denk aan maandelijkse verse koffiebonen service, private label koffie en vrijblijvende offertes voor grotere volumes.</p>
        <a class="button primary" href="https://rojascoffee.com/contact/">Vraag offerte aan</a>
      </div>
      <div class="business-panel">
        <div><span>01</span><strong>Kies je koffie</strong><small>Palo Grande, San Isidro of allebei.</small></div>
        <div><span>02</span><strong>Kies hoeveelheid</strong><small>250g, 1000g of B2B volume.</small></div>
        <div><span>03</span><strong>Kies frequentie</strong><small>Eenmalig of terugkerende service.</small></div>
      </div>
    </section>

    <section class="experience section-shell">
      <div class="section-heading">
        <p class="eyebrow">Ervaringen</p>
        <h2>Van plantagebezoek tot barista workshop.</h2>
      </div>
      <div class="experience-grid">
        <a class="experience-card" href="https://rojascoffee.com/bezoek-de-koffie-plantage/">
          <img src="${e}33-Landschap-koffie-plantage-scaled.jpg" alt="Koffieplantage landschap" />
          <h3>Bezoek de koffieplantage</h3>
          <p>Een maatwerkreis voor koffieliefhebbers en barista’s: verblijf, ontdek en leer alle koffiegeheimen.</p>
        </a>
        <a class="experience-card" href="https://rojascoffee.com/product/workshop-barista/">
          <img src="${e}09-Hugo-Perdomo-Tello-working-to-dry-the-coffee-beans-VK.jpg" alt="Koffiebonen drogen op de finca" />
          <h3>Crop to Cup workshop</h3>
          <p>Leer proeven, zetten en begrijpen wat specialty coffee bijzonder maakt.</p>
        </a>
      </div>
    </section>

    <section class="quote section-shell">
      <blockquote>“Colombiaanse koffie is een van de lekkerste koffiesoorten ter wereld, maar deze van familia Rojas is echt in overtreffende trap heerlijk.”</blockquote>
      <p>Miguel en Hannah Osorio Castellanos</p>
    </section>
  </main>

  <footer id="contact" class="footer">
    <div>
      <strong>Rojas Specialty Coffee</strong>
      <p>Direct-trade Single Estate specialty coffee. Vers gebrand, transparant en met impact.</p>
    </div>
    <div>
      <span>Bel & bestel</span>
      <a href="tel:+31612726466">(+31) 6 12726466</a>
      <a href="https://rojascoffee.com/contact/">Contactformulier</a>
    </div>
    <div>
      <span>Locatie</span>
      <p>Luttekestraat 25, Zwolle</p>
    </div>
  </footer>
`;var r=document.querySelector(`.site-header`);window.addEventListener(`scroll`,()=>{r.classList.toggle(`is-scrolled`,window.scrollY>20)});