import type {NextPage} from "next";
import Head from "next/head";
import {useEffect, useState} from "react";
import moment from "moment";
import {useEnsName} from "wagmi";

interface Event {
  address: string;
  created: number;
  source: string;
  title: string;
  type: string;
}

const Name = (props: { address: string }) => {
  const {data: ensName} = useEnsName({
    address: props.address,
  })

  const addressShortened : string = `${props.address.substring(0, 6)}...${props.address.substring(38, 42)}`
  let addressOrEnsName = addressShortened
  if (ensName != undefined) {
    addressOrEnsName = ensName
  }

  return (
    <div>
      {addressOrEnsName}
    </div>
  )
};

const Home: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/online/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data.events)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Lil Nouns Online</title>
        <meta name="description" content="Live feed of what happens in the community"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {!isLoading ? (
                <ul role="list" className="divide-y divide-gray-200">
                  {[...events].slice(0, 25).map((event, index) => (
                    <li key={`${index}`} className="px-4 py-5">
                      <div className="flex space-x-3">
                        {/*<img className="h-6 w-6 rounded-full" src={} alt="" />*/}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                              <Name address={event.address}/>
                            </h3>
                            <p className="text-sm text-gray-500">{moment.unix(event.created).calendar()}</p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {event.title}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-12 sm:px-6 lg:px-8 text-center">
                  <div role="status">
                    <svg
                      className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              {!events && <p className="py-12 sm:px-6 lg:px-8">No events data</p>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
