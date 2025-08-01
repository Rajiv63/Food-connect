import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-6 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Food Connect. All rights reserved.</p>
                <p className="text-xs text-gray-400 mt-2">Connecting communities, reducing waste.</p>
            </div>
        </footer>
    );
};

export default Footer;