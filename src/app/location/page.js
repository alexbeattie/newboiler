import Link from 'next/link';
import Layout from '../layout'
import Image from 'next/image'
export default function Location() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">


        <div>Location</div>
        <Image
          className=""
          src="https://alexbeattie.s3.amazonaws.com/tug.jpg"
          alt="Lot Two"
          width={2560}
          height={1440}
          backgroundSize="cover"
          maxWidth="none"
          priority
        />
        <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>

          <p>Skywater is located on the southern part of Salt Spring Island, the premier
            Southern Gulf Island.
            The Canadian Southern Gulf Islands and the USA San Juan Islands enjoy a Cool Mediterranean Climate. The Southern
            Gulf Islands are blessed with the mildest weather in Canada … Spring comes as early as February, when blossoms
            begin to appear on trees and colourful bulbs emerge … Summer is warm, sunny, and dry and never sweltering hot …
            Fall is a magnificent season of vibrant colour, with temperatures remaining pleasant … Winter frost is rare, and
            while the chance of rain is greater, the mild temperatures encourage hikers, cyclists, and kayakers to carry on
            with their activities right through the season …</p>
          <blockquote>Cool Mediterranean Climate</blockquote>

          <p>The Canadian Southern Gulf Islands are part of a large archipelago that includes the USA San Juan Islands. Many
            of these Islands, and the waterways around them, carry the names of the Spanish and English explorers who arrived
            in the area in the 18th century. The Southern Gulf Islands afford almost limitless opportunities for boating,
            fishing, kayaking, cycling, diving, hiking, or just communing with nature.</p>

          <p>The Southern Gulf Islands and the San Juan Islands, both in the central portion of the Salish Sea, occupy
            a very special place in the world.This area is referred to as the Cruising Paradise of the Pacific Northwest as
            the waters are the best protected in the world offering cruisers thousands of marina’s, cities, villages, towns,
            harbours, bays, islands, channels, inlets, anchor locations, and many other features that would take decades to
            fully explore.Marine and wildlife are plentiful including grey whales, killer whales, seals, otters, mink, deer,
            bald eagles, swans, herons … and many more.</p >

          <blockquote>The Cruising Paradise of the Pacific Northwest</blockquote>
          <p> To explore the Salish Sea would take a lifetime. If more venturous, the West Coast of Vancouver Island on the
            Pacific Ocean offers thousands of additional features that could be cruised, explored, and enjoyed.</p>
          <p>The Potential Yachting, Cruising, and Fishing Adventures around The Protected Southern Gulf Islands; the Balance
            of The Salish Sea; and the Pacific North West to Alaska are Limitless. </p>




          <h2>Salish Sea</h2>

          <Image
            className=""
            src="https://alexbeattie.s3.amazonaws.com/salish-sea-map.jpg"
            alt="Map"
            width={2560}
            height={1440}
            backgroundSize="cover"
            maxWidth="none"
            priority
          />
          {/* // <img src="images/salish-sea-map.jpg"> */}


          <p>The Salish Sea is the intricate network of coastal waterways located between the
            south-western region of the Canadian Province of British Columbia, and the north-western region of the U.S. State
            of Washington. Its major bodies of water are the Strait of Georgia, the Strait of Juan de Fuca, and Puget Sound.
            It reaches from Desolation Sound at the north end of the Strait of Georgia to Oakland Bay at the head of
            Hammersley Inlet at the south end of Puget Sound. The inland waterways of the Salish Sea are partially separated
            from the open Pacific Ocean by Vancouver Island and the Olympic Peninsula, and are thus partially shielded from
            Pacific Ocean storms. Major port cities on the Salish Sea include Seattle, Vancouver, Tacoma, Bellingham, and
            Victoria.</p>

          <blockquote>To explore the Salish Sea would take a lifetime</blockquote>

          <p><span>T</span>he Salish Sea includes the Strait of Juan de Fuca, Strait of Georgia, and Puget
            Sound, and all their connecting channels and adjoining waters, such as Haro Strait, Rosario Strait, Bellingham
            Bay, and the waters around and between the San Juan Islands in the U.S. state of Washington and the Gulf Islands
            in British Columbia, Canada. The western boundary is the entrance to the Strait of Juan de Fuca, defined as a line
            between Cape Flattery and Carmanah Point. The southern boundary is the southern end of Puget Sound.</p>
          <blockquote>The Salish Sea waters are protected from the open Pacific Ocean</blockquote>

          <p>The northern boundary reaches just beyond the northern end of the Strait of Georgia
            to include waters that experience the floodstream or tidal surge from the south: Discovery Passage south of
            Seymour Narrows, Sutil Channel south of Penn Islands, Lewis Channel (between Cortes and West Redonda Island),
            Waddington Channel (between West Redonda and East Redonda Island), and Pendrell Sound, Desolation Sound, and the
            southern portion of Homfray Channel (between East Redonda Island and the mainland). These boundaries were based on
            the 2002 &lsquo;Georgia Basin–Puget Sound Ecosystem Indicators Report&rsquo; . The total extent of the Salish Sea is about
            18,000 square kilometres (6,900 sq mi).</p>

        </article>
        <Link href="/">Back to home</Link>
      </main>
    </>
  )
}