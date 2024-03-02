import Link from 'next/link';
import Image from 'next/image'

export default function GettingHere() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <div>GettingHere</div>
        <Image
          className=""
          src="https://alexbeattie.s3.amazonaws.com/ferry-web.jpg"
          alt="Lot Two"
          width={2560}
          height={1440}
          backgroundsize="cover"
          maxwidth="none"

        />
        <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>
          <h2>How to get to Salt Spring Island?</h2>
          <p>If you are traveling to Salt Spring Island, below are the best and most efficient ways to get to the island:</p>
          <div>
            <ul>
              <h2>BC Ferries</h2>
              <li>

                <p>BC Ferries serves up to 47 ports of call on 25 routes throughout coastal British Columbia.
                  The crossings between Vancouver Island and B.C.&apos;s Lower Mainland can last from about 95 minutes to two hours,
                  depending on which route you take. There are three to choose from -- including our Vancouver-Victoria service
                  -- with frequent sailings every day of the year.</p>

                <p>Shorter hops include BC Ferries service to the picturesque Gulf Islands (sailing from both Vancouver Island
                  and the Lower Mainland), and to friendly communities along the Sunshine Coast, northwest of Vancouver. There&apos;s
                  also service between Brentwood and Mill Bay, across the Saanich Inlet (near Victoria).</p>

                <p>If you&apos;re after more of a &lsquo;cruise line&rsquo; experience, consider a voyage through British Columbia&apos;s majestic
                  Inside Passage. This one is particularly popular with international travellers, going from Port Hardy at the
                  northern end of Vancouver Island to Prince Rupert, gateway to southeast Alaska.</p>

                <p>The crossing from Prince Rupert to the beautiful Haida Gwaii is another fascinating travel opportunity with
                  BC Ferries. Sometimes referred to as the &lsquo;Canadian Galapagos&rsquo;, Haida Gwaii provides habitat for many different
                  species of wildlife. These islands are the ancestral home of the Haida Nation, and feature many unique
                  cultural attractions.</p>
              </li>
              <h2>Salt Spring Air</h2>

              <li>
                <p>Saltspring Air offers direct flights between Saltspring Island and downtown Vancouver and Vancouver Airport,
                  Richmond and provides a scheduled service out of Maple Bay, Pat Bay and the other Gulf Islands and charter
                  flights to many locations.</p>
                <p>They are a locally owned airline based out of Ganges on Saltspring Island, British Columbia, Canada.</p>

              </li>

              <li>
                <h2>Harbour Air</h2>
                <p>Harbour Air. Connect to one of 8 destinations in British Columbia with frequent service between the Lower
                  Mainland and the Islands.</p>

              </li>
              <li>
                <h2>Sea Air</h2>
                <p>Operate up to 12 scheduled flights daily from Downtown Vancouver Harbour to Nanaimo (Departure Bay) and up to
                  12 scheduled flights daily from Richmond (YVR) to Nanaimo (Departure Bay), as well as up to 8 scheduled
                  flights daily from Richmond (YVR) to 6 of the major Southern Gulf Islands.</p>


              </li>
              <li>
                <h2>Kenmore Air</h2>
                <p>Kenmore Air flies directly from Seattle to Salt Spring Island.</p>
              </li>
            </ul>

          </div>
        </article>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </main >
    </>
  )
}