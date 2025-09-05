export default function NativeImgPage() {
  return (
    <main className="grid">
      <section className="card">
        <h2>Native &lt;img&gt; (no dimensions)</h2>
        <p className="muted">This version omits width/height which can cause layout shift (CLS) while loading.</p>
        <img src="/images/hero-large.jpg" alt="Colorful gradient hero (no dimensions)" />
        <p className="caption">Plain &lt;img&gt; without width/height or sizes.</p>
      </section>

      <section className="card">
        <h2>Native &lt;img&gt; (with width/height)</h2>
        <p className="muted">This version sets intrinsic dimensions to avoid CLS, but still downloads the full-size image on mobile.</p>
        <img src="/images/hero-large.jpg" alt="Colorful gradient hero (with dimensions)" width="1600" height="900" />
        <p className="caption">Plain &lt;img&gt; with width/height.</p>
      </section>
    </main>
  );
}
