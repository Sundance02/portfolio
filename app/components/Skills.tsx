export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-24 bg-surface" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-sm font-label uppercase tracking-widest text-secondary mb-4">02. Tech Stack</h2>
            <h3 className="text-5xl font-black tracking-tighter">VERSATILITY IN <span className="text-outline-variant">CODE.</span></h3>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="javascript">javascript</span>
            <p className="font-bold tracking-tight text-on-surface">JavaScript</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="terminal">terminal</span>
            <p className="font-bold tracking-tight text-on-surface">Python</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="layers">layers</span>
            <p className="font-bold tracking-tight text-on-surface">React/Next</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="database">database</span>
            <p className="font-bold tracking-tight text-on-surface">PostgreSQL</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="cloud">cloud</span>
            <p className="font-bold tracking-tight text-on-surface">AWS</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl border-b-2 border-transparent hover:border-primary transition-all group flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="deployed_code">deployed_code</span>
            <p className="font-bold tracking-tight text-on-surface">Docker</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">HTML5</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">CSS3</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">Django</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">Express.js</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">Tailwind CSS</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">PHP</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">MySQL</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">MongoDB</span>
          <span className="px-6 py-2 bg-surface-container-lowest text-on-surface-variant rounded-full text-xs font-label border border-outline-variant/10">Postman</span>
        </div>
      </div>
    </section>
  );
}
