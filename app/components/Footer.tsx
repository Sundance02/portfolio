export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center px-12 py-16 mt-0" id="contact">
      <div className="mb-8 md:mb-0">
        <div className="text-lg font-black text-[#e5e2e1] mb-2 uppercase tracking-tighter">Architectural Shadow</div>
        <p className="font-['Inter'] text-sm leading-relaxed text-[#c1c6d5]">© 2024 Architectural Shadow. All rights reserved.</p>
      </div>
      <div className="flex gap-12">
        <a className="font-['Inter'] text-sm text-[#c1c6d5] hover:text-[#ffb59f] transition-colors duration-500" href="#">Privacy Policy</a>
        <a className="font-['Inter'] text-sm text-[#c1c6d5] hover:text-[#ffb59f] transition-colors duration-500" href="#">Terms of Service</a>
        <a className="font-['Inter'] text-sm text-[#aac7ff] underline hover:text-[#ffb59f] transition-colors duration-500" href="mailto:hello@archshadow.dev">Email Me</a>
      </div>
    </footer>
  );
}
