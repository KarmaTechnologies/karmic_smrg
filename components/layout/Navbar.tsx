"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";
import { primaryNav } from "@/lib/constants";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar-header">
      <Container>
        <nav className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="logo-top">THE</span>
            <span className="logo-bold">SCIENCE MEDIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop-section">
            <div className="nav-menu">
              {primaryNav.map((item) => (
                <div key={item.href} className="nav-item-wrap">
                  <Link href={item.href} className="nav-link">
                    {item.label}
                    {item.children && <span className="chevron-down"></span>}
                  </Link>

                  {item.children && (
                    <div className="nav-dropdown">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="nav-dropdown-link">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="nav-auth-buttons">
              <Link href="/login" className="btn btn-outline">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`nav-mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="nav-mobile-drawer">
            <div className="mobile-nav-content">
              {primaryNav.map((item) => (
                <div key={item.href} className="mobile-nav-item-wrap">
                  {item.children ? (
                    <>
                      <button
                        className="mobile-nav-link"
                        onClick={() => handleDropdownClick(item.href)}
                      >
                        <span>{item.label}</span>
                        <span className={`chevron ${openDropdown === item.href ? 'rotate' : ''}`}>▼</span>
                      </button>
                      {openDropdown === item.href && (
                        <div className="mobile-dropdown-content">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="mobile-sub-link"
                              onClick={closeMobileMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="mobile-nav-link" onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mobile-auth-stack">
              <Link href="/login" className="btn btn-outline full-w" onClick={closeMobileMenu}>
                Login
              </Link>
              <Link href="/register" className="btn btn-primary full-w" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}