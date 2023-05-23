import Link from 'next/link'
export default function CTA() {
    return (
      <div className="">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We want to hear from you.
              <br />
              Drop us a line today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              There’s so much more to KnifeRoll. Just like its namesake, KnifeRoll is a full chef’s toolkit. Prep lists and team management will also be included in launch and our roadmap includes ordering, scheduling, menu management, and more. Beta launch is planned for June 2023. Yes, chef.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="mailto:info@kniferoll.io"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Send us an email
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }