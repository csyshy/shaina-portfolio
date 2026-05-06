import profilePhoto from './assets/cv.png'
import { MdWork, MdSearch, MdTableChart, MdBrush, MdInfo, MdCheckCircle, MdRefresh, MdSmokeFree, MdStorage, MdBugReport, MdPhone, MdEmail, MdLocationOn, MdArrowBack } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import hrisImg from './assets/hris.png'
import ecommerceImg from './assets/e-commerce.png'
import showcaseImg from './assets/product.png'
import callingCardFront from './assets/CALLING_CARD-FRONT.png'
import callingCardBack from './assets/CALLING_CARD-BACK.png'
import logoImg from './assets/LOGO.png'
import flyersImg from './assets/FLYERS.png'
import posterImg from './assets/POSTER.png'
import { FaMicrosoft, FaHtml5, FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiQuickbooks, SiTailwindcss, SiMysql, SiCanva, SiShortcut } from 'react-icons/si'

function ProjectsPage({ isMobile, onBack }) {
  const [activeProject, setActiveProject] = useState(0)
  const [activeWork, setActiveWork] = useState(0)

  const projects = [
    { img: hrisImg, title: 'HRIS' },
    { img: ecommerceImg, title: 'E-Commerce' },
    { img: showcaseImg, title: 'Product Showcase' },
  ]

  const works = [
    { img: callingCardFront, title: 'Calling Card — Front' },
    { img: callingCardBack, title: 'Calling Card — Back' },
    { img: logoImg, title: 'Logo Design' },
    { img: flyersImg, title: 'Event Flyers' },
    { img: posterImg, title: 'Concert Poster' },
  ]

  return (
    <div>
      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontFamily: 'Title', fontWeight: 700, color: '#ff751f', fontSize: '20px' }}>
          sha.o
        </span>
        <button
          onClick={onBack}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: '#000' }}
        >
          <MdArrowBack size={18} /> BACK
        </button>
      </nav>

      {/* Projects */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#ff751f' }}>
          Projects Tested
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '20px' }}>
            <button
              onClick={() => setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #d9d9d9', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '24px', color: '#d9d9d9', fontWeight: 700 }}
            >
              ‹
            </button>

            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              {projects.map((project, i) => (
                <div
                  key={i}
                  style={{
                    display: activeProject === i ? 'block' : 'none',
                    border: '1px solid #f0f0f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    animation: activeProject === i ? 'fadeIn 0.3s ease' : 'none',
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: '100%', height: isMobile ? '180px' : '380px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '22px' }}>
                      {project.title}
                    </h3>
                    <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <MdInfo size={14} color="#a6a6a6" /> Images shown are not the actual websites tested due to NDA.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
              style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #d9d9d9', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '24px', color: '#d9d9d9', fontWeight: 700 }}
            >
              ›
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {projects.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(i)}
                style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: activeProject === i ? '#ff751f' : '#ddd', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Works */}
      <section style={{ padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#ff751f' }}>
          Creative Works
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
    

          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '20px' }}>
            <button
              onClick={() => setActiveWork((prev) => (prev === 0 ? works.length - 1 : prev - 1))}
              style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #d9d9d9', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '24px', color: '#d9d9d9', fontWeight: 700 }}
            >
              ‹
            </button>

            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              {works.map((work, i) => (
                <div
                  key={i}
                  style={{
                    display: activeWork === i ? 'block' : 'none',
                    border: '1px solid #f0f0f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    animation: activeWork === i ? 'fadeIn 0.3s ease' : 'none',
                  }}
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    style={{ width: '100%', height: isMobile ? '180px' : '380px', objectFit: 'contain', backgroundColor: '#fafafa' }}
                  />
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '22px' }}>
                      {work.title}
                    </h3>
                    <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <MdInfo size={14} color="#a6a6a6" /> Images shown are created using Canva.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveWork((prev) => (prev === works.length - 1 ? 0 : prev + 1))}
              style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #d9d9d9', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '24px', color: '#d9d9d9', fontWeight: 700 }}
            >
              ›
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {works.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveWork(i)}
                style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: activeWork === i ? '#ff751f' : '#ddd', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

function App() {
  const [page, setPage] = useState('home')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (page === 'projects') {
    return <ProjectsPage isMobile={isMobile} onBack={() => setPage('home')} />
  }

  return (
    <div>
      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontFamily: 'Title', fontWeight: 700, color: '#ff751f', fontSize: '20px' }}>
          sha.o
        </span>
        <a href="/Orpilla_CV.pdf" download="Orpilla_CV.pdf" style={{ fontFamily: 'Subtitle', fontSize: '20px', fontWeight: 100, textDecoration: 'none', color: '#000' }}>
          download CV
        </a>
      </nav>

      {/* Hero */}
      <section style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: '30px', padding: isMobile ? '40px 24px' : '60px 40px', textAlign: isMobile ? 'center' : 'left' }}>
        <img
          src={profilePhoto}
          alt="Shaina"
          style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <div>
          <h1 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: isMobile ? '28px' : '36px', marginBottom: '12px' }}>
            Hi, I'm Shaina —
          </h1>
          <p style={{ fontFamily: 'Subtitle', fontSize: '15px', lineHeight: '1.7', maxWidth: '480px', color: '#333', textAlign: isMobile ? 'center' : 'justify' }}>
           I am a reliable and detail-oriented professional with a background in quality assurance, data entry, and graphic design. 
           I have experience in system testing, handling financial data, creating visual materials, and maintaining accurate records 
           in both tech and accounting industries. I focus on accuracy, organization, and clear communication in my work.
          </p>
        </div>
      </section>

      {/* Nav Links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: isMobile ? '20px' : '60px', padding: '30px 24px' }}>
        <a href="#experiences" className="nav-link" style={{ fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#2D3142', paddingBottom: '4px' }}>EXPERIENCES</a>
        <a onClick={() => setPage('projects')} className="nav-link" style={{ fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#2D3142', paddingBottom: '4px', cursor: 'pointer' }}>PROJECTS</a>
        <a href="#approaches" className="nav-link" style={{ fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#2D3142', paddingBottom: '4px' }}>APPROACHES</a>
        <a href="#tools" className="nav-link" style={{ fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#2D3142', paddingBottom: '4px' }}>TOOLS</a>
        <a href="#contacts" className="nav-link" style={{ fontFamily: 'Subtitle', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#2D3142', paddingBottom: '4px' }}>CONTACTS</a>
      </div>

      {/* Experiences */}
      <section id="experiences" style={{ padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#532b88' }}>
          MY EXPERIENCES
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#C8B1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MdWork color="white" size={18} />
              </div>
              <div>
                <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginBottom: '-8px' }}>JAN 2025 – MAR 2026</p>
                <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '18px', color: '#2D3142' }}>QA ASSOCIATE</h3>
              </div>
            </div>
            <p style={{ fontFamily: 'Subtitle', fontSize: '13px', lineHeight: '1.7', color: '#555', textAlign: 'justify' }}>
              Tested HRIS, e-commerce, and product showcase websites, ran functional, regression, and smoke tests, validated data, and collaborated with developers to ensure smooth, bug-free releases.
            </p>
          </div>
          <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#C8B1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MdSearch color="white" size={18} />
              </div>
              <div>
                <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginBottom: '-8px' }}>AUG 2024 – NOV 2024</p>
                <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '18px', color: '#2D3142' }}>QA INTERN</h3>
              </div>
            </div>
            <p style={{ fontFamily: 'Subtitle', fontSize: '13px', lineHeight: '1.7', color: '#555', textAlign: 'justify' }}>
              Executed test cases, documented defects, and assisted in retesting to support system stability and improve issue visibility.
            </p>
          </div>
          <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#C8B1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MdTableChart color="white" size={18} />
              </div>
              <div>
                <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginBottom: '-8px' }}>JUN 2023 – MAY 2024</p>
                <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '18px', color: '#2D3142' }}>DATA ENTRY CLERK</h3>
              </div>
            </div>
            <p style={{ fontFamily: 'Subtitle', fontSize: '13px', lineHeight: '1.7', color: '#555', textAlign: 'justify' }}>
              Recorded and verified financial data in QuickBooks and Excel, improving accuracy and streamlining record organization.
            </p>
          </div>
          <div style={{ border: '1px solid #f0f0f0', borderRadius: '10px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#C8B1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MdBrush color="white" size={18} />
              </div>
              <div>
                <p style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#a6a6a6', marginBottom: '-8px' }}>NOV 2019 – DEC 2019</p>
                <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '18px', color: '#2D3142' }}>GRAPHIC DESIGN INTERN</h3>
              </div>
            </div>
            <p style={{ fontFamily: 'Subtitle', fontSize: '13px', lineHeight: '1.7', color: '#555', textAlign: 'justify' }}>
              Created visuals and improved document layouts using Canva, ensuring clarity and consistent branding across materials.
            </p>
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section id="approaches" style={{ padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#532b88' }}>
          QA APPROACHES
        </h2>
        <p style={{ fontFamily: 'Subtitle', fontSize: '14px', color: '#555', textAlign: 'center', marginBottom: '40px' }}>
          I ensure systems are reliable and user-ready through structured testing methods:
        </p>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', color: '#2D3142' }}>
          {[
            { icon: <MdCheckCircle color="white" size={18} />, title: 'Functional Testing', desc: 'Verify features work as intended across platforms.' },
            { icon: <MdRefresh color="white" size={18} />, title: 'Regression Testing', desc: "Ensure new changes don't break existing functionality." },
            { icon: <MdSmokeFree color="white" size={18} />, title: 'Smoke Testing', desc: 'Quick checks of core features before deeper testing.' },
            { icon: <MdStorage color="white" size={18} />, title: 'Data Validation', desc: 'Cross-check system data for accuracy and consistency.' },
            { icon: <MdBugReport color="white" size={18} />, title: 'Defect Tracking & Retesting', desc: 'Log bugs, collaborate with developers, and confirm fixes.' },
          ].map((item) => (
            <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #f0f0f0', borderRadius: '10px', padding: '18px 24px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#C8B1E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Subtitle', fontSize: '13px', color: '#555' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Stacks */}
      <section id="tools" style={{ padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#532b88' }}>
          TOOLS & STACKS
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { icon: <SiShortcut size={32} color="#FF6436" />, label: 'Shortcut' },
            { icon: <img src="https://jam.dev/favicon.ico" style={{ width: 32, height: 32 }} />, label: 'Jam' },
            { icon: <FaMicrosoft size={32} color="#00A4EF" />, label: 'Microsoft' },
            { icon: <SiQuickbooks size={32} color="#2CA01C" />, label: 'QuickBooks' },
            { icon: <SiCanva size={32} color="#00C4CC" />, label: 'Canva' },
            { icon: <FaFigma size={32} color="#F24E1E" />, label: 'Figma' },
            { icon: <FaHtml5 size={32} color="#E34F26" />, label: 'HTML5' },
            { icon: <FaCss3Alt size={32} color="#1572B6" />, label: 'CSS3' },
            { icon: <FaReact size={32} color="#61DAFB" />, label: 'React' },
            { icon: <SiTailwindcss size={32} color="#38BDF8" />, label: 'Tailwind' },
            { icon: <SiMysql size={32} color="#4479A1" />, label: 'MySQL' },
          ].map((tool) => (
            <div key={tool.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              {tool.icon}
              <span style={{ fontFamily: 'Subtitle', fontSize: '12px', color: '#555' }}>{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" style={{ backgroundColor: '#2a2a2a', padding: isMobile ? '40px 24px' : '60px 50px' }}>
        <h2 style={{ fontFamily: 'Title', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#ff751f' }}>
          CONTACTS
        </h2>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'center', gap: isMobile ? '20px' : '32px', flexWrap: 'wrap', maxWidth: isMobile ? '280px' : 'none', margin: '0 auto' }}>
          <a href="tel:+639619613296" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff751f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MdPhone color="white" size={18} />
            </div>
            <span style={{ fontFamily: 'Subtitle', fontSize: '14px', color: '#fff' }}>+63 961 961 3296</span>
          </a>
          <a href="mailto:shainaorpilla@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff751f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MdEmail color="white" size={18} />
            </div>
            <span style={{ fontFamily: 'Subtitle', fontSize: '14px', color: '#fff' }}>shainaorpilla@gmail.com</span>
          </a>
          <a href="https://instagram.com/orpilla.sr" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff751f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <AiFillInstagram color="white" size={18} />
            </div>
            <span style={{ fontFamily: 'Subtitle', fontSize: '14px', color: '#fff' }}>orpilla.sr</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ff751f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MdLocationOn color="white" size={18} />
            </div>
            <span style={{ fontFamily: 'Subtitle', fontSize: '14px', color: '#fff' }}>San Juan City, Philippines</span>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App