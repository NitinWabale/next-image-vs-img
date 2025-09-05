import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Image Optimization Demo</h1>
      <ul>
        <li><Link href="/native-img">Native &lt;img&gt;</Link></li>
        <li><Link href="/next-image">Next.js &lt;Image /&gt;</Link></li>
      </ul>
      <hr />
    </main>
  );
}
