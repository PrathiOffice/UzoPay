import React, { useState, useCallback, useMemo } from "react";
import "../../styles/Button.css";

interface NavItem {
  label: string;
  to: string;
}
const NAV_ITEMS: NavItem[] = [
  { label: "Products", to: "#products" },
  { label: "AI Banking", to: "#ai-banking" },
  { label: "Payments", to: "#payments" },
  { label: "Payouts", to: "#payouts" },
  { label: "Contact us", to: "#contact" },
];

const AUTH_ITEMS: NavItem[] = [
  { label: "Login", to: "#login" },
  { label: "Sign up", to: "#signup" },
];

const STYLES = {
  header: "fixed top-0 left-0 z-50 w-full bg-black shadow-md",
  container: "container mx-auto flex items-center justify-between px-6 py-3",
  logo: "text-white font-bold text-xl leading-none tracking-tight hover:text-gray-300 transition-colors duration-300",
  nav: "hidden lg:flex flex-1 justify-center",
  navList: "flex space-x-6",
  navLink:
    "text-white hover:text-gray-300 transition-colors duration-300 font-light text-base",
  authContainer: "hidden lg:flex space-x-4 items-center",
  loginButton:
    "text-white hover:text-gray-300 transition-colors duration-300 h-8 flex items-center",
  signupButton:
    "text-white relative inline-block px-6 py-2 h-10 flex items-center justify-center rounded-full transition-all duration-300 signup-border-animation",
  mobileMenuButton:
    "lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-300 text-white",
  mobileMenu:
    "lg:hidden fixed top-0 left-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out",
  mobileNavLink:
    "text-white text-xl mb-4 hover:text-gray-300 transition-colors duration-300 font-bold block px-6 py-2",
} as const;

const HamburgerIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className="h-6 w-6 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {isOpen ? (
      <>
        <path d="M6 6l12 12M6 18l12-12" />
      </>
    ) : (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    )}
  </svg>
);

export const Logo: React.FC<{
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}> = ({ onClick }) => (
  <a
    href="#home"
    className="text-white hover:text-gray-300 transition-colors duration-300"
    onClick={onClick}
    aria-label="UzoPay Home"
    style={{
      fontFamily: '"Inter", "Arimo Hebrew Subset Italic", sans-serif',
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "-0.6px",
    }}
  >
    U
    <span
      style={{
        fontFamily: '"Arimo Hebrew Subset Italic", sans-serif',
        fontStyle: "italic",
        fontWeight: 700,
      }}
    >
      z
    </span>
    OPay
  </a>
);

const NavLink: React.FC<{
  item: NavItem;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
  className?: string;
  index?: number;
}> = ({ item, onClick, className = STYLES.navLink, index = 0 }) => (
  <a
    href={item.to}
    onClick={(e) => onClick(e, item.to)}
    className={`${className} nav-item`}
    style={{ animationDelay: `${index * 0.15}s` }}
    aria-label={`Navigate to ${item.label}`}
  >
    {item.label}
  </a>
);

const Navigation: React.FC<{
  items: NavItem[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}> = ({ items, onNavClick }) => (
  <nav className={STYLES.nav} role="navigation" aria-label="Main navigation">
    <ul className={STYLES.navList}>
      {items.map((item) => (
        <li key={item.label}>
          <NavLink item={item} onClick={onNavClick} />
        </li>
      ))}
    </ul>
  </nav>
);

const AuthButtons: React.FC<{
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}> = ({ onNavClick }) => (
  <div className={STYLES.authContainer}>
    {/* Login button (unchanged) */}
    <NavLink
      item={AUTH_ITEMS[0]}
      onClick={onNavClick}
      className={STYLES.loginButton}
    />

    {/* Replaced Sign up button */}
    <button
      className="neon-button"
      onClick={(e) => onNavClick(e as any, AUTH_ITEMS[1].to)} // keep same behavior as NavLink
    >
      <svg
        className="neon-border"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        preserveAspectRatio="none"
      >
        <rect x="1.5" y="1.5" width="197" height="47" rx="25" ry="25" />
      </svg>
      <span className="neon-text">{AUTH_ITEMS[1].label}</span>
    </button>
  </div>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}> = ({ isOpen, onClose, onNavClick }) => {
  const mobileMenuItems = useMemo(
    () => [{ label: "", to: "#home" }, ...NAV_ITEMS, ...AUTH_ITEMS],
    []
  );

  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
      onNavClick(e, to);
      onClose();
    },
    [onNavClick, onClose]
  );

  return (
    <div
      className={`${STYLES.mobileMenu} ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="flex flex-col items-start justify-start mt-16 px-4">
        {mobileMenuItems.map((item, index) => (
          <NavLink
            key={item.label}
            item={item}
            onClick={handleMobileNavClick}
            className={STYLES.mobileNavLink}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
      if (to.startsWith("#")) {
        e.preventDefault();
        const section = document.querySelector(to);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  const openMobileMenu = useCallback(() => setMobileOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      handleNavClick(e, "#home");
    },
    [handleNavClick]
  );

  return (
    <>
      <style>{`
        .signup-border-animation {
          position: relative;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 25px;
          overflow: hidden;
        }
        
        .signup-border-animation::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, 
            #ffffff, #e0e0e0, #c0c0c0, #ffffff, 
            #e0e0e0, #c0c0c0, #ffffff, #e0e0e0
          );
          background-size: 400% 400%;
          border-radius: 25px;
          z-index: -1;
          animation: borderRun 2s linear infinite;
        }
        
        .signup-border-animation::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000000;
          border-radius: 23px;
          z-index: -1;
        }
        
        @keyframes borderRun {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        
        .signup-border-animation:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .nav-item {
          opacity: 0;
          transform: translateX(-30px) scale(0.9) rotate(-5deg);
          animation: popIn 0.4s ease-out forwards;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.9) rotate(-5deg);
          }
          60% {
            opacity: 0.7;
            transform: translateX(10px) scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0);
          }
        }
      `}</style>

      <header className={STYLES.header} role="banner">
        <div className={STYLES.container}>
          <Logo onClick={handleLogoClick} />

          <Navigation items={NAV_ITEMS} onNavClick={handleNavClick} />

          <AuthButtons onNavClick={handleNavClick} />

          <button
            className={STYLES.mobileMenuButton}
            aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={mobileOpen ? closeMobileMenu : openMobileMenu}
          >
            <HamburgerIcon isOpen={mobileOpen} />
          </button>
        </div>

        <MobileMenu
          isOpen={mobileOpen}
          onClose={closeMobileMenu}
          onNavClick={handleNavClick}
        />
      </header>
    </>
  );
};

export default Header;
