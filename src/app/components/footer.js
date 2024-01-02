import '../globals.css'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-4">
      <Image
        src="https://alexbeattie.s3.amazonaws.com/skywater-logo-2024.png"
        height={800}
        width={172}
        alt="Skywater"
        priority={true}
        style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
      />
      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/li-read-headshot-real-estate.jpg"
        alt="Li Read"
        width={200}
        height={200}
        backgroundSize="cover"
        maxWidth="none"
        priority
      />
    </footer>
  );
}