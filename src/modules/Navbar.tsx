import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="py-6">
        <nav className="flex justify-between items-center">
          <p className="text-xl font-bold">Mififur</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/shop">Tienda</Link>
            </li>
            <li>
              <Link href="/about">Acerca de </Link>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
