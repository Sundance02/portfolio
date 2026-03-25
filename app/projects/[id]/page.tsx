import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isAerocast = project.id === 'aerocast';

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-surface min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pt-16 pb-32 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8 mt-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant font-label">
                  {project.category}
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-none font-headline text-on-surface">
                {project.title}<span className="text-primary">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-xl font-light">
                {project.subtitle}
              </p>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-[4/5] relative">
              <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-full -z-10"></div>
              <img
                className="w-full h-full object-contain rounded-2xl shadow-2xl transition-all duration-700"
                src={project.heroImage}
                alt={project.title}
              />
            </div>
          </div>
        </section>

        {/* Project Overview / Detailed Description */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-4 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-secondary font-label">Tech Stack</h3>
                  <ul className="space-y-2 text-on-surface-variant font-medium">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <div className="md:col-span-8 space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface font-headline">Description</h2>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center md:text-left font-headline">Samples</h2>
          {isAerocast ? (
            <div className="w-full h-auto overflow-hidden rounded-2xl bg-surface-container-low">
              <img
                className="w-full h-full object-contain transition-all duration-700 hover:scale-105"
                src={project.galleryImages[0]}
                alt="Main UI"
              />
            </div>
          ) : (
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {project.galleryImages.map((image, index) => (
                <div key={index} className="break-inside-avoid overflow-hidden rounded-2xl bg-surface-container-low group">
                  <img
                    className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                    src={image}
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Navigation back */}
        <section className="py-20 text-center">
          <Link href="/#projects" className="inline-flex items-center gap-4 text-primary font-bold group text-xl">
            <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all"></span>
            Back to Projects
          </Link>
        </section>
      </main>

    </>
  );
}
