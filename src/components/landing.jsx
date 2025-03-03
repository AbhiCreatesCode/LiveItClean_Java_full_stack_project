// import "./landingpage.css";
// import { motion } from "framer-motion";

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       <motion.header 
//         className="hero-section"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1>LiveItClean</h1>
//         <p>&quot;Sustainability is not about giving up; it&apos;s about choosing wisely.&quot;</p>
//         <motion.a 
//           href="#get-started" 
//           className="cta-button"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Get Started
//         </motion.a>
//       </motion.header>
      
//       <section className="sliding-window">
//         <motion.div 
//           className="slides"
//           animate={{ x: [0, -100, -200, 0] }}
//           transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//         >
//           <div className="slide">Eco-Friendly Marketplace</div>
//           <div className="slide">Track Your Carbon Footprint</div>
//           <div className="slide">Join the Green Community</div>
//         </motion.div>
//       </section>
      
//       <section className="useful-links">
//         <h2>Explore More</h2>
//         <motion.ul 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <motion.li whileHover={{ scale: 1.1 }}><a href="#marketplace">Eco Marketplace</a></motion.li>
//           <motion.li whileHover={{ scale: 1.1 }}><a href="#tracker">Carbon Footprint Tracker</a></motion.li>
//           <motion.li whileHover={{ scale: 1.1 }}><a href="#community">Community Forum</a></motion.li>
//           <motion.li whileHover={{ scale: 1.1 }}><a href="#transport">Eco-Friendly Transport</a></motion.li>
//         </motion.ul>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;



import { motion } from "framer-motion";
import "../components/landingpage.css"

import videoBg from "../assets/backgroundVideo.mp4"; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Video Background */}
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="content">
        {/* Hero Section */}
        <section className="hero">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Live Sustainably, LiveItClean
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join us in making a difference for a greener tomorrow.
          </motion.p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
        </section>

        {/* Feature Section */}
        <section className="features">
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h2>🌱 Eco Marketplace</h2>
            <p>Find and shop sustainable products easily.</p>
          </motion.div>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h2>📊 Sustainability Tracker</h2>
            <p>Monitor your carbon footprint and progress.</p>
          </motion.div>
          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <h2>💬 Community Forum</h2>
            <p>Connect with like-minded individuals.</p>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Be the Change, Start Today!
          </motion.h2>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Now
          </motion.button>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;