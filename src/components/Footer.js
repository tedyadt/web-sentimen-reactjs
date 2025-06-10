export default () => {
    const footerNavs = [
       
    ];

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                {/* Logo bisa dipertahankan jika relevan dengan universitas atau judul skripsi */}
                <img src="https://akupintar.id/documents/20143/0/jvjvb+vjhbhjbj.png/919d824f-36a2-8087-a213-dc3f8ed903c6?version=1.0&t=1717736287023&imagePreview=1" className="w-32 sm:mx-auto" alt="Logo Proyek Skripsi" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Website ini adalah bagian dari penelitian skripsi yang dikembangkan oleh Tedy Aditiya Andrianto Prodi Informatika Fakultas Informatika Telkom University Surabaya.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {
                    footerNavs.map((item, idx) => (
                        <li key={idx} className="hover:text-gray-800">
                            <a href={item.href}>
                                { item.name }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0 text-center sm:text-left">
                    {/* Hak Cipta dan Info Skripsi */}
                    &copy; 2025 All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0 flex justify-center sm:justify-end"> {/* Menambahkan justify-center untuk mobile */}
                    <ul className="flex items-center space-x-4">
                        {/* GitHub */}
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://github.com/tedyadt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                {/* SVG GitHub - Warna hitam/gelap standar GitHub */}
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#333" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576C20.562 21.821 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </li>
                        {/* Email */}
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="mailto:tedyaditiya27@gmail.com" aria-label="Email">
                                {/* SVG Email - Warna biru atau hitam standar */}
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                                </svg>
                            </a>
                        </li>
                        {/* Instagram */}
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://www.instagram.com/tedyyad_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                {/* SVG Instagram - Warna gradasi Instagram */}
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="url(#instagram-gradient)" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="instagram-gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#C13584" />
                                            <stop offset="100%" stopColor="#E1306C" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.965.295 4.29.535A4.49 4.49 0 00.535 4.29C.295 4.965.132 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.223 2.088.463 2.763a4.49 4.49 0 003.755 3.755c.675.24 1.486.403 2.763.463C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.088-.223 2.763-.463a4.49 4.49 0 003.755-3.755c.24-.675.403-1.486.463-2.763.06-1.277.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.223-2.088-.463-2.763a4.49 4.49 0 00-3.755-3.755c-.675-.24-1.486-.403-2.763-.463C15.667.012 15.26 0 12 0zm0 2.16c3.2 0 3.58.012 4.85.071 1.17.055 1.7.249 2.05.38a2.98 2.98 0 011.66 1.66c.13.35.324.88.38 2.05.059 1.27.071 1.65.071 4.85s-.012 3.58-.071 4.85c-.055 1.17-.249 1.7-.38 2.05a2.98 2.98 0 01-1.66 1.66c-.35.13-.88.324-2.05.38-1.27.059-1.65.071-4.85.071s-3.58-.012-4.85-.071c-1.17-.055-1.7-.249-2.05-.38a2.98 2.98 0 01-1.66-1.66c-.13-.35-.324-.88-.38-2.05C2.16 15.58 2.16 15.2 2.16 12s.012-3.58.071-4.85c.055-1.17.249-1.7.38-2.05a2.98 2.98 0 011.66-1.66c.35-.13.88-.324 2.05-.38C8.42 2.172 8.79 2.16 12 2.16zm0 3.635A6.205 6.205 0 1018.205 12 6.205 6.205 0 0012 5.795zM12 16.5A4.5 4.5 0 1116.5 12 4.5 4.5 0 0112 16.5zm5.955-9.15A1.332 1.332 0 1019.29 6.013 1.332 1.332 0 0017.955 7.35z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Style JSX tidak lagi diperlukan untuk warna ikon jika fill sudah diatur di SVG */}
            {/* Anda bisa menghapus bagian <style jsx> jika semua warna ikon diatur langsung di dalam SVG */}
        </footer>
    );
}