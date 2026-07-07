import { Component, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { LenisProvider } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 0.9, 0.28, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

const reducedVariants = {
  initial: { opacity: 1 },
  enter: { opacity: 1 },
  exit: { opacity: 1 },
};

// Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
          color: 'var(--bark)',
          padding: '40px 20px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', marginBottom: '12px' }}>Something went wrong</h2>
          <p style={{ color: 'var(--ash-dark)', marginBottom: '20px' }}>We hit an unexpected problem. Please refresh the page.</p>
          <button className="btn btn-ember" onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedOutlet() {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? reducedVariants : pageVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        id="main-content"
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <LenisProvider>
          <ScrollToTop />
          <Navbar />
          <AnimatedOutlet />
          <Footer />
          <ScrollButton />
        </LenisProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
