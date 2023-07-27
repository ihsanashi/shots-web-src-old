import { Avatar } from '@/components/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container items-center mx-auto px-5 md:px-12 lg:px-60 pt-24">
      <section className="border border-yellow-400 flex flex-row px-24">
        <Avatar
          alt="Avatar of Ahmad Ihsan"
          className="h-32 w-32"
          height={128}
          src="/avatar.png"
          width={128}
        />
        <div className="flex flex-col gap-y-3 ml-10">
          <h3 className="font-semibold text-white text-2xl">chanmalichann</h3>
          <div className="flex flex-row items-center gap-x-10">
            <h6>
              <strong>358</strong> posts
            </h6>
            <h6>
              <strong>401</strong> followers
            </h6>
            <h6>
              <strong>294</strong> following
            </h6>
          </div>
          <p className='text-gray-300 text-sm max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit laborum iure, non eos, et dignissimos, voluptates.
          </p>
        </div>
      </section>
    </main>
  )
}
