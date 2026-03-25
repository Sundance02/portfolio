import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-none w-full">
        <Link className="text-xl font-bold tracking-tighter text-[#e5e2e1]" href="#">Sahatsawat's Portfolio</Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className="font-['Inter'] tracking-tight font-medium text-sm text-[#aac7ff] border-b-2 border-[#0d70da] pb-1" href="#">Home</Link>
          <Link className="font-['Inter'] tracking-tight font-medium text-sm text-[#c1c6d5] hover:text-[#e5e2e1] transition-colors" href="#about">About</Link>
          <Link className="font-['Inter'] tracking-tight font-medium text-sm text-[#c1c6d5] hover:text-[#e5e2e1] transition-colors" href="#projects">Projects</Link>
          <Link className="font-['Inter'] tracking-tight font-medium text-sm text-[#c1c6d5] hover:text-[#e5e2e1] transition-colors" href="#skills">Skills</Link>
          {/* <a className="font-['Inter'] tracking-tight font-medium text-sm text-[#aac7ff] hover:text-[#e5e2e1] transition-colors border border-[#aac7ff]/30 px-4 py-1.5 rounded-full" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a> */}
        </div>
      </div>
    </nav>
  );
}
