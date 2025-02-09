import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', { email, password, isSignUp });
  };

  return (
    <>
      <Head>
        <title>{isSignUp ? 'Sign Up' : 'Login'} - MailFreely</title>
        <meta name="description" content="Login to your secure MailFreely account or create a new privacy-focused account." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="stylesheet" href="https://t3l.ls/data/fonts/roboto/import.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <div className={styles.headerTop}>
              <Link href="/" className={styles.logo}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#4F46E5"/>
                  <path d="M8 12L16 18L24 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6" y="10" width="20" height="12" rx="2" stroke="white" strokeWidth="2"/>
                </svg>
                <span>MailFreely</span>
              </Link>
              <Link href="/" className={styles.closeButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <h1>{isSignUp ? 'Create Your Privacy Account' : 'Welcome Back'}</h1>
            <p>{isSignUp ? 'Get unlimited private email addresses' : 'Access your MailFreely account'}</p>
          </div>

          <div className={styles.developmentNotice}>
            <div className={styles.noticeIcon}>🚧</div>
            <div>
              <h3>Service currently in Development</h3>
              <p>MailFreely is still being built. Authentication is not yet functional.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            {isSignUp && (
              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            )}

            {isSignUp && (
              <div className={styles.privacyFeatures}>
                <h4>🔒 Your Privacy Benefits:</h4>
                <ul>
                  <li>✓ Unlimited email addresses (xxxx@mailfreely.de)</li>
                  <li>✓ Create and delete throwaway emails instantly</li>
                  <li>✓ Just €0.25/month from t3lls account balance</li>
                  <li>✓ Zero tracking or data collection</li>
                  <li>✓ Works with maintime.io and all t3lls services</li>
                </ul>
              </div>
            )}

            <button type="submit" className={styles.submitButton}>
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className={styles.switchButton}
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </button>

            {!isSignUp && (
              <Link href="/forgot-password" className={styles.forgotPassword}>
                Forgot your password?
              </Link>
            )}
          </form>

          <div className={styles.securityInfo}>
            <div className={styles.securityIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10B981" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4>Privacy First Architecture</h4>
              <p>
                Your privacy is important to me.<br></br>MailFreely is designed to minimize data collection and uses one-way links to make your usage as untraceable as possible.
              </p>
            </div>
          </div>
            
          <div className={styles.footer}>
            <p>By using MailFreely, you agree to our <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link></p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#9ca3af' }}>
              <br></br>
              &copy; 2025 t3lls by Tell Hensel&nbsp;
              <br></br>
              <a href="https://github.com/t3llscode/mailfreely" target="_blank" rel="noopener noreferrer" style={{ color: '#4F46E5', textDecoration: 'underline' }}>
                Source Code
              </a> licensed under the AGPL 3.0
            </p>
          </div>
        </div>

        <div className={styles.background}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </div>
    </>
  );
}
