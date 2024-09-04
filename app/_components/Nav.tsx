import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-around py-4 flex-wrap">
      <span>{`chlangus's blog`}</span>
      <div className="flex gap-2">
        <Link href="./about">About</Link>|
        <Link href="./projects">Projects</Link>
      </div>
    </nav>
  );
}
