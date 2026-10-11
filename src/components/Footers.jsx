import React from 'react';

const columns = [
    {
        title: 'Shop and Learn',
        links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home'],
    },
    {
        title: 'Account',
        links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
    },
    {
        title: 'Entertainment',
        links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+'],
    },
    {
        title: 'Apple Values',
        links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy'],
    },
    {
        title: 'About Apple',
        links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance'],
    },
];

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'];

const Footers = () => {
    return (
        <footer className="bg-black text-[#86868b] text-xs border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 border-b border-white/10">
                    <div>
                        <p className="text-2xl md:text-3xl font-semibold tracking-tight text-[#f5f5f7]">
                            MacBook Pro M3
                        </p>
                        <p className="mt-2 text-sm text-[#86868b]">
                            Mind-blowing. Head-turning. Built for everything you do.
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="rounded-full bg-[#0071e3] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0077ed]"
                        >
                            Buy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-[#2997ff] transition-colors duration-200 hover:underline"
                        >
                            Compare models &rsaquo;
                        </a>
                    </div>
                </div>

                <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 py-10 border-b border-white/10">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3 className="mb-3 font-semibold text-[#e8e8ed]">{column.title}</h3>
                            <ul className="space-y-2.5">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="transition-colors duration-200 hover:text-[#f5f5f7]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="py-6 space-y-4">
                    <p>
                        More ways to shop: <a href="#" className="text-[#2997ff] hover:underline">Find an Apple Store</a> or{' '}
                        <a href="#" className="text-[#2997ff] hover:underline">other retailer</a> near you.
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 pt-4 border-t border-white/10">
                        <p>Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
                        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-0 lg:flex-1 lg:ml-8">
                            {legalLinks.map((link, index) => (
                                <li
                                    key={link}
                                    className={index > 0 ? 'lg:border-l lg:border-white/20 lg:pl-3 lg:ml-3' : ''}
                                >
                                    <a href="#" className="transition-colors duration-200 hover:text-[#f5f5f7]">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="transition-colors duration-200 hover:text-[#f5f5f7]">
                            United States
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
