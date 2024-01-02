import Link from 'next/link';
import Image from 'next/image'
export default function Broker() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">

        <div>SaltSpring</div>



        <Image
          className=""
          src="https://alexbeattie.s3.amazonaws.com/li-read-broker.jpg"
          alt="Lot Two"
          width={2560}
          height={1440}
          backgroundSize="cover"
          maxWidth="none"
          priority
        />
        <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 md:prose lg:prose-lg'>
          <div className='flex flex-col items-center'>
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
            <h2>Li Read</h2>
            <Image
              className=""
              src="https://alexbeattie.s3.amazonaws.com/board-of-regents.svg"
              alt="Lot Two"
              width={100}
              height={40}
              backgroundSize="cover"
              maxWidth="none"
              priority
            />


          </div>

          <p>Li Read has been in the real estate business for nearly 25 years and has lived on Salt Spring Island since
            1989.</p>
          <p>Li has been a member of the prestigious LuxuryRealEstate.com since 1996 and
            sits on their decision making body, Board of Regents. This is an exclusive group of 82 neutrally selected
            agents from North America &amp; Europe. There can only be one Regent in a market area.</p>
          <p>The members of LuxuryRealEstate.com and the agents&rsquo; listings are globally linked through their profiles via
            LuxuryRealEstate.com. Additionally, membership provides an online &lsquo;global&rsquo; reciprocal international referral
            network, providing another highly connected and highly targeted reach for potential wealthy buyers and
            sellers. </p>


          <p>Sea to Sky Premier Properties is an independent real estate company, and a
            leader in luxury real estate sale &amp; marketing. Sea To Sky Premier Properties is a member of the Board of
            Regents for Luxuryrealestate.com

          </p><p>Sea To Sky Premier Properties maintains offices on Salt Spring Island and also in Pemberton, Whistler,
            Squamish, and West Vancouver. Sea to Sky Premier Properties realtors have specialized local knowledge and are
            known for their personalized service for local, out-of-town or international investors.</p>
          <p>In addition to luxury real estate, Sea To Sky Premier Properties has a strong presence in commercial real
            estate.</p>
          <p>Sea To Sky Premier Properties is a member of the Real Estate Board of Greater Vancouver.</p>
          <p>Sea To Sky Premier Properties has built relationships with key marketing networks to enable marketing of
            client&apos;s properties to the world in a professional, cost effective and efficient manner. Sea To Sky Premier
            Properties is committed to bringing the world&apos;s discerning buyers to the Sea to Sky&apos;s doorstep, by introducing
            them to a comprehensive directory of luxury homes and commercial opportunities.</p>
          <ul>
            <li>Sea To Sky Premier Properties</li>
            <li>Salt Spring Office located at 4 -105 Rainbow Road in seaside Ganges</li>
            <li>Member of LuxuryRealEstate.com Board of Regents</li>
            <li>Member of FIABCI, the International Real Estate Federation</li>
            <li>Member of the Institute for Luxury Home Marketing</li>
            <li>Member of the ILHM&apos;s Million Dollar Guild</li>
            <li>Certified Luxury Home Marketing Specialist</li>
            <li>Member of the Real Estate Board of Greater Vancouver.</li>
            <li>Bilingual : English and French</li>
            <li>Obtained Managing Broker Licence in 1992.</li>
            <li>Obtained British Columbia Real Estate Licence in 1989.</li>
            <li>Resident of Salt Spring Island since 1987</li>
            <li>First Gulf Islands agent to market on the Internet.</li>
            <li>Extensive North America &amp; Europe Referral Network.</li>
          </ul>
        </article>
      </main >
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}