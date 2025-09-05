import Image from "next/image";

export default function NextImagePage() {
  return (
    <main className="grid">
      <section className="card">
        <h2>Next.js &lt;Image /&gt; (fixed size)</h2>
        <p className="muted">Sets width/height for stable layout. Next.js serves optimized formats and sizes automatically.</p>
        <Image src="/images/hero-large.jpg" alt="Gradient hero via Next Image (fixed)" width={1600} height={900} priority />
        <p className="caption">Fixed-size example with <code>priority</code> to improve above-the-fold LCP.</p>
      </section>

      <section className="card">
        <h2>Next.js &lt;Image /&gt; (fill + sizes)</h2>
        <p className="muted">Responsive image that adapts to viewport using <code>fill</code> and <code>sizes</code>.</p>
        <div className="imgWrap">
          <Image
            src="/images/hero-large.jpg"
            alt="Gradient hero via Next Image (responsive)"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="/images/hero-blur.jpg"
          />
        </div>
        <p className="caption">Responsive example with blur-up placeholder.</p>
      </section>
    </main>
  );
}
