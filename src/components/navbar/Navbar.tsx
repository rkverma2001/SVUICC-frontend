import { useEffect, useRef, useState } from "react";
import {
  User,
  Search,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import DropdownWrapper from "./coursedropdown/DropdownWrapper";
import SuggestionDropdown from "./search/SuggestionDropdown";
import MobileCourseDropdown from "./coursedropdown/MobileCourseDropdown";

const API_BASE = "http://localhost:8080/api/v1/course/search";

const Navbar: React.FC = () => {
  const { openAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCourseOpen, setIsMobileCourseOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const debounceRef = useRef<number | null>(null);

  /* ===============================
     AUTH CHECK
  =============================== */
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  /* ===============================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  =============================== */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileCourseOpen(false);
  }, [location]);

  /* ===============================
     SEARCH DEBOUNCE
  =============================== */
  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
      return;
    }

    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchSuggestions(query);
    }, 250);
  }, [query]);

  const fetchSuggestions = async (q: string) => {
    try {
      const res = await fetch(`${API_BASE}?q=${encodeURIComponent(q)}`);
      if (!res.ok) {
        setSuggestions([]);
        setIsSuggestionsOpen(false);
        return;
      }

      const data = await res.json();

      const items = data.map((course: any) => ({
        id: course._id,
        title: course.courseName || "",
        image: course.image || undefined,
      }));

      setSuggestions(items);
      setIsSuggestionsOpen(items.length > 0);
    } catch (err) {
      console.error("suggestion fetch error", err);
      setSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  };

  const onSubmitSearch = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    const q = query.trim();
    if (!q) return;
    setIsSuggestionsOpen(false);
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  /* ===============================
     UI
  =============================== */

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 h-20 px-4 sm:px-6 md:px-10 shadow-sm">
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="h-full flex items-center">
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/svuicc/svuicc.svg"
            alt="SVUICC"
            className="h-16 object-contain"
          />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex gap-4 items-center relative">
          <form onSubmit={onSubmitSearch} className="flex relative gap-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search Courses..."
              className="border rounded-md p-2 focus:ring-2 focus:ring-[#008641]"
            />
            <Button type="submit" variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>

            {isSuggestionsOpen && (
              <SuggestionDropdown
                items={suggestions}
                onSelect={(val) => {
                  setQuery(val);
                  setIsSuggestionsOpen(false);
                  navigate(`/search?q=${encodeURIComponent(val)}`);
                }}
              />
            )}
          </form>
        </div>

        {/* Desktop Right Side */}
        <div className="flex items-center gap-4">

          <Link
            to="/"
            className="hidden md:block text-sm font-medium hover:text-[#008641]"
          >
            Home
          </Link>

          {/* Desktop Dropdown */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="px-4 py-2 font-medium hover:text-[#008641] cursor-pointer">
              Certifications & Courses
            </button>
            {isDropdownOpen && <DropdownWrapper />}
          </div>

          {/* Profile */}
          {isAuthenticated ? (
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6 text-[#008641]" />
              </Button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 w-40 bg-white rounded-lg shadow-lg border p-2 flex flex-col">
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => navigate("/dashboard")}
                  >
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>

                  <Button
                    variant="ghost"
                    className="justify-start text-red-600"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={openAuth}
              variant="outline"
              className="hidden md:flex cursor-pointer"
            >
              <User className="h-5 w-5 mr-2" />
              Login / Signup
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* ===============================
         MOBILE MENU
      =============================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white rounded-md shadow-md px-4 py-4 space-y-4">

          <Link to="/" className="block font-medium">
            Home
          </Link>

          {/* Expandable Courses */}
          <div>
            <button
              onClick={() => setIsMobileCourseOpen(!isMobileCourseOpen)}
              className="w-full text-left font-medium flex justify-between items-center"
            >
              Certifications & Courses
              <span>{isMobileCourseOpen ? "−" : "+"}</span>
            </button>

            {isMobileCourseOpen && (
              <div className="mt-3 border rounded-md max-h-[400px] overflow-y-auto">
                <MobileCourseDropdown />
              </div>
            )}
          </div>

          {/* Mobile Search */}
          <form onSubmit={onSubmitSearch}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border rounded-md p-2"
            />
          </form>

          {/* Mobile Auth */}
          {isAuthenticated ? (
            <>
              <Button
                className="w-full"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </Button>
              <Button
                className="w-full text-red-600"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={openAuth}
              variant="outline"
              className="w-full"
            >
              <User className="h-5 w-5 mr-2" />
              Login / Signup
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;