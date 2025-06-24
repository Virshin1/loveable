
import React from 'react';

interface HeaderProps {
  userName?: string;
  userId?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  userName = "Abhinav Mishra", 
  userId = "EPWR000019 (hpay)" 
}) => {
  return (
    <header className="header">
      <div className="header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo-container">
          <img className="logo" src="LOGO.jpg" alt="HPay Logo" />
        </div>
        <nav className="main-nav" style={{ flex: 1 }}>
          <ul className="nav-list" id="main-nav-list">
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="7" width="20" height="10" rx="2" fill="#4CAF50"/>
                  <rect x="4" y="9" width="16" height="6" rx="1" fill="#A5D6A7"/>
                  <rect x="7" y="12" width="2" height="2" rx="1" fill="#388E3C"/>
                </svg>
                <span>Payments</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/><path d="M12 15l-2 2 2 2 2-2-2-2z"/></svg> PPI Wallet Gold</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8c-3.333 0-5 1.333-5 4s1.667 4 5 4M12 8h.01"/><path d="M12 16h.01"/><path d="M15 12h-3"/><path d="M12 12V8M12 12v4M8 12h1m5 0h1m-6-3h.01M14 9h.01M10 15h.01M14 15h.01"/></svg> DMT</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 00-9 9 9 9 0 009 9 8 8 0 008-8 9 9 0 00-9-9z"/><path d="M22 12h-4"/><path d="M2 12h4"/><path d="M12 2v4"/><path d="M12 22v-4"/></svg> AEPS</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="#39c3e8"><path d="M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z"/></svg> UPI Pay</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/></svg> PPI Wallet</a></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="7" width="20" height="10" rx="2" fill="#29B6F6"/>
                  <rect x="4" y="9" width="16" height="6" rx="1" fill="#A5D6A7"/>
                  <rect x="7" y="12" width="2" height="2" rx="1" fill="#81D4FA"/>
                  <circle cx="12" cy="17" r="1" fill="#0288D1"/>
                </svg>
                <span>Recharge</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#29B6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2"/><path d="M12 18V6l-3 3 3-3 3 3"/><rect x="8" y="3" width="8" height="4" rx="1" ry="1"/></svg> Recharge</a></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="7" width="18" height="10" rx="3" fill="#FFB300"/>
                  <rect x="5" y="9" width="14" height="6" rx="2" fill="#FFE082"/>
                  <rect x="8" y="12" width="3" height="2" rx="1" fill="#F57C00"/>
                </svg>
                <span>Wallet Transfer</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8l4-4 4 4"/><path d="M6 4v16"/><path d="M20 12V8H8v4"/><path d="M8 8a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2V8z"/></svg> Fintech Wallet to Bank Transfer</a></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="#90CAF9"/>
                  <rect x="6" y="7" width="12" height="2" rx="1" fill="#1976D2"/>
                  <rect x="6" y="11" width="12" height="2" rx="1" fill="#1976D2"/>
                  <rect x="6" y="15" width="8" height="2" rx="1" fill="#1976D2"/>
                </svg>
                <span>BillPayments</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M9 17h6"/><path d="M14 14l-4-4 4-4"/></svg> Bill Payment Offline</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M10 17l-3-3 3-3"/><path d="M13 17h1"/></svg> Bill Payment Online</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.43 3.32a3.5 3.5 0 00-4.86 4.86L3.32 13.43a3.5 3.5 0 004.86 4.86l5.25-5.25a3.5 3.5 0 004.86-4.86l-5.25-5.25z"/><path d="M22 6s-2 6-6 6"/></svg> IGL Commercial Bill</a></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="2" fill="#1976D2"/>
                  <rect x="5" y="10" width="14" height="2" rx="1" fill="#64B5F6"/>
                  <rect x="7" y="14" width="4" height="2" rx="1" fill="#1565C0"/>
                </svg>
                <span>Credit card</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Credit Card Bill</a></li>
              </ul>
            </li>
            <li className="nav-item has-dropdown">
              <a href="#" className="nav-link">
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="12" rx="4" fill="#81C784"/>
                  <circle cx="8" cy="12" r="2" fill="#FFD600"/>
                  <circle cx="16" cy="10" r="2" fill="#E53935"/>
                  <rect x="12" y="14" width="4" height="2" rx="1" fill="#43A047"/>
                </svg>
                <span>Travel</span>
                <span className="material-icons dropdown-arrow">expand_more</span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20l-4-4m4 4l-4 4"/><path d="M12 2l4 10h-8l4-10z"/></svg> Airline</a></li>
                <li><a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"/><line x1="7" y1="11" x2="7" y2="3"/><line x1="17" y1="11" x2="17" y2="3"/><line x1="3" y1="16" x2="21" y2="16"/><circle cx="7" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg> Bus</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="navbar-balances">
          <span className="balance-block">
            <svg className="balance-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="7" width="18" height="10" rx="3" fill="#39c3e8"/>
              <rect x="5" y="9" width="14" height="6" rx="2" fill="#b2ebf2"/>
              <rect x="8" y="12" width="3" height="2" rx="1" fill="#582a80"/>
            </svg>
            <span className="balance-label">Cr Bal:</span>
            <span className="balance-value" id="current-balance">₹0.00</span>
          </span>
          <span className="balance-block">
            <svg className="balance-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 17l6-6 4 4 8-8" stroke="#582a80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="11" r="2" fill="#39c3e8"/>
            </svg>
            <span className="balance-label">Tr Bal:</span>
            <span className="balance-value" id="trade-balance">₹0.00</span>
          </span>
        </div>
        <div className="header-user-group">
          <span className="material-icons notification-icon">notifications</span>
          <div className="user-info" style={{ textAlign: 'right' }}>
            <div className="welcome">Welcome: <span className="username">{userName}</span></div>
            <div className="account-id">{userId}</div>
          </div>
          <span className="material-icons" style={{ color: '#7c3aed', fontSize: '32px' }}>account_circle</span>
          <button className="hamburger-btn" aria-label="Open navigation" tabIndex={0}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect y="6" width="32" height="4" rx="2" fill="#582a80"/>
              <rect y="14" width="32" height="4" rx="2" fill="#582a80"/>
              <rect y="22" width="32" height="4" rx="2" fill="#582a80"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
