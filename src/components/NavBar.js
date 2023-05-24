import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <h1 className={router.pathname === '/' ? 'active' : ''}>Home</h1>
      </Link>
      <Link href="/about">
        <h1 className={router.pathname === '/about' ? 'active' : ''}>About</h1>
      </Link>
      <style jsx>
        {`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          img {
            max-width: 100px;
            margin-bottom: 5px;
          }
          nav a {
            font-weight: 600;
            font-size: 18px;
          }
          .active {
            color: tomato;
          }
          nav div {
            display: flex;
            gap: 10px;
          }
        `}
      </style>
    </nav>
  );
}
