import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import StatsRow from '../components/StatsRow';
import ProcessTimeline from '../components/ProcessTimeline';
import TeamCard from '../components/TeamCard';
import SmokeDivider from '../components/SmokeDivider';
import { useGsapReveal } from '../hooks/useGsapReveal';
import styles from './About.module.css';

const TEAM = [
  { name: 'Rahul M.', role: 'Head Pitmaster', image: '/images/team-1.png' },
  { name: 'Anjali S.', role: 'Kitchen Manager', image: '/images/team-2.png' },
  { name: 'Dev K.', role: 'Front of House', image: '/images/team-3.png' },
];

export default function About() {
  const manifestoRef = useGsapReveal();
  const teamRef = useGsapReveal();

  return (
    <>
      <Helmet>
        <title>About Us — Smoke Haus Kollam</title>
        <meta name="description" content="The story behind Smoke Haus. We're bringing proper, patient, wood-fired American barbecue to Kollam." />
      </Helmet>

      <PageHeader
        eyebrow="Who We Are"
        title="About Smoke Haus"
        subtitle="Real wood, real patience, real barbecue — brought to Kollam by people who missed it enough to build it themselves."
        videoSrc="/videos/1000220139.mp4"
      />

      {/* Hero Image */}
      <section className={styles.heroImgSection}>
        <div className="wrap">
          <div className={styles.imgFrame}>
            <img src="/images/about-hero.png" alt="Inside the Smoke Haus kitchen" />
          </div>
        </div>
      </section>

      {/* Stats - using CSS class instead of inline style */}
      <div className={styles.statsSection}>
        <StatsRow />
      </div>

      <SmokeDivider />

      {/* Manifesto */}
      <section className="section-pad">
        <div className="wrap">
          <div className={styles.manifesto} ref={manifestoRef}>
            <span className="eyebrow">Our Philosophy</span>
            <h2>We don't do fast food.</h2>
            <div className={styles.manifestoText}>
              <p>
                Barbecue is an exercise in patience. You can't rush a brisket. You can't fake the
                smoke ring. And you definitely can't replicate the flavour of real wood fire with
                liquid smoke or gas burners.
              </p>
              <p>
                When we opened Smoke Haus, we made a commitment: we do things the hard way.
                We source local hardwoods. We trim our own meat. We stay up through the night
                tending the fire so that when doors open at 11 AM, the food is perfect.
              </p>
              <p>
                It's a lot of work. But one bite of that brisket, and you'll know exactly why
                we do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smoker Image */}
      <section className={styles.heroImgSection}>
        <div className="wrap">
          <div className={styles.imgFrame}>
            <img src="/images/about-smoker.png" alt="Offset BBQ Smoker at Smoke Haus" />
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Team */}
      <section className={`section-pad ${styles.teamSection}`}>
        <div className="wrap">
          <div className="section-head center" ref={teamRef}>
            <span className="eyebrow">The Pit Crew</span>
            <h2>Meet the team</h2>
            <p>The folks working the fires and running the floor.</p>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <div key={member.name} className={styles.teamCardWrap}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
