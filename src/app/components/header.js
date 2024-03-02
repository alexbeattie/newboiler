import '../globals.css'
import Image from 'next/image'
export default function Header() {
  return (
    <header className="justify-center flex py-4">
      <Image
        src="https://alexbeattie.s3.amazonaws.com/skywater-logo-2024.png"
        height={800}
        width={172}
        alt="Skywater"
       
      style={{ maxwidth: '100%', height: 'auto', width: 'auto' }}
      />
    </header>
  );
}