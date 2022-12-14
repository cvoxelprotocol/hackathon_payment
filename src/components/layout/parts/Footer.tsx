import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
    <div>
        <Link href="/" passHref>
            <div className="text-center flex">
              <h1 className="text-4xl font-bold">Hack Pay</h1>
            </div>
        </Link>
    <p>Copyright © {new Date().getFullYear()}</p>
  </div> 
</footer>
  );
};
