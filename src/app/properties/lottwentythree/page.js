import Link from 'next/link';
import Image from 'next/image'

export default function LotTwentyThree() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">

      <div>Lot Twenty Three</div>


      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/23.jpg"
        alt="Lot Twenty Three"
        width={2560}
        height={1440}
        backgroundSize="cover"
        maxWidth="none"
        priority
      />
      <article className='px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg'>

        <h2>Lot Twenty-Three - Seventeen Acres</h2>

        <p>554 Skywater Drive, Salt Spring Island, BC</p>

        <p>The driveway to this property leaves Skywater Drive heading north through the valley between two wetlands up a southerly slope passing between two large rock outcrops to the recommended building site that overlooks a year round pond.</p>

        <p>This parcel of land commands your attention... sharing a 1/4 mile boundary with an expansive little used 80 acre park reserve, offering hiking/walking trails for your pleasure and total privacy. The park reserve is the area the Property Legend is shown on the Property Map.</p>

        <p>The land is partially treed with the main slope facing south west for maximum sunlight. Lot 23 could be developed into a very private retreat to enjoy with an elevated building site overlooking the year round pond and magnificent terrain ... trails, paths and waterways meander across the property and the 80 acre park reserve among large cedar and fir trees and much more, for your pleasure.</p>

        <p>Lot 23 also enjoys the exclusive use of the Limited Common Property shown on the Property in yellow. This property is owned by the Skywater Strata but its exclusive use is limited to the registered owner of Lot 23. The smaller, approximately one acre parcel across from Lot 1 was used by the Developer for gravel and sandstone boulder storage. There is some gravel left and many sandstone boulders. The larger, approximately seven acre, parcel on the other side of Musgrave Road is well treed with Fir, Cedar and some open spaces. </p>


        <p>Zoning allows for Main House, Guest Cottage, Accessory Building(s) and Agriculture.</p>

        <p>Private Driveway to building site; drilled water well near building site; power and communication services to the property line.</p>





      </article>
      <Link href="/">Back to home</Link>
    </main>

  )
}
