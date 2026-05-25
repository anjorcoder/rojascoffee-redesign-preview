(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`./assets/`,t=[{title:`San Isidro`,origin:`Finca San Isidro`,tasting:`Chocolade · karamel · geel fruit`,price:`vanaf €11,50`,score:`86+ SCA`,image:`${e}26-Finca-San-Isidro-VK.jpg`,url:`https://rojascoffee.com/product/koffiebonen-san-isidro/`},{title:`Palo Grande`,origin:`Finca Palo Grande`,tasting:`Wijnachtig · sprankelend · fruitig`,price:`vanaf €11,50`,score:`Direct trade`,image:`${e}29-Finca-Palo-Grande-scaled.jpg`,url:`https://rojascoffee.com/product/koffiebonen-palo-grande/`},{title:`Grande & Isidro`,origin:`Duo proefpakket`,tasting:`Twee finca’s · één smaakreis`,price:`€22,50`,score:`Bestseller`,image:`${e}31-Van-KoffieBonen-tot-Familieband-Het-bijzondere-verhaal-van-Rojas-Specialty-Coffee.jpg`,url:`https://rojascoffee.com/product/proefpakket/`}],n=[[`01`,`Harvest`,`Rijpe koffiebessen worden met de hand geplukt in Huila, Colombia.`],[`02`,`Roast`,`Vers gebrand voor horeca, bedrijven en thuisbarista’s in Nederland.`],[`03`,`Serve`,`In Zwolle proef je dezelfde farm-to-cup lijn in de koffiebar.`]],r=document.querySelector(`#app`);r.innerHTML=`
  <div class="grain" aria-hidden="true"></div>
  <header class="nav-shell">
    <a class="brand" href="#top" aria-label="Rojas Specialty Coffee">
      <span class="brand-sigil">R</span>
      <span><strong>ROJAS</strong><small>Farm to cup atelier</small></span>
    </a>
    <nav class="nav-links" aria-label="Hoofdnavigatie">
      <a href="#collection">Collectie</a>
      <a href="#story">Herkomst</a>
      <a href="#bar">Coffee bar</a>
      <a href="#business">B2B</a>
    </nav>
    <a class="nav-order magnetic" href="https://rojascoffee.com/shop/">Order beans</a>
  </header>

  <main id="top">
    <section class="hero-luxury">
      <div class="hero-bg-word" aria-hidden="true">ROJAS</div>
      <div class="hero-copy reveal">
        <p class="kicker"><span></span> Direct-trade single estate coffee</p>
        <h1>Luxury coffee, rooted in family soil.</h1>
        <p class="hero-lead">Een cinematografische farm-to-cup ervaring voor Rojas Specialty Coffee: Colombiaanse finca’s, vers gebrande bonen, koffiebar Zwolle en eerlijke impact in één premium storefront.</p>
        <div class="hero-ctas">
          <a class="btn btn-gold" href="#collection">Ontdek collectie</a>
          <a class="btn btn-ghost" href="#story">Bekijk het verhaal</a>
        </div>
      </div>

      <div class="hero-stage reveal delay-1" aria-label="Premium koffie compositie">
        <div class="orbital-card origin-card">
          <small>Origin</small>
          <strong>Huila, Colombia</strong>
        </div>
        <div class="hero-product-card">
          <div class="product-halo"></div>
          <img src="${e}01-Our-story-burn-scaled.jpg" alt="Rojas familie en koffieplantage" />
          <div class="hero-product-meta">
            <span>Signature roast</span>
            <strong>From our farm to your cup</strong>
          </div>
        </div>
        <div class="orbital-card score-card">
          <small>Cupping</small>
          <strong>86+ SCA</strong>
        </div>
      </div>

      <aside class="vertical-social" aria-label="Social proof">
        <span>Fresh roasted</span>
        <span>Single estate</span>
        <span>80 families</span>
      </aside>
    </section>

    <section class="component-strip" aria-label="Belangrijkste acties">
      <a class="glass-pill" href="https://rojascoffee.com/shop/"><b>Shop</b><span>Koffiebonen bestellen</span></a>
      <a class="glass-pill" href="https://rojascoffee.com/contact/"><b>Private label</b><span>Offerte voor bedrijven</span></a>
      <a class="glass-pill" href="https://rojascoffee.com/bezoek-de-koffie-plantage/"><b>Experience</b><span>Bezoek de finca</span></a>
    </section>

    <section id="collection" class="collection section-pad">
      <div class="section-intro">
        <p class="kicker"><span></span> Curated collection</p>
        <h2>Geen standaard webshop-grid, maar een premium tasting room.</h2>
        <p>Component-geïnspireerde productkaarten met diepte, badges en duidelijke kooproutes — ontworpen als luxe koffie-ecommerce, niet als generieke WooCommerce homepage.</p>
      </div>
      <div class="product-showcase">
        ${t.map((e,t)=>`
          <article class="lux-product ${t===0?`is-featured`:``}">
            <a href="${e.url}" aria-label="Bekijk ${e.title}">
              <div class="lux-product-image">
                <img src="${e.image}" alt="${e.title}" />
                <span class="chip">${e.score}</span>
              </div>
              <div class="lux-product-body">
                <small>${e.origin}</small>
                <h3>${e.title}</h3>
                <p>${e.tasting}</p>
                <div><strong>${e.price}</strong><span>Bestel →</span></div>
              </div>
            </a>
          </article>
        `).join(``)}
      </div>
    </section>

    <section id="story" class="story-panel section-pad">
      <div class="story-visual reveal">
        <img src="${e}33-Landschap-koffie-plantage-scaled.jpg" alt="Koffieplantage landschap in Colombia" />
        <div class="map-pin">Finca San Isidro<br/><span>Huila · Colombia</span></div>
      </div>
      <div class="story-copy reveal delay-1">
        <p class="kicker"><span></span> Traceable by design</p>
        <h2>Een familieverhaal dat je kunt proeven.</h2>
        <p>Rojas verkoopt direct vanaf de eigen plantages. Dat geeft de site een zeldzaam sterk verhaal: kwaliteit, herkomst, transparantie en sociale impact hoeven niet bedacht te worden — ze zijn al echt.</p>
        <div class="metrics-grid">
          <div><strong>100+</strong><span>jaar familiekennis</span></div>
          <div><strong>80</strong><span>families in de regio</span></div>
          <div><strong>2</strong><span>single-estate finca’s</span></div>
          <div><strong>87</strong><span>SCA in coffee bar Zwolle</span></div>
        </div>
      </div>
    </section>

    <section class="ritual section-pad" aria-label="Proces">
      <div class="ritual-top">
        <p class="kicker"><span></span> Crop to cup</p>
        <h2>Een ritueel in drie scènes.</h2>
      </div>
      <div class="ritual-grid">
        ${n.map(([e,t,n])=>`
          <article class="ritual-card">
            <span>${e}</span>
            <h3>${t}</h3>
            <p>${n}</p>
          </article>
        `).join(``)}
      </div>
    </section>

    <section id="bar" class="bar-experience section-pad">
      <div class="bar-card">
        <img src="${e}02-sub-banner-1.jpg" alt="Rojas koffiebar sfeer" />
        <div class="bar-copy">
          <p class="kicker"><span></span> Zwolle flagship</p>
          <h2>Rojas Coffee Bar als merkervaring.</h2>
          <p>Aan de Luttekestraat 25 wordt de webshop tastbaar: specialty koffie, patisserie, lunch, drie verdiepingen en een mediterraan terras met uitzicht op de Peperbus.</p>
          <a class="btn btn-gold" href="https://rojascoffee.com/contact/">Plan je bezoek</a>
        </div>
      </div>
    </section>

    <section id="business" class="business-lab section-pad">
      <div class="section-intro narrow">
        <p class="kicker"><span></span> For restaurants & companies</p>
        <h2>Een private-label koffieprogramma dat premium voelt.</h2>
      </div>
      <div class="command-card">
        <div class="command-header"><span></span><span></span><span></span><b>Rojas B2B configurator</b></div>
        <div class="command-row"><span>01</span><strong>Kies finca</strong><em>Palo Grande / San Isidro / duo</em></div>
        <div class="command-row"><span>02</span><strong>Kies volume</strong><em>250g, 1kg of horeca-volume</em></div>
        <div class="command-row"><span>03</span><strong>Kies ritme</strong><em>Eenmalig of maandelijkse service</em></div>
        <a class="btn btn-ghost light" href="https://rojascoffee.com/contact/">Vraag offerte aan</a>
      </div>
    </section>
  </main>

  <footer class="footer-luxury">
    <div>
      <span class="brand-sigil">R</span>
      <h2>Rojas Specialty Coffee</h2>
      <p>Direct-trade koffie met een premium digitale beleving.</p>
    </div>
    <a href="tel:+31612726466">(+31) 6 12726466</a>
    <a href="https://rojascoffee.com/shop/">Shop bestaande website →</a>
  </footer>
`;var i=document.querySelector(`.nav-shell`);window.addEventListener(`scroll`,()=>{i.classList.toggle(`is-scrolled`,window.scrollY>16)});var a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.16});document.querySelectorAll(`.reveal, .lux-product, .ritual-card`).forEach(e=>a.observe(e));