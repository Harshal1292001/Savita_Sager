// InvitationCard.jsx
import React, { useEffect, useState } from 'react';
import '../CSS/InvitationCard.css'; // Custom styles below

import { Ganesha } from './Ganesha';
import { Mandala } from './Mandala';
import savita from '../components/Img/savita.jpg';
import sager from '../components/Img/sager.jpg';

export const InvitationCard = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="invitation-wrapper min-vh-100 bg-cream overflow-hidden pb-5">
      {/* Decorative fixed background */}
      <div className="fixed-bg-pattern" />

      {/* Floating mandalas */}
      <Mandala className="floating-mandala top-left animate-spin-slow" />
      <Mandala className="floating-mandala bottom-right animate-spin-slow-reverse" />

      {/* 1. Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center px-3 px-md-5">
        <div className="container position-relative z-10">
          <div className="d-flex justify-content-center gap-4 mb-5 opacity-75">
            <div className="icon-circle">
              <Ganesha className="w-75 h-75 text-maroon" />
            </div>
            <div className="icon-circle overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=b91c1c"
                alt="Shivaji Maharaj"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          <p className="font-marathi text-maroon small tracking-widest mb-3 opacity-75">
            ।। श्री गणेशाय नम: ।। ।। श्री कुलस्वामिनी एकविरा माता प्रसन्न ।।
          </p>

          <h1 className="font-marathi display-3 display-md-1 fw-black text-gold mb-4 gold-text-shadow">
            सस्नेह निमंत्रण
          </h1>

          <div className="divider mx-auto mb-4" />

          <p className="font-marathi text-maroon fs-5 fs-md-4 max-w-2xl mx-auto leading-relaxed">
            आमच्या येथे श्री कुलस्वामिनी कृपेने.... शुभविवाह सोहळा
          </p>
        </div>

        <div className="scroll-hint position-absolute bottom-5 animate-bounce">
          <svg className="w-6 h-6 text-amber-800 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. Couple Section */}
      <section className="py-5 py-md-5">
        <div className="container">
          <div className="row g-5 justify-content-center">
            {/* Bride */}
            <div className="col-12 col-md-5">
              <div className="couple-card text-center">
                <div className="jharokha-frame mx-auto mb-4">
                  <img src={savita} alt="Bride - सविता" className="img-fluid object-fit-cover" />
                </div>
                <h2 className="font-marathi fs-3 fw-bold text-maroon text-decoration-underline decoration-amber">
                  चि. सौ. कां. सविता
                </h2>
                <p className="font-marathi text-amber-900 mb-1">
                  सौ. वंदना व श्री. संतोष सुपडू सुर्यवंशी यांची सुकन्या
                </p>
                <p className="font-marathi small text-muted">
                  रा. आर्डी ता. अमळनेर जि. जळगांव
                </p>
              </div>
            </div>

            {/* Groom */}
            <div className="col-12 col-md-5">
              <div className="couple-card text-center">
                <div className="jharokha-frame mx-auto mb-4">
                  <img src={sager} alt="Groom - सागर" className="img-fluid object-fit-cover" />
                </div>
                <h2 className="font-marathi fs-3 fw-bold text-maroon text-decoration-underline decoration-amber">
                  चि. सागर
                </h2>
                <p className="font-marathi text-amber-900 mb-1">
                  सौ. संगिता व श्री. चुडामण भटा पाटील यांची चिरंजीव
                </p>
                <p className="font-marathi small text-muted">
                  रा. चौबारी ता. अमळनेर जि. जळगांव
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Details */}
      <section className="bg-red-tint py-5 py-md-5 position-relative overflow-hidden">
        <div className="container text-center">
          <div className="mb-5">
            <div className="d-inline-block px-5 py-3 bg-white rounded-pill shadow border border-amber-300">
              <h2 className="font-marathi display-5 fw-black text-red-gradient">
                शुभमंगल विवाह
              </h2>
            </div>
          </div>

          <div className="glass-card p-4 p-md-5 mb-5 rounded-4 border border-amber-300 shadow-lg">
            <p className="font-marathi text-maroon fs-5 mb-2">
              विवाह मुहूर्त :- शुभ मिती ज्येष्ठ शु ||७|| शके १९४७
            </p>
            <p className="font-marathi display-6 fw-bold text-maroon">
              सोमवार, दि. ०२/०६/२०२५
            </p>
            <p className="font-marathi fs-4 text-amber-800">
              दुपारी १२ वाजून ३५ मिनिटांनी
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="event-card bg-maroon text-white p-4 p-md-5 rounded-4 shadow-lg hover-lift">
                <h3 className="font-marathi fs-3 fw-bold text-yellow mb-3">हळदीचा कार्यक्रम</h3>
                <p className="font-marathi fs-5">रविवार, दि. ०१/०६/२०२५</p>
                <p className="font-marathi opacity-75">सायंकाळी ४.०० वा. राहत्या घरी</p>
                <p className="small opacity-50 mt-3">प्लॉट नं. ५०७, गांधीकुटीर, सुरत</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="event-card bg-white p-4 p-md-5 rounded-4 shadow-lg border-top border-4 border-maroon hover-lift">
                <h3 className="font-marathi fs-3 fw-bold text-maroon mb-3">विवाह स्थळ</h3>
                <p className="font-marathi fw-bold fs-5 mb-2">मातोश्री हॉल (ममता वाडी)</p>
                <p className="font-marathi text-maroon opacity-75">
                  दक्षेश्वर नगर, पांडेसरा, सुरत
                </p>
                <a
                  href="https://maps.google.com/?q=मातोश्री+हॉल+ममता+वाडी+दक्षेश्वर+नगर+पांडेसरा+सुरत"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-maroon mt-4 d-inline-flex align-items-center gap-2"
                >
                  Google Maps मध्ये पहा
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Family & Contact */}
      <section className="py-5 py-md-5">
        <div className="container text-center">
          <div className="family-section">
            <p className="font-marathi text-amber fw-bold tracking-widest text-uppercase small mb-3">
              निमंत्रक
            </p>

            <div className="row g-3 justify-content-center font-marathi text-maroon fs-5">
              <div className="col-6 col-md-3">श्री. संतोष सुपडू सुर्यवंशी</div>
              <div className="col-6 col-md-3">सौ. वंदनाबाई संतोष सुर्यवंशी</div>
              <div className="col-6 col-md-3">श्री. हेमराज चैत्राम सुर्यवंशी</div>
              <div className="col-6 col-md-3">सौ. छायाबाई हेमराज सुर्यवंशी</div>
            </div>

            <div className="mt-5 pt-5 border-top border-amber opacity-25">
              <p className="font-marathi text-maroon opacity-75 small mb-4">
                व समस्त सुर्यवंशी परिवार
              </p>

              <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
                <a
                  href="tel:9309367919"
                  className="btn btn-outline-amber rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-sm"
                >
                  📞 ९३०९३६७९१९
                </a>
                <a
                  href="tel:7887665575"
                  className="btn btn-outline-amber rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow-sm"
                >
                  📞 ७८८७६६५५७५
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Action Bar */}
      <div className="sticky-action-bar d-md-none">
        <div className="glass-bar rounded-pill shadow-lg border border-amber-300 p-2 d-flex justify-content-between align-items-center">
          <button className="action-btn flex-fill text-maroon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="tiny fw-bold text-uppercase">Calendar</span>
          </button>

          <div className="divider-v" />

          <a href="https://maps.google.com/..." className="action-btn flex-fill text-maroon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="tiny fw-bold text-uppercase">Location</span>
          </a>

          <div className="divider-v" />

          <a href="tel:9309367919" className="action-btn flex-fill text-maroon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="tiny fw-bold text-uppercase">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};