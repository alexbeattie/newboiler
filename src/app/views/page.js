import Link from 'next/link';

import Image from 'next/image'
export default function Views() {


  return (
    <>

      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <div>Views</div>
        <Image
          className=""
          src="https://alexbeattie.s3.amazonaws.com/skywater-bg.jpg"
          alt="Lot Two"
          width={2560}
          height={1440}
          backgroundSize="cover"
          maxWidth="none"
          priority
        />

        <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>

        </article>
        <h2>
          <Link href="/">alex</Link>
        </h2>
      </main>
    </>
  )
}