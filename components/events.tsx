import {EnsAvatar} from "./ens-avatar";
import {EnsName} from "./ens-name";
import moment from "moment";
import {useEffect, useState} from "react";
import Link from "next/link";

interface Event {
  address: string;
  created: number;
  source: string;
  title: string;
  type: string;
  link: string;
}

export function Events() {
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
    <div className="tw-max-w-7xl tw-mx-auto tw-py-12 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-max-w-4xl tw-mx-auto">
        <div className="tw-bg-white tw-shadow tw-overflow-hidden sm:tw-rounded-lg">
          {!isLoading ? (
            <ul role="list" className="tw-divide-y tw-divide-gray-200">
              {[...events].map((event, index) => (
                <li key={`${index}`} className="tw-px-4 tw-py-5">
                  <div className="tw-flex tw-space-x-3">
                    <EnsAvatar address={event.address} />
                    <div className="tw-flex-1 tw-space-y-1">
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <h3 className="tw-text-sm tw-font-medium">
                          <EnsName address={event.address}/>
                        </h3>
                        <p className="tw-text-sm tw-text-gray-500">
                          <Link href={`${event.link}`} target="_blank">
                            {moment.unix(event.created).calendar()}
                          </Link>
                        </p>
                      </div>
                      <p className="tw-text-sm tw-text-gray-500">
                        {event.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="tw-py-12 sm:tw-px-6 lg:tw-px-8 tw-text-center">
              <div role="status">
                <svg
                  className="tw-inline tw-mr-2 tw-w-8 tw-h-8 tw-text-gray-200 tw-animate-spin dark:tw-text-gray-600 tw-fill-gray-600 dark:tw-fill-gray-300"
                  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
                </svg>
                <span className="tw-sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!events && <p className="tw-py-12 sm:tw-px-6 lg:tw-px-8">No events data</p>}
        </div>
      </div>
    </div>
  )
}
