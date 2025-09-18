import React from "react";
import { Facebook, Instagram, X, ArrowUp } from "lucide-react";
import "../../styles/Footer.css";
import { Logo } from "../MainPage/Header";
interface FooterColProps {
  heading?: string;
  links: { label: string; href: string }[];
}

const FooterCol: React.FC<FooterColProps> = ({ heading, links }) => (
  <div className="footer-col">
    {heading && <h3 className="footer-heading">{heading}</h3>}
    <ul className="footer-links">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <a className="social-btn" href={href} aria-label={label}>
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const footerCols = [
    {
      heading: "Payment",
      links: [
        { label: "Payment Gateway", href: "/" },
        { label: "Payment Links", href: "/" },
        { label: "Payment Methods", href: "/" },
        { label: "Bulk Payment", href: "/" },
        { label: "Invoice", href: "/" },
      ],
    },
    {
      heading: "AI Banking",
      links: [
        { label: "Current Account", href: "/" },
        { label: "Accounting", href: "/" },
        { label: "API Banking", href: "/" },
        { label: "UPI Autopay", href: "/" },
        { label: "Tax Payment", href: "/" },
      ],
    },
    {
      heading: "", 
      links: [
        { label: "Cards", href: "/" },
        { label: "CMS", href: "/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About us", href: "/" },
        { label: "Contact us", href: "/" },
      ],
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="footer-logo">
            <Logo
              onClick={function (e: React.MouseEvent<HTMLAnchorElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </h2>
          <div className="footer-desc">
            <p>
              Our payment gateway simplifies transactions for e-commerce <br />
              businesses, delivering fast and secure processing.With smooth
              <br />
            </p>
            <p>
              integration, we enhance your store&apos;s payment capabilities.
              Optimize <br /> your checkout process and boost customer
              satisfaction easily.
            </p>
          </div>

          <div className="footer-socials">
            <SocialIcon
              href="/"
              label="facebook"
              icon={<Facebook size={14} />}
            />
            <SocialIcon href="/" label="x" icon={<X size={14} />} />
            <SocialIcon
              href="/"
              label="instagram"
              icon={<Instagram size={14} />}
            />
          </div>
        </div>
        {footerCols.map((col, idx) => (
          <FooterCol key={idx} heading={col.heading} links={col.links} />
        ))}
      </div>

<hr className="footer-divider" />

<div className="footer-bottom">
  <p className="footer-copy">© 2025 UzOPay</p>

  <div className="footer-actions">
    <div className="footer-policies">
      <a href="/">Terms of Service</a>
      <span className="policy-sep">|</span>
      <a href="/">Privacy Policy</a>
    </div>

    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} />
    </button>
  </div>
</div>


    </footer>
  );
};

export default Footer;
