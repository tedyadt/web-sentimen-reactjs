export default () => {
    const footerNavs = [
        { name: "Home", href: "/" },
        { name: "Predict", href: "/predict" },
        { name: "Dataset", href: "/dataset" }
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 py-12 md:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Column 1 - About */}
                    <div className="space-y-4">
                        <img 
                            src="https://akupintar.id/documents/20143/0/jvjvb+vjhbhjbj.png/919d824f-36a2-8087-a213-dc3f8ed903c6?version=1.0&t=1717736287023&imagePreview=1" 
                            className="w-32" 
                            alt="Logo Telkom University" 
                        />
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Sistem analisis sentimen untuk Facebook Marketplace menggunakan metode Support Vector Machine dan Chi Square.
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerNavs.map((item, idx) => (
                                <li key={idx}>
                                    <a 
                                        href={item.href} 
                                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Author Info */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Peneliti</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p className="font-medium text-gray-900">Tedy Aditiya Andrianto</p>
                            <p>Prodi Informatika</p>
                            <p>Fakultas Informatika</p>
                            <p>Telkom University Surabaya</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-sm text-gray-600">
                        © 2025 <span className="font-semibold">Tedy Aditiya Andrianto</span>. All rights reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {/* GitHub */}
                        <a 
                            href="https://github.com/tedyadt" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-900 border border-gray-200 rounded-full flex items-center justify-center transition-all group"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.562 21.821 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>

                        {/* Email */}
                        <a 
                            href="mailto:tedyaditiya27@gmail.com" 
                            className="w-10 h-10 bg-gray-100 hover:bg-blue-600 border border-gray-200 rounded-full flex items-center justify-center transition-all group"
                            aria-label="Email"
                        >
                            <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a 
                            href="https://www.instagram.com/tedyyad_/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 border border-gray-200 rounded-full flex items-center justify-center transition-all group"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}