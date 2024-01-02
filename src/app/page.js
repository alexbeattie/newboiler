import Image from 'next/image'

export default function Home() {
  return (



    // <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/blue-1-med.jpg"
        alt="Next.js Logo"
        width={2560}
        height={1440}
        backgroundsize="cover"
        maxwidth="none"
        priority
      />

    // </main>
  )
}
