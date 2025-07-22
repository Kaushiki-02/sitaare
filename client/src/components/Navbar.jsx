import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import hohLogo from "../assets/hoh_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSitaareLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHohLogoClick = (event) => {
    if (window.scrollY > 0) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If scrollY is 0, the default <a> tag behavior will proceed, opening the link.
  };

   // Inject global padding-top to body to prevent navbar overlap
  useEffect(() => {
    document.body.style.paddingTop = "280px"; // Adjust based on navbar height
    return () => {
      document.body.style.paddingTop = "0"; // Cleanup on unmount
    };
  }, []);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Who we Are",
      sub: [
        {
          label: "Purpose and Passion",
          path: "/who-we-are/purpose-and-passion",
        },
        { label: "Founders Desk", path: "/who-we-are/founders-desk" },
      ],
    },
    {
      label: "Meet Our Sitaare",
      path: "/meet-our-sitaare",
    },
    {
      label: "Our Aspiration",
      path: "/our-aspiration",
    },
    // {
    //   label: "News and Events",
    //   path: "/news-and-events",
    // },
    {
      label: "Impact",
      sub: [
        { label: "Milestones", path: "/impact/milestones" },
       // {
         // label: "Success stories",
          
         // sub: [
            // {
            //   label: "Testimonials",
            //   path: "/impact/success-stories/testimonials",
            // },
            // { label: "Outcomes", path: "/impact/success-stories/outcomes" },
          ],
        //},
     // ],
    },
    {
      label: "Partners",
      path: "/partners",
    },
    
    {
      label: "Collaborate",
      sub: [
        {
          label: "Donate for a Cause",
          path: "/collaborate/donate-for-a-cause",
        },
        { label: "Get Involved", path: "/collaborate/get-involved" },
        { label: "Partner With us", path: "/collaborate/partner-with-us" },
        {
          label: "Contribute Material",
          path: "/collaborate/contribute-material",
        },

        
      ],

    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },

  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-md transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-softBg/90"
      }`}
    >
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="https://houseofhumanity.in/"
              onClick={handleHohLogoClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={hohLogo}
                alt="House of Humanity"
                className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#FFD700]"
              />
            </a>
            <div className="h-8 border-l-2 border-gray-300 mx-2"></div>
            <Link to="/" onClick={handleSitaareLogoClick}>
              <img
                src={logo}
                alt="Project Sitaare"
                className="h-14 sm:h-16 transition duration-200 hover:drop-shadow-[0_0_12px_#e91e63]"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl2:flex space-x-3 text-xs font-medium ml-10">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.sub &&
                  item.sub.some(
                    (sub) =>
                      location.pathname === sub.path ||
                      (sub.sub &&
                        sub.sub.some(
                          (subSub) => location.pathname === subSub.path
                        ))
                  ));
              return (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`relative px-3 py-1 rounded-lg flex items-center gap-1 transition-all duration-300 ${
                      isActive
                        ? "text-primary font-bold bg-primaryLight border-b-2 border-primary"
                        : "text-primary hover:text-primaryDark hover:bg-primaryLight"
                    }`}
                  >
                    {item.label}
                    {item.sub && (
                      <svg
                        className="ml-1 w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.sub && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-primaryLight rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                      {item.sub.map((sub) => (
                        <div key={sub.label} className="relative group/sub">
                          <Link
                            to={sub.path}
                            className={`block px-4 py-2 text-primary hover:text-primaryDark hover:bg-primaryLight transition-all duration-200 flex items-center justify-between ${
                              location.pathname === sub.path ||
                              (sub.sub &&
                                sub.sub.some(
                                  (subSub) => location.pathname === subSub.path
                                ))
                                ? "font-bold bg-primaryLight"
                                : ""
                            }`}
                          >
                            {sub.label}
                            {sub.sub && (
                              <svg
                                className="ml-1 w-3 h-3 text-primary"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </Link>
                          {sub.sub && (
                            <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-primaryLight rounded-lg shadow-lg opacity-0 group-hover/sub:opacity-100 group-hover/sub:visible invisible transition-opacity duration-200 z-50">
                              {sub.sub.map((subSub) => (
                                <Link
                                  key={subSub.label}
                                  to={subSub.path}
                                  className={`block px-4 py-2 text-primary hover:text-primaryDark hover:bg-primaryLight transition-all duration-200 ${
                                    location.pathname === subSub.path
                                      ? "font-bold bg-primaryLight"
                                      : ""
                                  }`}
                                >
                                  {subSub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile/Hamburger Button */}
          <div className="xl2:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary hover:bg-primaryDark text-white p-2 rounded-lg shadow-md transition"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div
          className={`xl2:hidden backdrop-blur-md px-4 py-4 space-y-2 shadow-md transition-all duration-300 ${
            isScrolled ? "bg-white/80" : "bg-softBg/95"
          }`}
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.sub &&
                item.sub.some(
                  (sub) =>
                    location.pathname === sub.path ||
                    (sub.sub &&
                      sub.sub.some(
                        (subSub) => location.pathname === subSub.path
                      ))
                ));
            return (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className={`block text-base font-medium py-2 border-b flex items-center gap-1 transition duration-200 ${
                    isActive
                      ? "text-primary font-bold border-primary"
                      : "text-primary hover:text-primaryDark"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  {item.sub && (
                    <svg
                      className="ml-1 w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.sub && (
                  <div className="pl-4">
                    {item.sub.map((sub) => (
                      <div key={sub.label}>
                        <Link
                          to={sub.path}
                          className={`block text-sm py-1 border-b transition duration-200 flex items-center gap-1 ${
                            location.pathname === sub.path ||
                            (sub.sub &&
                              sub.sub.some(
                                (subSub) => location.pathname === subSub.path
                              ))
                              ? "text-primary font-bold border-primary"
                              : "text-primary hover:text-primaryDark"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                          {sub.sub && (
                            <svg
                              className="ml-1 w-3 h-3 text-primary"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </Link>
                        {sub.sub && (
                          <div className="pl-4">
                            {sub.sub.map((subSub) => (
                              <Link
                                key={subSub.label}
                                to={subSub.path}
                                className={`block text-xs py-1 border-b transition duration-200 ${
                                  location.pathname === subSub.path
                                    ? "text-primary font-bold border-primary"
                                    : "text-primary hover:text-primaryDark"
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subSub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
