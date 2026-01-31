import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './style/NotFound.css';

export default function NotFound() {
    return (
        <div className='notfound-page'>
            <motion.div
                className='notfound-content'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='notfound-code'>
                    4<span className='accent'>0</span>4
                </h1>
                <h2 className='notfound-title'>Page Not Found</h2>
                <p className='notfound-message'>
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <div className='notfound-actions'>
                    <Link to='/' className='notfound-btn primary'>
                        <FaHome />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className='notfound-btn secondary'
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
