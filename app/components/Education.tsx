export default function Education() {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-label uppercase tracking-widest text-secondary mb-12">04. Foundation</h2>
        <div className="p-12 border border-outline-variant/10 rounded-xl relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          <span className="material-symbols-outlined text-primary text-5xl mb-6 block" data-icon="school">school</span>
          <h3 className="text-2xl font-bold text-on-surface mb-2">King Mongkut's Institute of Technology Ladkrabang</h3>
          <p className="text-xl text-on-surface-variant">Bachelor of Science / Information Technology</p>
          <div className="mt-8 h-[1px] w-24 bg-outline-variant mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
