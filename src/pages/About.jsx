import Layout from '../components/Layout';

const aboutImages = [
  '/images/abt.jpeg',
  '/images/abt-2.jpeg',
  '/images/abt3.jpeg',
  '/images/abt3-2.jpeg',
];

const team = [
  
  { name: 'Nabila', title: 'Pastry Chef', img: '/images/nabila.jpeg' },
  { name: 'Lama', title: 'Cake Designer', img: '/images/nabila.jpeg' },
  { name: 'Yara', title: 'Marketer', img: '/images/nabila.jpeg' },
];

export default function About() {
  return (
    <Layout>
      <div className="about-page">
        <section className="about-hero">
          <p className="title-label">About Us</p>
          <h1>Crafting <span>Sweet</span> Memories</h1>
          <p>From our oven to your table — every dessert is handmade with the finest ingredients and a generous pinch of love.</p>
        </section>

        <div className="about-images-grid">
          {aboutImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`About ${i + 1}`}
              style={{ aspectRatio: '1/1', borderRadius: 15, objectFit: 'cover', width: '100%' }}
            />
          ))}
        </div>

        <section className="our-story-section">
          <div className="our-story-text">
            <span className="section-label">Our Story</span>
            <h2>Where it all began</h2>
            <p>Estrella Doce started as a small home kitchen in 2018. Today we serve hundreds of happy customers every week, but the recipes — and the love behind them — haven't changed.</p>
          </div>
          <div className="our-story-img-stack">
            <img
              src="/images/story1.jpeg"
              alt="Our story"
              className="story-img-tall"
              style={{ minHeight: 320, width: '100%', objectFit: 'cover', borderRadius: 15 }}
            />
            <div className="story-img-small">
              <img src="/images/story.jpeg" alt="Story" style={{ minHeight: 150, borderRadius: 15, width: '100%', objectFit: 'cover' }} />
              <img src="/images/sweets.jpeg" alt="Sweets" style={{ minHeight: 150, borderRadius: 15, width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section className="mission-vision-container">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <div className="mv-content">
              <h3>Our Mission</h3>
              <p>To bring joy through every sweet bite, using fresh, premium, locally sourced ingredients.</p>
            </div>
          </div>
          <div className="mv-card">
            <div className="mv-icon">✨</div>
            <div className="mv-content">
              <h3>Our Vision</h3>
              <p>To be the most loved dessert destination, known for warmth, quality and craftsmanship.</p>
            </div>
          </div>
        </section>

        <section className="our-team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-member">
                <img
                  src={m.img}
                  alt={m.name}
                  className="team-photo"
                  style={{ margin: '0 auto 15px', display: 'block', objectFit: 'cover' }}
                />
                <h4>{m.name}</h4>
                <p className="team-title">{m.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
