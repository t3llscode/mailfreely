
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fadeIn = document.getElementById('fade-in');
    setTimeout(() => {
      if (fadeIn) fadeIn.style.opacity = '1';
    }, 1400);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
            <Head>
        <title>MailFreely - Unlimited eMails</title>
        <meta name="description" content="MailFreely - Create unlimited private email addresses (xxxx@mailfreely.de) for ultimate privacy. Just €0.25/month from your t3lls account balance. Currently in development." />
        <meta name="keywords" content="private email, secure email, encrypted email, anonymous email, privacy email, throwaway email, temporary email, unlimited emails" />
        <meta name="author" content="t3lls by Tell Hensel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta property="og:title" content="MailFreely - Create Unlimited Private Email Addresses" />
        <meta property="og:description" content="Create unlimited private email addresses for ultimate privacy. Just €0.25/month from your t3lls account balance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mailfreely.de" />
        <link rel="stylesheet" href="https://t3lls/data/fonts/roboto/import.css" />
      </Head>

      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#4F46E5"/>
                <path d="M8 12L16 18L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="6" y="10" width="20" height="12" rx="2" stroke="white" strokeWidth="2"/>
              </svg>
              <span>MailFreely</span>
            </div>
            <div className={styles.navLinks}>
              <a href="#features">Features</a>
              <a href="#source-code">Source Code</a>
              <a href="#pricing">Pricing</a>
              <a href="#api">API</a>
              <Link href="/login" className={styles.loginBtn}>Login</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              🚧 Currently in Development
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.gradient}>Unlimited</span> eMails for your  <span className={styles.gradient}>online Accounts</span>
            </h1>
            <p className={styles.heroDescription}>
              Protect your inbox and reclaim your privacy. Create unlimited private eMail addresses for every website, app or service - avoiding tracking and spam.
            </p>
            <div className={styles.heroActions}>
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Enter your eMail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>
                  {isSubscribed ? '✓ Joined!' : 'Join Waitlist'}
                </button>
              </form>
              <p className={styles.noSpam}>I'll let you know once MailFreely goes live. Your eMail won't be used for any other purpose. No spam, ever. I promise.</p>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div id="fade-in" className={styles.emailPreview} style={{ opacity: 0 }}>
              <div className={styles.emailHeader}>
                <div className={styles.emailControls}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.emailTitle}>MailFreely Inbox</div>
              </div>
              <div className={styles.emailContent}>
                <div className={styles.emailItem}>
                  <div className={styles.emailIcon}>🛒</div>
                  <div className={styles.emailText}>
                    <div>shopping@mailfreely.de</div>
                    <div><strong>Amazon</strong>: Your order has shipped! <span style={{ color: '#10B981' }}>• 2 min ago</span></div>
                  </div>
                </div>
                <div className={styles.emailItem}>
                  <div className={styles.emailIcon}>📰</div>
                  <div className={styles.emailText}>
                    <div>newsletter@mailfreely.de</div>
                    <div><strong>Medium</strong>: Top stories for you <span style={{ color: '#F59E0B' }}>• 8 min ago</span></div>
                  </div>
                </div>
                <div className={styles.emailItem}>
                  <div className={styles.emailIcon}>🔒</div>
                  <div className={styles.emailText}>
                    <div>banking@mailfreely.de</div>
                    <div><strong>Bank</strong>: Login verification code <span style={{ color: '#EF4444' }}>• 1 hour ago</span></div>
                  </div>
                </div>
                <div className={styles.emailItem}>
                  <div className={styles.emailIcon}>💬</div>
                  <div className={styles.emailText}>
                    <div>chatgpt@mailfreely.de</div>
                    <div><strong>OpenAI</strong>: Your conversation export <span style={{ color: '#8B5CF6' }}>• 2 hours ago</span></div>
                  </div>
                </div>
                <div className={styles.emailItem}>
                  <div className={styles.emailIcon}>➕</div>
                  <div className={styles.emailText}>
                    <div style={{ color: '#4F46E5', fontWeight: 600 }}>Create unlimited addresses…</div>
                    <div>Perfect privacy protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.features}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Why choose MailFreely?</h2>
            <p className={styles.sectionDescription}>
              MailFreely is designed to give you complete control over your online identity, without compromising on security or usability.
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#4F46E5" fillOpacity="0.1"/>
                    <path d="M24 16V32M16 20H32M20 24H28M18 28H30" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Unlimited eMail Addresses</h3>
                <p>Create as many eMail addresses as you need (×××@mailfreely.de) - perfect for organizing your digital accounts.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#10B981" fillOpacity="0.1"/>
                    <path d="M36 18L20 30L12 24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Throwaway Accounts</h3>
                <p>Create temporary eMails for signups, shopping and services. Delete them anytime to stop unwanted eMails.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#F59E0B" fillOpacity="0.1"/>
                    <path d="M24 12L16 20H20V32H28V20H32L24 12Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>A t3lls Service</h3>
                <p>Seamlessly integrates with your t3lls account. Same login, yet no traceable connection between services.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#EF4444" fillOpacity="0.1"/>
                    <path d="M28 16H20C17.7909 16 16 17.7909 16 20V28C16 30.2091 17.7909 32 20 32H28C30.2091 32 32 30.2091 32 28V20C32 17.7909 30.2091 16 28 16Z" stroke="#EF4444" strokeWidth="2"/>
                    <path d="M24 20V28M20 24H28" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>No Tracking</h3>
                <p>I don't track, analyze, or sell your data. Your privacy is completely protected with zero data collection.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#8B5CF6" fillOpacity="0.1"/>
                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="#8B5CF6" strokeWidth="2"/>
                    <path d="M18 24L22 28L30 20" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Privacy Focused</h3>
                <p>I am taking all measures to avoid personalized data, so even a breach won't expose your data.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="#06B6D4" fillOpacity="0.1"/>
                    <path d="M24 4L30 16H42L33 25L36 37L24 31L12 37L15 25L6 16H18L24 4Z" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Fair Pricing</h3>
                <p>0.25€ per month - this fee covers operating costs and keeps MailFreely ad-free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Source Code Section */}
        <section id="source-code" className={styles.sourceCode}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Open Source under AGPL&nbsp;3.0</h2>
            <p className={styles.sectionDescription}>
              MailFreely is fully open source and licensed under the AGPL&nbsp;3.0. You can review the code, verify all privacy claims, or even run your own instance for maximum control. Transparency and user empowerment are at the heart of this project.
            </p>
            <div className={styles.sourceCodeCard}>
              <div className={styles.sourceCodeIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="16" fill="#4F46E5" fillOpacity="0.1"/>
                  <path d="M20 24L28 32L20 40M36 40H44" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>View the Source Code</h3>
              <p>
                Explore, audit, or contribute to MailFreely on GitHub. Join the community to help improve the service for everyone.
              </p>
              <a 
                href="https://github.com/t3llscode/mailfreely" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubBtn}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              <div className={styles.repoStats}>
                <a 
                  href="https://github.com/t3llscode/mailfreely" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.repoStat}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  Star the project
                </a>
                <a 
                  href="https://github.com/t3llscode/mailfreely/fork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.repoStat}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                  </svg>
                  Fork & contribute
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* API Section (moved below CTA) */}

        {/* API Section (moved below CTA) */}
        <section id="api" className={styles.apiSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>MailFreely API: Build, Automate, Integrate</h2>
            <p className={styles.sectionDescription}>
              The MailFreely API lets you do everything you can in the app. Build your own tools, automate your inbox or create custom integrations.
            </p>
            <div className={styles.apiFeaturesGrid}>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#4F46E5" fillOpacity="0.1"/><path d="M16 24h16M24 16v16" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Manage Addresses</h3>
                <p>Create, delete, and organize unlimited eMail addresses for your use cases.</p>
              </div>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#10B981" fillOpacity="0.1"/><path d="M16 24h16M24 16v16" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Send Emails</h3>
                <p>Send eMails from any of your MailFreely addresses, with full control over content and attachments (use responsibly).</p>
              </div>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#F59E0B" fillOpacity="0.1"/><path d="M24 16v16M16 24h16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Read & Search Emails</h3>
                <p>Fetch, search, and organize your emails. Build custom inboxes, filters, or bots.</p>
              </div>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#8B5CF6" fillOpacity="0.1"/><path d="M24 16v16M16 24h16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Webhooks & Events</h3>
                <p>Get real-time notifications for new mail, address changes, or account activity, perfect for automations.</p>
              </div>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#06B6D4" fillOpacity="0.1"/><path d="M24 16v16M16 24h16" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Open Source SDKs</h3>
                <p>Integrate MailFreely into your stack with official and community SDKs for popular languages. (coming soon)</p>
              </div>
              <div className={styles.apiFeatureCard}>
                <div className={styles.apiFeatureIcon}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#EF4444" fillOpacity="0.1"/><path d="M24 16v16M16 24h16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>Privacy & Security</h3>
                <p>Strong authentication, privacy by design, and all the guarantees of MailFreely, accessible from for your code.</p>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="#source-code" className={styles.githubBtn}>API Docs (coming soon)</a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.pricing}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
            <p className={styles.sectionDescription}>
              One affordable plan for unlimited privacy protection
            </p>
            <div className={styles.pricingCards}>
              <div className={`${styles.pricingCard} ${styles.popular}`}>
                <div className={styles.popularBadge}>Only Plan Available</div>
                <div className={styles.pricingHeader}>
                  <h3>MailFreely</h3>
                  <div className={styles.price}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>0.25</span>
                    <span className={styles.period}>/month</span>
                  </div>
                  <div className={styles.savings}>Deducted from your t3lls Account Balance</div>
                </div>
                <ul className={styles.features}>
                  <li>✓ Unlimited eMail Addresses (×××@mailfreely.de)</li>
                  <li>✓ Create & Delete Throwaway eMails</li>
                  <li>✓ Privacy-First Architecture</li>
                  <li>✓ No Data Tracking or Collection</li>
                  <li>✓ Prepaid with privacy-focused payment options</li>
                </ul>
                <button className={styles.pricingBtn}>Get Started with t3lls Account</button>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#9ca3af' }}>
                  The t3lls Account Balance is a prepaid account that can be funded using privacy-focused payment methods. While this balance can be used for all t3lls services, payments will never be linked to your identity or data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Take Control of Your Privacy?</h2>
            <p>Join the waitlist to be notified when MailFreely launches</p>
            <form onSubmit={handleSubscribe} className={styles.ctaForm}>
              <input
                type="email"
                placeholder="Enter your eMail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.ctaInput}
                required
              />
              <button type="submit" className={styles.ctaBtn}>
                {isSubscribed ? '✓ Joined!' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </section>

        {/* Popup Modal */}
        {showPopup && (
          <div className={styles.popupOverlay} onClick={closePopup}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.popupClose} onClick={closePopup}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className={styles.popupIcon}>
                🎯
              </div>
              
              <h3 className={styles.popupTitle}>The Waitlist has to wait</h3>
              
              <p className={styles.popupMessage}>
                MailFreely is still in active development. I'm working hard to bring you the ultimate privacy-focused email service, but I want to make sure everything is perfect before launch.
              </p>
              
              <div className={styles.popupFeatures}>
                <div className={styles.popupFeature}>
                  <span className={styles.popupFeatureIcon}>🔒</span>
                  <span>Privacy-first architecture in progress</span>
                </div>
                <div className={styles.popupFeature}>
                  <span className={styles.popupFeatureIcon}>⚡</span>
                  <span>Lightning-fast email delivery being optimized</span>
                </div>
                <div className={styles.popupFeature}>
                  <span className={styles.popupFeatureIcon}>🛡️</span>
                  <span>Security features under rigorous testing</span>
                </div>
              </div>
              
              <p className={styles.popupFooter}>
                Follow the development progress on <a href="https://github.com/t3llscode/mailfreely" target="_blank" rel="noopener noreferrer">GitHub</a> or check back soon!
              </p>
              
              <button className={styles.popupButton} onClick={closePopup}>
                Got it, I'll check back later
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#4F46E5"/>
                  <path d="M8 12L16 18L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6" y="10" width="20" height="12" rx="2" stroke="white" strokeWidth="2"/>
                </svg>
                <span>MailFreely</span>
              </div>
              <p>Unlimited private eMail addresses for your online privacy</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <Link href="/login">Login</Link>
            </div>
            <div className={styles.footerSection}>
              <h4>Legal</h4>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://t3l.ls/legal">Legal Notice / Impressum</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <a href="mailto:support@mailfreely.de">Support</a>
              <a href="mailto:contact@mailfreely.de">Contact</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; 2025 t3lls by Tell Hensel&nbsp;
              <span style={{ color: '#9ca3af' }}>|</span>&nbsp;
              <a href="https://github.com/t3llscode/mailfreely" target="_blank" rel="noopener noreferrer" style={{ color: '#4F46E5', textDecoration: 'underline' }}>
                Source Code
              </a> licensed under the AGPL 3.0
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}