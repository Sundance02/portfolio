import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface-container-low overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter opacity-10 leading-none">WORKS</h2>
          <div className="md:max-w-md">
            <h3 className="text-sm font-label uppercase tracking-widest text-secondary mb-4">03. Selected Projects</h3>
            <p className="text-on-surface-variant">A showcase of complex systems distilled into elegant interfaces.</p>
            <a className="mt-6 inline-flex items-center gap-2 text-primary font-bold group" href="#">
              View All Projects
              <span className="w-8 h-[1px] bg-primary group-hover:w-16 transition-all"></span>
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          {/* Project Card 1: Aerocast */}
          <div className="md:col-span-7 group">
            <Link href="/projects/aerocast" className="block relative overflow-hidden rounded-xl bg-surface h-[500px]">
              <img
                alt="Aerocast"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                src="/projects/Aerocast/Aero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-12 z-10">
                <span className="text-xs font-label uppercase text-secondary tracking-widest mb-2 block">Full Stack</span>
                <h4 className="text-4xl font-bold tracking-tight text-on-surface mb-4">Aerocast</h4>
                <div className="flex gap-2">
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">Next.js</span>
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">MongoDB</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Project Card 2: Thesis Project (Mobile App Focus) */}
          <div className="md:col-span-5 md:mt-20 group">
            <Link href="/projects/thesis-project" className="block relative overflow-hidden rounded-xl bg-surface h-[600px] aspect-[9/16]">
              <img
                alt="Thesis Project - Mobile App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                src="/projects/Thesis Project/application/Screenshot_20260325_131427.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-12 z-10">
                <span className="text-xs font-label uppercase text-secondary tracking-widest mb-2 block">Academic • Mobile App</span>
                <h4 className="text-3xl font-bold tracking-tight text-on-surface mb-4">Thesis Project</h4>
                <div className="flex gap-2">
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">React Native</span>
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Project Card 3: OFFlearn (Horizontal Banner - Resized) */}
          <div className="md:col-span-10 md:col-start-2 mt-8 group">
            <Link href="/projects/offlearn" className="block relative overflow-hidden rounded-xl bg-surface h-[400px]">
              <img
                alt="OFFlearn"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                src="/projects/OFFlearn/2.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-12 z-10">
                <span className="text-xs font-label uppercase text-secondary tracking-widest mb-2 block">E-Learning • Web</span>
                <h4 className="text-4xl font-bold tracking-tight text-on-surface mb-2">OFFlearn</h4>
                <p className="text-base text-on-surface-variant font-light max-w-xl">Offline accessible learning platform for instructors and students.</p>
                <div className="flex gap-2 mt-4">
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">Django</span>
                  <span className="text-[10px] border border-outline-variant/30 px-2 py-1 rounded">Tailwind CSS</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
