import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/about">
        <h1>About</h1>
      </Link>
    </nav>
  );
}
