import Link from "next/link";
import Image from "next/image";

export default function LotFourteen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div>Lot Fourteen</div>

      <Image
        className=""
        src="https://alexbeattie.s3.amazonaws.com/new-14-1.jpg"
        alt="Lot Fourteen"
        width={2560}
        height={1440}
        backgroundsize="cover"
        maxwidth="none"

      />
      <article className="px-6 py-12 shadow-xl bg-white p-2 prose prose-slate mx-auto mt-8 lg:prose-lg">
        <h2>Lot Fourteen - Sold - Eleven Acres</h2>

        <p className="lead">Skywater Landing, Salt Spring Island, BC</p>

        <p>
          Access this one of a kind acreage from Skywater Landing. Meander
          through your own property with meadows and wetlands on your left and
          treed rocky bluffs on your right to arrive at a very large building
          site with exceptional Ocean Views and total Privacy.
        </p>

        <p>
          A 190+ degree sweep of exceptional Ocean Views extending from
          Vancouver to Mt Baker. In between Fulford Harbour, the Canadian
          Southern Gulf Islands, and the USA San Juan Islands… and more are
          spread before you, as a picture constantly changing on the Salish Sea.
        </p>

        <p>
          This Acreage has very good agricultural potential or could just be
          left as is!!! Enjoy the beauty of nature and wildlife as you drive to
          your exceptional building site.
        </p>

        <p>
          Zoning is main home, separate guest cottage, accessory building(s),
          and agriculture.
        </p>

        <p>
          Private driveway to building site; drilled water well at building
          site; power and communication services to property line.
        </p>

        <p>
          The 11 acre parcel offers a large variety of topographical features.
        </p>
      </article>
      <Link href="/">Back to home</Link>
    </main>
  );
}
