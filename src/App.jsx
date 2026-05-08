import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, MapPin, Phone, Mail, ChevronRight, Star, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import './index.css';

// --- Configuration & Data ---
const config = {
  hotel: {
    name: "Hotel Aalaya",
    tagline: "Authentic Taste of Tradition",
    phone: "+91 44 4000 2024",
    email: "hello@aalayaa.in",
    locations: [
      { name: "Main Branch", address: "Chennai, India", link: "https://maps.app.goo.gl/xVvCBeZcj9swa41D8" },
      { name: "Second Branch", address: "Dummy Location (To be replaced)", link: "#" }
    ],
    hours: "Daily, 7:00 AM - 10:30 PM",
  }
};

const menuItems = [
  { id: 1, name: "Veg Vanjaram Fish Fry", category: "Plant-Based Seafood", price: "₹375", desc: "Crispy layers with sea stone flower, mashed soya and mushroom, cooked with South Indian spices.", image: "/assets/site/dish_vanjaram_fish_fry_1778233012222.png" },
  { id: 2, name: "Veg Prawn 65", category: "Plant-Based Seafood", price: "₹375", desc: "Crispy textured plant-based prawns, tossed with flavorful spices and curry leaves.", image: "/assets/site/dish_prawn_65_1778233030643.png" },
  { id: 3, name: "Veg Mutton Chukka", category: "Plant-Based Mutton", price: "₹350", desc: "Plant-based mutton chunks dry roasted with thick, tangy, and tempting spices.", image: "/assets/site/dish_mutton_chukka_ai_1778233048248.png" },
  { id: 4, name: "Veg Chicken Chettinadu Gravy", category: "Plant-Based Chicken", price: "₹350", desc: "Rich and aromatic Chettinad curry with plant-based soy and wheat chicken.", image: "/assets/site/dish_chicken_chettinadu_1778233075144.png" },
  { id: 5, name: "Veg Chicken Lolipop", category: "Plant-Based Chicken", price: "₹350", desc: "Crispy, glazed plant-based chicken drumettes, a perfect premium starter.", image: "/assets/site/dish_chicken_lolipop_1778233096977.png" },
  { id: 6, name: "Veg Liver Pepper Fry", category: "Plant-Based Specialties", price: "₹400", desc: "Chanadal and mushroom based firm texture, dry roasted with coarse pepper.", image: "/assets/site/dish_liver_pepper_fry_1778233118426.png" },
];

const categories = ["All", "Plant-Based Seafood", "Plant-Based Chicken", "Plant-Based Mutton", "Plant-Based Specialties"];

const testimonials = [
  { id: 1, text: "The ambience is absolutely stunning. A true premium vegetarian dining experience in Chennai.", author: "Rahul M.", role: "Food Critic" },
  { id: 2, text: "Aalayaa feels designed for trust. The clean presentation and warm colors make it dependable instantly.", author: "Priya S.", role: "Regular Guest" },
  { id: 3, text: "The signature dishes have bold flavors that make you want to return immediately.", author: "Karthik V.", role: "Local Guide" },
];

const galleryImages = [
  "/assets/site/dish_vanjaram_fish_fry_1778233012222.png",
  "/assets/site/dish_prawn_65_1778233030643.png",
  "/assets/site/dish_mutton_chukka_ai_1778233048248.png",
  "/assets/site/dish_chicken_chettinadu_1778233075144.png",
  "/assets/site/dish_chicken_lolipop_1778233096977.png",
  "/assets/site/dish_liver_pepper_fry_1778233118426.png",
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // Call once to set initial state on load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`} style={{ top: 0, left: 0, right: 0, background: scrolled ? 'rgba(252, 253, 252, 0.95)' : 'linear-gradient(to bottom, rgba(252,253,252,0.9) 0%, rgba(252,253,252,0) 100%)', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/assets/logo-new-transparent.png" alt="Hotel Aalaya" className="nav-logo" style={{ height: '90px', width: 'auto', padding: '5px 0', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', color: 'var(--text)' }} className="desktop-menu">
          {['Home', 'About', 'Menu', 'Signature'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, fontSize: '0.95rem', position: 'relative', overflow: 'hidden' }} className="nav-link">
              {item}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <motion.a 
              href="#events" 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(229, 169, 61, 0.2)' }} 
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ['0 0 0 rgba(229, 169, 61, 0)', '0 0 15px rgba(229, 169, 61, 0.5)', '0 0 0 rgba(229, 169, 61, 0)'] }}
              transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: 'rgba(229, 169, 61, 0.1)', border: '1px solid var(--accent)', borderRadius: '99px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}
            >
              <Star size={16} /> Events & Catering
            </motion.a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Book Table</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--text)' }}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', color: 'var(--text)' }}
          >
            {['Home', 'About', 'Menu', 'Signature', 'Events', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', color: item === 'Events' ? 'var(--accent)' : 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {item === 'Events' && <Star size={18} />}
                {item === 'Events' ? 'Party & Corporate Events' : item === 'Signature' ? 'Menu Dishes' : item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; }
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: var(--primary);
          transform: scaleX(0); transform-origin: right; transition: transform 0.3s ease;
        }
        .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
      `}</style>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', zIndex: 1, paddingTop: 'var(--nav-height)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundColor: 'var(--surface-dark)', overflow: 'hidden' }}>
        <motion.div 
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          style={{ width: '100%', height: '100%' }}
        >
          <img src="/assets/site/dish-mutton-chukka.jpg" alt="Hero Background" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(99, 197, 0, 0.1) 0%, transparent 70%)', zIndex: 0 }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(252,253,252,0.95) 0%, rgba(252,253,252,0.7) 60%, rgba(252,253,252,0.1) 100%)', zIndex: -1 }} />
      
      {/* Floating particles for attractive effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${15 + i * 8}px`,
            height: `${15 + i * 8}px`,
            borderRadius: '50%',
            background: 'var(--primary)',
            filter: 'blur(25px)',
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            zIndex: -1
          }}
        />
      ))}

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1, color: 'var(--text)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', alignItems: 'center' }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.8 } }
          }}
        >
          <motion.img variants={{ hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: "easeOut" } } }} src="/assets/logo-new-transparent.png" alt="Hotel Aalaya Logo" className="logo-glow" style={{ height: '110px', marginBottom: '24px', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }} />
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <motion.a href="#events" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(99, 197, 0, 0.2)', border: '1px solid var(--primary)', borderRadius: '20px', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, backdropFilter: 'blur(4px)', cursor: 'pointer', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background='rgba(99, 197, 0, 0.4)'} onMouseLeave={e => e.currentTarget.style.background='rgba(99, 197, 0, 0.2)'}>
              Corporate Orders
            </motion.a>
            <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--primary)' }}></span>
            <motion.a href="#events" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(229, 169, 61, 0.2)', border: '1px solid var(--accent)', borderRadius: '20px', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, backdropFilter: 'blur(4px)', cursor: 'pointer', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background='rgba(229, 169, 61, 0.4)'} onMouseLeave={e => e.currentTarget.style.background='rgba(229, 169, 61, 0.2)'}>
              Party & Events
            </motion.a>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="font-playfair" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '20px', textShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            Welcome to <br/><span style={{ color: 'var(--primary)', display: 'inline-block', marginTop: '10px' }}>Hotel Aalaya</span>
          </motion.h1>
          
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '500px', marginBottom: '36px', lineHeight: 1.7, fontWeight: 400 }}>
            Premium Veg Restaurant & Stay. Experience the finest cuisine in Chennai crafted with passion and served with elegance.
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a href="#contact" className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '16px 32px', fontSize: '1.05rem', fontWeight: 600 }}>Book Table</motion.a>
            <motion.a href="#menu" className="btn btn-outline" whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }} whileTap={{ scale: 0.95 }} style={{ color: 'var(--text)', borderColor: 'rgba(0,0,0,0.2)', padding: '16px 32px', fontSize: '1.05rem', backdropFilter: 'blur(5px)' }}>View Menu</motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: 15 }} 
          animate={{ opacity: 1, x: 0, rotateY: 0 }} 
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          className="hero-special-card"
          style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}
        >
          <motion.div 
            whileHover={{ y: -10, rotateX: 5, rotateY: -5, boxShadow: '0 25px 50px -12px rgba(99, 197, 0, 0.25)' }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass" 
            style={{ padding: '30px', borderRadius: '24px', maxWidth: '380px', border: '1px solid rgba(0, 0, 0, 0.05)', background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)', backdropFilter: 'blur(20px)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
              <h3 className="font-playfair" style={{ fontSize: '1.4rem', margin: 0, color: 'var(--primary)' }}>Today's Special</h3>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', position: 'relative' }}>
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src="/assets/site/dish-pepper-fry.jpg" 
                alt="Special" 
                loading="lazy" 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text)' }}>
                Chef's Pick
              </div>
            </div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: 600 }}>Mushroom Pepper Roast</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.5 }}>Freshly picked mushrooms tossed with ground pepper and authentic South Indian spices.</p>
            <a href="#menu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'rgba(0,0,0,0.03)', borderRadius: '12px', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99,197,0,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}>
              <span style={{ fontWeight: 600, color: 'var(--text)' }}>Order Now</span>
              <motion.div whileHover={{ x: 5 }}><ChevronRight size={20} color="var(--primary)" /></motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--surface-strong)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '60px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: 'relative' }}>
              <img src="/assets/site/dish-sea-fire.jpg" alt="About Us" loading="lazy" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
              <div className="glass" style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '24px', borderRadius: '16px', maxWidth: '200px', zIndex: 10 }}>
                <p className="font-playfair" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '5px', lineHeight: 1 }}>2024</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>Founded with a passion for purity.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A brand-led restaurant experience.</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
              Aalayaa is shaped around strong identity cues: elegant presentation, category-led menu browsing, premium ambience, visible vegetarian trust marks, and storytelling rooted in tradition.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
              From handpicked ingredients to a polished service rhythm, the experience is shaped to feel both comforting and elevated. This is a young brand built with old-soul values: consistency, warmth, and food that honours tradition.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '12px', background: 'rgba(99, 197, 0, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}><Star size={24} /></div>
                <span style={{ fontWeight: 600 }}>Premium Quality</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '12px', background: 'rgba(99, 197, 0, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}><Clock size={24} /></div>
                <span style={{ fontWeight: 600 }}>Fresh Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Menu = () => {
  const [activeCat, setActiveCat] = useState("All");
  
  const filteredMenu = activeCat === "All" ? menuItems : menuItems.filter(item => item.category === activeCat);

  return (
    <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--surface-strong)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
          <span className="section-subtitle">Our Menu</span>
          <h2 className="section-title">Culinary Masterpieces</h2>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '99px',
                fontWeight: 500,
                transition: 'all 0.3s',
                backgroundColor: activeCat === cat ? 'var(--primary)' : 'var(--surface-strong)',
                color: activeCat === cat ? 'white' : 'var(--text)',
                border: `1px solid ${activeCat === cat ? 'var(--primary)' : 'rgba(0,0,0,0.1)'}`,
                boxShadow: activeCat === cat ? '0 4px 14px rgba(99,197,0,0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
          <AnimatePresence>
            {filteredMenu.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                style={{ backgroundColor: 'var(--surface-card)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s', border: '1px solid rgba(0,0,0,0.05)' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="menu-img" />
                </div>
                <div style={{ padding: '24px' }}>
                   <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{item.category}</span>
                  <h3 className="font-playfair" style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--text)' }}>{item.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
                <style>{`.menu-img:hover { transform: scale(1.08); }`}</style>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const EventsAndCatering = () => {
  const events = [
    { id: 1, title: "Corporate Orders", desc: "Premium dining experiences tailored for business meetings, seminars, and corporate lunches.", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800", btn: "Book Corporate Catering" },
    { id: 2, title: "Party Orders", desc: "Unforgettable pure vegetarian food for birthdays, anniversaries, and family functions.", img: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&q=80&w=800", btn: "Party Reservation" },
    { id: 3, title: "Catering Services", desc: "Outdoor catering with live counters and our signature vegetarian specialties.", img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800", btn: "Order for Events" }
  ];

  return (
    <section id="events" className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-subtitle">Celebrate with Us</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="section-title">Corporate & Party Orders</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>
            Elevate your events with our premium catering services. From corporate gatherings to intimate family celebrations, we deliver exceptional culinary experiences.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '30px' }}>
          {events.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ backgroundColor: 'var(--surface-strong)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={event.img} alt={event.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 200px)' }}>
                <h3 className="font-playfair" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{event.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '24px' }}>{event.desc}</p>
                <a href="#contact" className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>{event.btn}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Happy Customers", value: 15000, suffix: "+" },
    { label: "Signature Dishes", value: 45, suffix: "" },
    { label: "Years of Service", value: 1, suffix: "" },
    { label: "Professional Staff", value: 50, suffix: "+" },
  ];

  return (
    <section style={{ backgroundColor: 'var(--surface-strong)', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--text)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '40px', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <div className="font-playfair" style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '10px' }}>
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignatureDishes = () => {
  const [activeMeal, setActiveMeal] = useState("Breakfast");
  
  const signatureMenu = {
    "Breakfast": [
      { id: 101, name: "Special Ghee Roast Dosa", desc: "Crispy crepe roasted in pure ghee with traditional chutneys.", image: "/assets/site/dish-crispy-strips.jpg" },
      { id: 102, name: "Podi Idli", desc: "Steamed rice cakes tossed in spicy lentil powder and ghee.", image: "/assets/site/dish-pepper-fry.jpg" },
      { id: 103, name: "Veg Mutton Kheema Dosa", desc: "Crispy dosa stuffed with our signature plant-based mutton kheema.", image: "/assets/site/dish_mutton_chukka_ai_1778233048248.png" },
    ],
    "Lunch": [
      { id: 201, name: "Aalayaa Royal Thali", desc: "A grand feast featuring 15+ traditional South Indian delicacies.", image: "/assets/site/dish-mutton-chukka.jpg" },
      { id: 202, name: "Veg Chicken Chettinadu", desc: "Plant-based chicken in aromatic Chettinad curry with rice.", image: "/assets/site/dish_chicken_chettinadu_1778233075144.png" },
      { id: 203, name: "Veg Vanjaram Fish Fry Meals", desc: "Traditional South Indian meals served with crispy plant-based fish.", image: "/assets/site/dish_vanjaram_fish_fry_1778233012222.png" },
    ],
    "Dinner": [
      { id: 301, name: "Veg Prawn 65", desc: "Crispy plant-based prawns tossed in Chettinad spices.", image: "/assets/site/dish_prawn_65_1778233030643.png" },
      { id: 302, name: "Veg Chicken Lolipop", desc: "Glazed plant-based drumettes, a perfect premium starter.", image: "/assets/site/dish_chicken_lolipop_1778233096977.png" },
      { id: 303, name: "Veg Liver Pepper Fry", desc: "Firm textured mock liver dry roasted with coarse pepper and curry leaves.", image: "/assets/site/dish_liver_pepper_fry_1778233118426.png" },
      { id: 304, name: "Veg Mutton Chukka", desc: "Tender plant-based mutton chunks dry roasted with authentic spices.", image: "/assets/site/dish_mutton_chukka_ai_1778233048248.png" },
    ],
    "Snacks": [
      { id: 401, name: "Veg Fish Finger", desc: "Crispy plant-based fish fingers served with tangy dip.", image: "/assets/site/dish-crispy-strips.jpg" },
      { id: 402, name: "Mushroom Pepper Fry", desc: "Button mushrooms dry roasted with freshly ground black pepper.", image: "/assets/site/dish-mushroom-roast.jpg" },
    ],
    "Dessert": [
      { id: 501, name: "Kesari Delight", desc: "Traditional South Indian sweet made with semolina, ghee, and saffron.", image: "/assets/site/dish-kesari.jpg" },
    ]
  };

  return (
    <section id="signature" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
          <span className="section-subtitle">Chef's Specials</span>
          <h2 className="section-title">Menu Dishes</h2>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"].map(meal => (
            <button
              key={meal}
              onClick={() => setActiveMeal(meal)}
              style={{
                padding: '8px 24px',
                borderRadius: '99px',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeMeal === meal ? 'var(--primary)' : 'var(--surface-strong)',
                color: activeMeal === meal ? 'white' : 'var(--text)',
                border: `1px solid ${activeMeal === meal ? 'var(--primary)' : 'rgba(0,0,0,0.1)'}`,
              }}
            >
              {meal}
            </button>
          ))}
        </div>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '30px' }}>
          <AnimatePresence mode="wait">
            {signatureMenu[activeMeal].map(dish => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'var(--surface-strong)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}
              >
                <img src={dish.image} alt={dish.name} loading="lazy" style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover' }} />
                <div>
                  <h3 className="font-playfair" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{dish.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--surface-dark)', color: 'var(--text)', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '50px', marginBottom: '60px' }}>
          <div>
            <img src="/assets/logo-new-transparent.png" alt="Logo" loading="lazy" style={{ height: '60px', marginBottom: '24px' }} />
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
              A premium vegetarian dining destination in Chennai, crafted for family experiences and unforgettable tastes.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--text)', background: 'rgba(0,0,0,0.05)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Fb</a>
              <a href="#" style={{ color: 'var(--text)', background: 'rgba(0,0,0,0.05)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Ig</a>
              <a href="#" style={{ color: 'var(--text)', background: 'rgba(0,0,0,0.05)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Tw</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--muted)' }}>
              <li><a href="#home" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--primary)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>Home</a></li>
              <li><a href="#about" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--primary)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>About Us</a></li>
              <li><a href="#menu" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--primary)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>Our Menu</a></li>
              <li><a href="#signature" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--primary)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>Menu Dishes</a></li>
            </ul>
          </div>

          <div id="contact">
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', fontWeight: 600 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--muted)' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {config.hotel.locations.map((loc, idx) => (
                    <div key={idx}>
                      <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '4px', fontSize: '0.95rem' }}>{loc.name}</div>
                      <a href={loc.link} target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', fontSize: '0.9rem' }} onMouseEnter={e => e.target.style.color='var(--primary)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>
                        {loc.address}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                <Phone size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>{config.hotel.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>{config.hotel.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Clock size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>{config.hotel.hours}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} {config.hotel.name}. All rights reserved.</p>
          <p>Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for entrance animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--surface)' }}>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%', filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="loading-overlay"
          >
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.img 
                src="/assets/logo-entrance.png" 
                alt="Loading" 
                className="loading-logo"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: [0.8, 1, 1.05, 1], 
                  y: 0,
                  filter: [
                    "drop-shadow(0 0 0px rgba(99, 197, 0, 0))", 
                    "drop-shadow(0 0 30px rgba(99, 197, 0, 0.6))",
                    "drop-shadow(0 0 60px rgba(99, 197, 0, 0.8))",
                    "drop-shadow(0 0 30px rgba(99, 197, 0, 0.6))"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  times: [0, 0.4, 0.7, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '200px', opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                  marginTop: '30px',
                  borderRadius: '2px'
                }}
              />
              <motion.p
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 style={{ color: 'var(--primary)', marginTop: '16px', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 500 }}
              >
                Experience Premium
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Navbar />
          <Hero />
          <About />
          <Menu />

          <EventsAndCatering />
          <Stats />
          <SignatureDishes />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
