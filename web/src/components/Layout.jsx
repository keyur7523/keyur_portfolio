import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import "../App.css"

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <div className="page-container">
            <ScrollProgress />
            <Navbar />
            <main id="main-content">
                {/* No exit animation: the next page responds the instant you click instead of waiting for the old one to leave */}
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Outlet />
                </motion.div>
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}
