import { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    // Run the original JS
    try {
      
    const siteConfig = {
      hotel: {
        name: "Aalayaa",
        tagline: "Authentic Taste of Tradition",
        foundedDate: "14 November 2024",
        servingSince: "2024",
        type: "Pure Veg Restaurant",
        location: "Chennai, India",
        phone: "+91 44 4000 2024",
        email: "hello@aalayaa.in",
        hours: "Daily, 7:00 AM - 10:30 PM"
      },
      branding: {
        primaryColor: "#64C828",
        secondaryColor: "#387B2E",
        accentColor: "#2C2C2C",
        backgroundColor: "#FFFFFF",
        fontHeading: "Playfair Display",
        fontBody: "Poppins"
      },
      sections: {
        home: true,
        about: true,
        menu: true,
        signatureDishes: true,
        gallery: true,
        testimonials: true,
        contact: true
      },
      features: {
        animations: true,
        stickyNavbar: true,
        menuFilter: true,
        imageHoverEffects: true,
        parallaxEffect: true
      },
      menuCategories: ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Sweets"],
      legacyScript: "Founded on 14th November 2024, Aalayaa is more than just a restaurant - it is a celebration of heritage, purity, and timeless flavors. Inspired by the traditions of South Indian kitchens, every dish at Aalayaa carries the warmth of home-cooked meals and the richness of cultural legacy. From handpicked ingredients to age-old recipes, we bring you an experience that connects generations through food. We now proudly serve our guests across 2 outlets in Chennai."
    };

    const content = {
      hero: {
        titleLines: ["A premium dine-in destination", "for timeless vegetarian flavours.", "Crafted for Chennai."],
        summary: "Aalayaa is designed as a brand-first vegetarian restaurant website - one that celebrates identity, signature dishes, premium ambience, and the warmth of dining in. From crisp breakfast favourites to indulgent house specials, every visual is tuned to feel elegant, rooted, and memorable.",
        pills: [
          { label: "Founded", value: "14 Nov 2024" },
          { label: "Cuisine", value: "Pure Veg Classics" },
          { label: "Location", value: "Chennai" }
        ],
        stats: [
          { value: "5", label: "Display-only menu categories" },
          { value: "100%", label: "Pure vegetarian kitchen" },
          { value: "7AM", label: "Fresh dine-in breakfast service" }
        ],
        showcase: {
          title: "Signature Spotlight",
          subtitle: "Aalayaa Specials",
          name: "Veg Mutton Chukka",
          description: "Slow-finished with layered spice, rustic texture, and the kind of bold South Indian character that lingers long after the meal.",
          image: "./assets/site/dish-mutton-chukka.jpg",
          tags: ["Chef favourite", "Signature dish", "House special"]
        }
      },
      about: {
        heading: "A brand-led restaurant experience with a fresh beginning.",
        description: "Aalayaa is shaped around strong identity cues: elegant presentation, category-led menu browsing, premium ambience, visible vegetarian trust marks, and storytelling rooted in tradition.",
        valueProps: [
          {
            icon: "01",
            title: "Tradition + Modern Dining",
            description: "Classic South Indian warmth presented in a polished, premium format suited for family dining and everyday comfort."
          },
          {
            icon: "02",
            title: "Hygiene First",
            description: "Clean service, quality ingredients, and a presentation language that signals care before the first bite even arrives."
          },
          {
            icon: "03",
            title: "Authentic Taste",
            description: "Every section of the menu is built to feel recognisable, generous, and rooted in the flavours people return for."
          }
        ]
      },
      signatureDishes: [
        {
          name: "Veg Vanjaram Fish Fry",
          price: "",
          description: "Outside layer with Sea Black Stone Flower, Mashed Soya and Marinated Mushroom with South Indian Spices, slightly cooked with oil tawa fry.",
          image: "./assets/site/dish-sea-fire.jpg",
          tags: ["Fish Fry", "Signature"]
        },
        {
          name: "Veg Fish Finger",
          price: "",
          description: "Tofu, Cauliflower, Vegetable Protein, Cassava tuber Cooked With Oil Fry.",
          image: "./assets/site/dish-crispy-strips.jpg",
          tags: ["Starter", "Crispy"]
        },
        {
          name: "Veg Prawn 65",
          price: "",
          description: "Cassava Tuber, Potato Starch, Textured Soy, Konjac Powder.",
          image: "./assets/site/dish-chilli-bites.jpg",
          tags: ["Prawns", "Crispy"]
        },
        {
          name: "Veg Prawn Pepper Fry",
          price: "",
          description: "Yummy, Crispy and Tasty Pepper Fry.",
          image: "./assets/site/dish-pepper-fry.jpg",
          tags: ["Prawns", "Spicy"]
        },
        {
          name: "Veg Mutton Chukka",
          price: "",
          description: "Soy Flour, Soya Protein Isolate, Mashed Mushroom.",
          image: "./assets/site/dish-mutton-chukka.jpg",
          tags: ["Mutton", "Spicy"]
        },
        {
          name: "Veg Mutton Kola Urundai",
          price: "",
          description: "Thick, Tangy and Tempting plant-based Mutton Kola Urundai.",
          image: "./assets/site/dish-mushroom-roast.jpg",
          tags: ["Mutton", "Starter"]
        },
        {
          name: "Veg Mutton Kheema",
          price: "",
          description: "Rich and aromatic plant-based Mutton Kheema.",
          image: "./assets/site/dish-sea-fire.jpg",
          tags: ["Mutton", "Rich"]
        },
        {
          name: "Veg Chicken 65",
          price: "",
          description: "Plant based soy, wheat, rice are used.",
          image: "./assets/site/dish-crispy-strips.jpg",
          tags: ["Chicken", "Crispy"]
        },
        {
          name: "Veg Chicken Palipalayam",
          price: "",
          description: "Authentic taste of plant-based chicken Palipalayam.",
          image: "./assets/site/dish-chilli-bites.jpg",
          tags: ["Chicken", "Spicy"]
        },
        {
          name: "Veg Chicken Pepper Fry",
          price: "",
          description: "Pepper-forward plant-based chicken preparation.",
          image: "./assets/site/dish-pepper-fry.jpg",
          tags: ["Chicken", "Pepper"]
        },
        {
          name: "Veg Chicken Chettinadu Gravy",
          price: "",
          description: "Classic South Indian warmth presented in a polished, premium format.",
          image: "./assets/site/dish-mutton-chukka.jpg",
          tags: ["Chicken", "Gravy"]
        },
        {
          name: "Veg Chicken Kheema",
          price: "",
          description: "Generous and rooted in the flavours people return for.",
          image: "./assets/site/dish-mushroom-roast.jpg",
          tags: ["Chicken", "Kheema"]
        },
        {
          name: "Veg Chicken Lolipop",
          price: "",
          description: "Crunchy golden bites served hot.",
          image: "./assets/site/dish-crispy-strips.jpg",
          tags: ["Chicken", "Starter"]
        },
        {
          name: "Veg Liver Pepper Fry",
          price: "",
          description: "Chana dal, Green Grams are endrosed firm structure, Mushroom, Lentils, Walnut.",
          image: "./assets/site/dish-pepper-fry.jpg",
          tags: ["Liver", "Pepper"]
        },
        {
          name: "Veg Liver Pallipalayam",
          price: "",
          description: "Classic Pallipalayam style plant-based liver.",
          image: "./assets/site/dish-chilli-bites.jpg",
          tags: ["Liver", "Spicy"]
        }
      ],
      menu: [
        {
          name: "Special Ghee Masala Dosa",
          category: "Breakfast",
          image: "./assets/site/dish-crispy-strips.jpg",
          description: "Golden crisp dosa roasted in pure ghee, served with our signature sambar and three chutneys.",
          tags: ["Classic", "Breakfast"]
        },
        {
          name: "Idli Vada Combo",
          category: "Breakfast",
          image: "./assets/site/dish-sea-fire.jpg",
          description: "Soft fluffy idlis paired with a crispy medu vada, immersed in hot sambar.",
          tags: ["Popular", "Breakfast"]
        },
        {
          name: "South Indian Special Meals",
          category: "Lunch",
          image: "./assets/site/dish-mutton-chukka.jpg",
          description: "A grand feast featuring rice, sambar, rasam, kootu, poriyal, special kuzhambu, appalam, and sweet.",
          tags: ["Lunch", "Traditional"]
        },
        {
          name: "Bisi Bele Bath",
          category: "Lunch",
          image: "./assets/site/dish-chilli-bites.jpg",
          description: "Aromatic lentil and rice dish cooked with mixed vegetables, ghee, and roasted spices.",
          tags: ["Lunch", "Spicy"]
        },
        {
          name: "Chappathi with Veg Kurma",
          category: "Dinner",
          image: "./assets/site/dish-crispy-strips.jpg",
          description: "Soft whole wheat chappathis served with a rich, coconut-based mixed vegetable kurma.",
          tags: ["Dinner", "Light"]
        },
        {
          name: "Ghee Onion Rava Dosa",
          category: "Dinner",
          image: "./assets/site/dish-sea-fire.jpg",
          description: "Crispy semolina dosa laced with onions, green chillies, and roasted in premium ghee.",
          tags: ["Dinner", "Crispy"]
        },
        {
          name: "Parotta with Salna",
          category: "Dinner",
          image: "./assets/site/dish-mutton-chukka.jpg",
          description: "Flaky, layered South Indian parottas served with a deeply flavourful empty salna.",
          tags: ["Dinner", "Street Style"]
        },
        {
          name: "Chukka Bites Basket",
          category: "Snacks",
          image: "./assets/site/dish-chilli-bites.jpg",
          description: "Crispy, shareable, and packed with masala notes for teatime cravings and table-sharing moments.",
          tags: ["Snacks", "Shareable"]
        },
        {
          name: "Kesari Delight",
          category: "Sweets",
          image: "./assets/site/dish-sea-fire.jpg",
          description: "Traditional sweet notes reimagined with a restaurant-finish glaze and celebratory garnish cues.",
          tags: ["Sweet", "Festival favourite"]
        }
      ],
      testimonials: [
        {
          quote: "The menu has the confidence of a classic Chennai veg restaurant, but the look and plating feel more premium and current.",
          author: "Family Dining Guest"
        },
        {
          quote: "Aalayaa feels designed for trust. The clean presentation, warm colours, and straightforward menu sections make the place feel dependable instantly.",
          author: "Weekend Brunch Visitor"
        },
        {
          quote: "The signature dishes have the kind of bold flavour and memorable finish that make you recommend the restaurant to others right away.",
          author: "First-Time Customer"
        }
      ],
      contact: [
        { label: "Main Branch", value: "Aalayaa, Chennai, Tamil Nadu, India" },
        { label: "Second Outlet", value: "Hotel Aalayaa Veg Restaurant, Chennai" },
        { label: "Phone", value: siteConfig.hotel.phone, href: "tel:+914440002024" },
        { label: "Email", value: siteConfig.hotel.email, href: "mailto:hello@aalayaa.in" },
        { label: "Hours", value: siteConfig.hotel.hours }
      ]
    };

    const setBrandVariables = () => {
      const root = document.documentElement;
      root.style.setProperty("--primary", siteConfig.branding.primaryColor);
      root.style.setProperty("--secondary", siteConfig.branding.secondaryColor);
      root.style.setProperty("--accent", siteConfig.branding.accentColor);
      root.style.setProperty("--surface", siteConfig.branding.backgroundColor);
    };

    const renderNav = () => {
      const nav = document.getElementById("nav");
      const links = [
        { href: "#top", label: "Home" },
        { href: "#about-section", label: "About" },
        { href: "#menu", label: "Menu" },
        { href: "#signature_dishes", label: "Signature Dishes" },
        { href: "#gallery", label: "Gallery" },
        { href: "#contact", label: "Contact" }
      ];

      nav.innerHTML = `
        <a class="brand" href="#top" aria-label="${siteConfig.hotel.name} home">
          <img class="brand-mark" src="./assets/logo-aalayaa.png" alt="${siteConfig.hotel.name} logo">
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          ${links.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
        </nav>
      `;
    };

    const renderHero = () => {
      const heroCopy = document.getElementById("hero-copy");
      const heroShowcase = document.getElementById("hero-showcase");
      const { hero } = content;

      heroCopy.innerHTML = `
        <span class="eyebrow">${siteConfig.hotel.type}</span>
        <div class="hero-brand-lockup">
          <p class="hero-brand-name">${siteConfig.hotel.name}</p>
          <p class="hero-tagline">${siteConfig.hotel.tagline}</p>
        </div>
        <h1>
          <span>${hero.titleLines[0]}</span>
          <span>${hero.titleLines[1]}</span>
          <span>${hero.titleLines[2]}</span>
        </h1>
        <p>${hero.summary}</p>
        <div class="hero-meta">
          ${hero.pills.map((pill) => `
            <div class="meta-pill">
              <strong>${pill.label}:</strong>
              <span>${pill.value}</span>
            </div>
          `).join("")}
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Visit Us Today</a>
          <a class="button button-secondary" href="#menu">Explore Our Menu</a>
          <a class="button button-ghost" href="#signature_dishes">Discover Our Taste</a>
        </div>
        <div class="hero-stats">
          ${hero.stats.map((stat) => `
            <div class="stat">
              <strong>${stat.value}</strong>
              <span>${stat.label}</span>
            </div>
          `).join("")}
        </div>
      `;

      heroShowcase.innerHTML = `
        <div class="showcase-top">
          <div>
            <span class="eyebrow">${hero.showcase.subtitle}</span>
            <h3>${hero.showcase.title}</h3>
          </div>
          <div class="showcase-badge">Serving since ${siteConfig.hotel.servingSince}</div>
        </div>
        <div class="showcase-image">
          <img src="${hero.showcase.image}" alt="${hero.showcase.name}">
          <div class="highlight-card">
            <h3>${hero.showcase.name}</h3>
            <p>${hero.showcase.description}</p>
            <div class="highlight-meta">
              ${hero.showcase.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
    };

    const renderAbout = () => {
      document.getElementById("about-story").innerHTML = `
        <span class="eyebrow">About ${siteConfig.hotel.name}</span>
        <h3>${content.about.heading}</h3>
        <p>${content.about.description}</p>
        <p>From handpicked ingredients to a polished service rhythm, the experience is shaped to feel both comforting and elevated. This is a young brand built with old-soul values: consistency, warmth, and food that honours tradition.</p>
      `;

      document.getElementById("legacy-quote").innerHTML = `
        <p>${siteConfig.legacyScript}</p>
        <strong>Legacy Story</strong>
      `;

      document.getElementById("values").innerHTML = content.about.valueProps.map((value) => `
        <article class="value-card">
          <div class="value-icon">${value.icon}</div>
          <strong>${value.title}</strong>
          <p>${value.description}</p>
        </article>
      `).join("");
    };

    const renderSectionHead = (id, eyebrow, title, description) => {
      document.getElementById(id).innerHTML = `
        <div>
          <span class="eyebrow">${eyebrow}</span>
          <h2>${title}</h2>
        </div>
        <p>${description}</p>
      `;
    };

    const renderArchitecture = () => {
      document.getElementById("architecture-content").innerHTML = `
        <div class="section-head reveal">
          <div>
            <span class="eyebrow">Architecture & Ambience</span>
            <h2>A Space Designed for Tranquility</h2>
          </div>
          <p>Every corner of Hotel Aalayaa is crafted to reflect the harmony between nature and modern comfort. Step into a world where premium dining meets mindful design.</p>
        </div>
        <div class="architecture-grid">
          <div class="arch-main-img reveal">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Restaurant Interior">
          </div>
          <div class="arch-sub-grid">
            <div class="arch-sub-img reveal" style="transition-delay: 0.1s">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" alt="Dining Detail">
            </div>
            <div class="arch-sub-img reveal" style="transition-delay: 0.2s">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Ambience Lighting">
            </div>
          </div>
        </div>
      `;
    };

    const renderSignatureDishes = () => {
      renderSectionHead(
        "dishes-head",
        "Signature Dishes",
        "Showpiece plates designed to feel premium and memorable.",
        "The strongest visuals from your uploaded PDF now lead the signature section so the site feels unmistakably Aalayaa and fully focused on dine-in appeal."
      );

      let gridHtml = content.signatureDishes.map((dish) => `
        <article class="dish-card reveal">
          <div class="dish-image">
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-labels">
              <span class="dish-label">Pure Veg</span>
            </div>
          </div>
          <div class="dish-content">
            <h3>${dish.name}</h3>
            <p>${dish.description}</p>
            <div class="dish-tags">
              ${dish.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </article>
      `).join("");

      document.getElementById("signature-grid").innerHTML = gridHtml;
    };

    const renderMenu = (activeCategory = "All") => {
      renderSectionHead(
        "menu-head",
        "Config-Driven Menu",
        "Display-only menu browsing with premium food cards and clear pricing.",
        "The menu is rendered directly from JavaScript data so you can change categories, dish names, descriptions, prices, and images in one place later - with no ordering flow attached."
      );

      const tabs = document.getElementById("menu-tabs");
      tabs.innerHTML = siteConfig.menuCategories.map((category) => `
        <button class="menu-tab ${category === activeCategory ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `).join("");

      const filtered = activeCategory === "All"
        ? content.menu
        : content.menu.filter((item) => item.category === activeCategory);

      document.getElementById("menu-count").textContent = `${filtered.length} dishes shown`;
      document.getElementById("menu-grid").innerHTML = filtered.map((item) => `
        <article class="menu-item">
          <div class="menu-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div>
            <header>
              <strong>${item.name}</strong>
            </header>
            <p>${item.description}</p>
            <footer>
              <span>${item.category}</span>
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </footer>
          </div>
        </article>
      `).join("");

      tabs.querySelectorAll(".menu-tab").forEach((tab) => {
        tab.addEventListener("click", () => renderMenu(tab.dataset.category));
      });
    };

    const renderGalleryHead = () => {
      renderSectionHead(
        "gallery-head",
        "Gallery",
        "Food-forward visuals with an ambience-led premium mood.",
        "Your extracted dish images power the visual identity, while the supporting gallery cards reinforce ambience, dining mood, and the premium personality of Aalayaa."
      );
    };

    const renderTestimonials = () => {
      renderSectionHead(
        "testimonials-head",
        "Guest Impressions",
        "Social-proof style copy designed for a premium vegetarian brand.",
        "These are polished sample testimonials for launch presentation. You can swap them later for real customer quotes or Google review highlights."
      );

      document.getElementById("testimonial-grid").innerHTML = content.testimonials.map((item) => `
        <article class="testimonial reveal">
          <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p>${item.quote}</p>
          <strong>${item.author}</strong>
        </article>
      `).join("");
    };

    const renderContact = () => {
      renderSectionHead(
        "contact-head",
        "Visit Aalayaa",
        "Reservations, enquiries, catering, and daily dining.",
        "The contact section keeps the layout practical for a dine-in restaurant brand: direct details, a clean enquiry form, and a map embed centered on Chennai for now."
      );

      document.getElementById("contact-list").innerHTML = content.contact.map((item) => `
        <div class="contact-item">
          <label>${item.label}</label>
          ${item.href ? `<a href="${item.href}">${item.value}</a>` : `<div>${item.value}</div>`}
        </div>
      `).join("");
    };

    const renderFooter = () => {
      document.getElementById("footer-copy").innerHTML = `
        <div>${siteConfig.hotel.location} &middot; ${siteConfig.hotel.type}</div>
        <div>Serving since ${siteConfig.hotel.servingSince}</div>
      `;
    };

    const applySectionVisibility = () => {
      const visibilityMap = {
        "about-section": siteConfig.sections.about,
        "menu": siteConfig.sections.menu,
        "signature_dishes": siteConfig.sections.signatureDishes,
        "gallery": siteConfig.sections.gallery,
        "testimonials": siteConfig.sections.testimonials,
        "contact": siteConfig.sections.contact
      };

      Object.entries(visibilityMap).forEach(([id, enabled]) => {
        const node = document.getElementById(id);
        if (node) {
          node.hidden = !enabled;
        }
      });
    };

    const initReveal = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    };

    const initParallax = () => {
      if (!siteConfig.features.parallaxEffect) return;
      const showcase = document.querySelector(".hero-showcase");
      const copy = document.querySelector(".hero-copy");
      window.addEventListener("scroll", () => {
        const offset = Math.min(window.scrollY, 320);
        if (showcase) showcase.style.transform = `translateY(${offset * 0.08}px)`;
        if (copy) copy.style.transform = `translateY(${offset * 0.04}px)`;
      });
    };

    setBrandVariables();
    renderNav();
    renderHero();
    renderAbout();
    renderSignatureDishes();
    renderArchitecture();
    renderMenu();
    renderGalleryHead();
    renderTestimonials();
    renderContact();
    renderFooter();
    applySectionVisibility();
    initReveal();
    initParallax();
  
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <div className="entrance-overlay">
        <img src="./assets/logo-aalayaa.png" alt="Aalayaa Logo 3D" className="entrance-logo" />
      </div>
      <div className="grain"></div>

  <header className="site-header">
    <div className="shell nav" id="nav"></div>
  </header>

  <main>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy reveal" id="hero-copy"></div>
        <div className="hero-showcase reveal" id="hero-showcase"></div>
      </div>
    </section>

    <section className="section" id="about-section">
      <div className="shell about-grid">
        <div className="story-card reveal" id="about-story"></div>
        <div className="story-grid">
          <div className="story-quote reveal" id="legacy-quote"></div>
          <div className="values reveal" id="values"></div>
        </div>
      </div>
    </section>

    <section className="section" id="signature_dishes">
      <div className="shell">
        <div className="section-head reveal" id="dishes-head"></div>
        <div className="dish-grid" id="signature-grid"></div>
      </div>
    </section>

    <section className="section section-dark" id="architecture">
      <div className="shell" id="architecture-content"></div>
    </section>

    <section className="section" id="menu">
      <div className="shell">
        <div className="section-head reveal" id="menu-head"></div>
        <div className="menu-panel reveal">
          <div className="menu-toolbar">
            <div className="menu-tabs" id="menu-tabs"></div>
            <div className="menu-count" id="menu-count"></div>
          </div>
          <div className="menu-grid" id="menu-grid"></div>
        </div>
      </div>
    </section>

    <section className="section" id="gallery">
      <div className="shell">
        <div className="section-head reveal" id="gallery-head"></div>
        <div className="gallery-grid">
          <div className="gallery-card media reveal">
            <img src="./assets/site/dish-pepper-fry.jpg" alt="Aalayaa signature pepper fry" />
          </div>
          <div className="gallery-stack">
            <div className="gallery-card content reveal">
              <h3>Banana Leaf Warmth</h3>
              <p>A dining mood inspired by brass service, soft maroon textures, and family-style vegetarian hospitality.</p>
            </div>
            <div className="gallery-card media reveal">
              <img src="./assets/site/dish-crispy-strips.jpg" alt="Aalayaa crispy strips platter" />
            </div>
            <div className="gallery-card media reveal">
              <img src="./assets/site/dish-chilli-bites.jpg" alt="Aalayaa chilli bites" />
            </div>
            <div className="gallery-card content light reveal">
              <h3>Modern Chennai Dining</h3>
              <p>Clean service standards, rich flavours, and a polished family restaurant experience shaped for the next generation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="testimonials">
      <div className="shell">
        <div className="section-head reveal" id="testimonials-head"></div>
        <div className="testimonial-grid" id="testimonial-grid"></div>
      </div>
    </section>

    <section className="section" id="contact">
      <div className="shell">
        <div className="section-head reveal" id="contact-head"></div>
        <div className="contact-grid">
          <div className="contact-card reveal">
            <div className="contact-list" id="contact-list"></div>
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email address" />
              <textarea rows="5" placeholder="Tell us about your visit, table request, private dining, or catering requirement"></textarea>
              <button type="button" className="button button-primary">Send Enquiry</button>
            </form>
          </div>
          <div className="map-card reveal" style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{flex: '1', position: 'relative'}}>
              <div style={{position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.95)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', zIndex: '10', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: 'var(--primary)'}}>Main Branch</div>
              <iframe
                title="Aalayaa Main Branch location map"
                src="https://www.google.com/maps?q=Hotel+Aalayaa,Chennai&output=embed"
                style={{width: '100%', height: '100%', minHeight: '260px', border: 'none', display: 'block'}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div style={{flex: '1', position: 'relative', borderTop: '2px solid rgba(123, 30, 30, 0.1)'}}>
              <div style={{position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.95)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', zIndex: '10', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', color: 'var(--primary)'}}>Second Outlet</div>
              <iframe
                title="Aalayaa Second Outlet location map"
                src="https://www.google.com/maps?q=HOTEL+AALAYAA+VEG+RESTAURANT,13.0749937,80.1249996&output=embed"
                style={{width: '100%', height: '100%', minHeight: '260px', border: 'none', display: 'block'}}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer className="site-footer">
    <div className="shell footer-row">
      <div className="footer-brand">
        <img src="./assets/logo-aalayaa.png" alt="Aalayaa logo" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
      </div>
      <div id="footer-copy"></div>
    </div>
  </footer>

  
    </>
  );
}
