"use client";
import React, { useState } from "react";
import styles from "../styles/Footer.module.css";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div>
      <h3 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h3>
      <p>Sign up for updates from trend muse</p>
      <form className={styles.subscriptionForm} onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <h3>CONTACT US</h3>
      <p>+44 221 133 5360</p>
      <p>customercare@trendmuse.com</p>
      <div>
        <span>CURRENCY</span>
        <p>USD</p>
      </div>
    </div>
  );
};

const CollapsibleSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.collapsibleSection}>
      <button
        className={styles.sectionToggle}
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-controls={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <h3 className={styles.sectionTitle}>{title}</h3>
        <span
          className={`${styles.toggleArrow} ${isExpanded ? styles.expanded : ""}`}
        >
          &#9662;
        </span>
      </button>

      <div
        id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={`${styles.sectionContent} ${isExpanded ? styles.expanded : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

const QuickLinks = () => {
  return (
    <CollapsibleSection title="QUICK LINKS">
      <ul className={styles.linksList}>
        <li className={styles.linkItem}>Orders &amp; Returns</li>
        <li className={styles.linkItem}>Join/Login as a Seller</li>
        <li className={styles.linkItem}>Payment &amp; Pricing</li>
        <li className={styles.linkItem}>Return &amp; Refunds</li>
        <li className={styles.linkItem}>FAQs</li>
        <li className={styles.linkItem}>Privacy Policy</li>
        <li className={styles.linkItem}>Terms &amp; Conditions</li>
      </ul>
    </CollapsibleSection>
  );
};

const MettaMuse =()=>{
    return (
        <CollapsibleSection title="metta muse">
          <ul className={styles.linksList}>
            <li className={styles.linkItem}>About &amp; Us</li>
            <li className={styles.linkItem}>Stories</li>
            <li className={styles.linkItem}>Artisans</li>
            <li className={styles.linkItem}>Boutiques</li>
            <li className={styles.linkItem}>Contact Us</li>
            <li className={styles.linkItem}>EU &amp; Compliances &amp; Docs </li>
          </ul>
        </CollapsibleSection>
      );

}

const SocialMedia = () => {
  return (
    <CollapsibleSection title="FOLLOW US">
      <div className={styles.socialIcons}>
        <a href="#" aria-label="Facebook">
          <i className="tiTiBrandFacebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <i className="tiTiBrandInstagram" />
        </a>
      </div>
    </CollapsibleSection>
  );
};

const PaymentMethods = () => {
  return (
    <CollapsibleSection title="metta muse ACCEPTS">
      <div className={styles.paymentIcons}>
        <img src="/visa.svg" alt="Visa" />
        <img src="/pintrest.svg" alt="Mastercard" />
        <img src="/applePay.svg" alt="Apple Pay" />
        <img src="/pay.svg" alt="Shop Pay" />
      </div>
    </CollapsibleSection>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <NewsletterSubscription />
        <ContactInfo />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.linksContainer}>
            <MettaMuse/>
          <QuickLinks />
          <SocialMedia />
          <PaymentMethods />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
