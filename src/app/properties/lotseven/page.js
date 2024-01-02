import Link from 'next/link';
import Image from 'next/image'

export default function LotSeven() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <div>Lot Seven</div>


      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/lot-19.jpg"
        alt="Lot Two"
        width={2560}
        height={1440}
        backgroundSize="cover"
        maxWidth="none"
        priority
      />
      <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>

        <h2>Lot Nineteen - Sold - Fifteen Acres</h2>

        <p className='lead'>118 Skywater Hollow, Salt Spring Island, BC</p>

        <p>The large building site borders an 80 acre Park Reserve to the north offering hiking and walking trails for your pleasure. The easterly view includes potential vistas of your wetlands; other Skywater properties; and Ocean Views including the Southern Gulf Islands, the San Juan Islands and Mt. Baker</p>

        <p>Access to this large diverse property is off Skywater Hollow that passes between two spectacular wetlands, meanders through a treed area curving left up a gradual ravine to the building site.</p>

        <p>Lot Nineteen has it all…ocean views, wetlands, vistas, forested areas, borders park reserve; and the real potential to be developed in a small farm with gardens, orchards, meadows, crops, pastures...or whatever other agricultural ventures you may desire…sheep…horses…cattle.</p>

        <p>The developer would be happy to offer it services to further develop this property to suit the owner’s preferences at very reasonable rates.</p>

        <p>Zoning allows for Main Home; Guest Cottage; Accessory Building(s); and Agriculture.</p>

        <p>Private driveway to building site; drilled water well at building site; power and communication services to the property line.</p>






      </article>
      <Link href="/">Back to home</Link>
    </main>

  )
}
