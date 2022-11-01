import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

export default function BurgerMenu() {
  return (
    <div>
      <h1>
        <Image
          src="/assets/logo/Logo_1.png "
          width={60}
          height={45}
          alt="logo"
        ></Image>
      </h1>
      <h2>
        <FaAlignJustify />
      </h2>
      <h3>Menu</h3>
      <nav>
        <ul>
          <li>
            <Link href="/searchlost">Search Lost</Link>
          </li>
          <li>
            <Link href="/addlost">Add Lost</Link>
          </li>
          <li>
            <Link href="/searchfound">Search Found</Link>
          </li>
          <li>
            <Link href="/addfound">Add Found</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
