export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden bg-surface">
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-l from-primary/10 to-transparent"></div>
        <img
          alt="abstract digital matrix"
          className="w-full h-full object-cover mix-blend-overlay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsHvqf9LYSj01iElEqSv_VAqB2ZhGU-XSRliza7tCOrOGyV9xXwl1KcOMoaqDjbM-N4cU4DfQPcpcHDcKNWN8ZW2ae3UNGeMysvegyg_2EHKQBllQHjqc7vTXB2ykZy0Ulkc--m0UFfz4nFUg_aOtsputG_1C5a28hNy1i1yQk6vj1Bahb_P0bmOdyyFt2N2GNLg_YsHf0pDEAH-vK1q9enf-nR07kB9EvVV9IEcfniTY_-F3qvgWLaukA6ZukJcGM977DQAxx5g"
        />
      </div>
      <div className="relative z-10 max-w-5xl">
        <p className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-4">
          <span className="w-12 h-px bg-primary"></span> Full Stack Developer
        </p>
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] mb-8 text-on-background">
          SAHATSAWAT<br />
          <span className="text-secondary italic font-light">VONGBOONTHANETH</span>
        </h1>
      </div>
    </section>
  );
}
