export default function About() {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-sm font-label uppercase tracking-widest text-secondary flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-secondary"></span> 01. Professional Summary
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-3xl md:text-5xl font-medium text-on-surface leading-tight tracking-tight mb-12">
           A Full-stack Developer  <span className="text-primary italic">passionate about coding.</span>
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Full Stack Developer with a strong foundation in developing web and mobile applications. Comprehensive experience in end-to-end development, from architecting databases (SQL & NoSQL) to building user interfaces with React, Next.js, and React Native.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              Proficient in Express.js, Django, AWS, Load Balancers, Docker, and CI/CD pipelines. My approach centers on performance, scalability, and clean code architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
