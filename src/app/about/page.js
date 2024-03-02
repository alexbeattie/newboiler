import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <div>About</div>


      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/5.jpg"
        alt="Lot Two"
        width={2560}
        height={1440}
        backgroundsize="cover"
        maxwidth="none"

      />
      <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>
        <blockquote>A Special Place On Earth</blockquote>

        <p>The dream property opportunity on Salt Spring Island has arrived. The very best is
          now available for your discovery.</p>

        <p>Five Hundred and Sixty Pristine Acres have been developed into Twenty-Seven Strata Acreages registered June 25th,
          2014 at British Columbia Land Titles.</p>

        <blockquote>Unique Rural Estate</blockquote>

        <p>The Development consists of Strata Acreages varying in size from Five to Seventy
          Eight Acres. Details of each acreage including pictures are available in the property section.</p>

        <blockquote>Private World</blockquote>

        <p>The Acreages offer total privacy; superb all day sun exposures; gentle rolling land; dramatic panoramic ocean/islands/mountain views; valley vistas; wildflower meadows and forest enclaves; good soils
          providing significant agricultural potential; wetlands, streams, and ponds; wildlife; clear night skies with views
          of city lights, millions of stars, and much more... beauty everywhere</p>

        <blockquote>Location</blockquote>

        <p>Skywater is located at the southern end of Salt Spring Island, the premiere
          Canadian Gulf Island. The Canadian Southern Gulf Islands and the USA San Juan Islands, both in the Salish Sea, are
          sometimes referred to as the Cruising Paradise of the Pacific Northwest. These waters are among the best protected
          in the world offering cruisers thousands of harbours, bays, islands, channels, inlets, anchorage, and other
          features that would take many years to explore. Marine and other Wildlife are plentiful including grey whales, killer
          whales, seals, otters, mink, deer, soaring bald eagles, swans, herons … and many more.</p>

        <blockquote>Exploring The Possibilities</blockquote>

        <p>Salt Spring Island is the largest and best serviced of the Gulf Islands. All services/amenities are available on the Island, and yet it is easy to do engaging daytrips to Vancouver, Victoria,
          mid-Vancouver Island. The plus? You get to come home to special Salt Spring and Skywater.</p>

        <p>Three different ferries service Salt Spring Island, with year round schedules.
          Three different floatplane companies also service the Island, again with year round schedules. Seasonal floatplane
          access direct from Seattle is also offered.</p>

        <p>Renowned as an artists enclave; a special sanctuary component with park and ecological reserves to retain the wilderness aspect of the Island; a micro-climate that encourages vineyards, olive groves, orchards and organic produce; and many other features to be explored, Salt Spring offers a lifestyle opportunity with all of the options required by the 21st Century.</p>
      </article>

    </main>

  )
}
