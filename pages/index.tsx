import type {NextPage} from "next";
import Head from "next/head";
import {useEffect, useState} from "react";
import moment from "moment";

interface Event {
  address: string;
  created: number;
  source: string;
  title: string;
  type: string;
}

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
                    {[...events].reverse().slice(0, 8).map((event) => (
                      <li key={`${event.created}`} className="px-4 py-5">
                        <div className="flex space-x-3">
                          {/*<img className="h-6 w-6 rounded-full" src={} alt="" />*/}
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium">
                                {event.address.substring(0, 6) + '...' + event.address.substring(event.address.length - 6, event.address.length)}
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
              ) : <p className="py-12 sm:px-6 lg:px-8">Loading...</p> }
              {!events && <p className="py-12 sm:px-6 lg:px-8">No events data</p>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
