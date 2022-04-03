import { useEffect, useState } from 'react'

// problem with "Make Impossible States Impossible"
/*
interface UseFetch<Data> {
  data?: Data;
  loading: boolean;
  error?: string;
}
*/

type Loading = { type: 'LOADING' }
type Error = { type: 'ERROR', message: string }
type Success<T> = { type: 'SUCCESS', data: T }
type NoData = { type: 'NO_DATA' }

type UseFetch<T> =
  | Loading
  | Error
  | Success<T>
  | NoData

const useFetch = <Data>(input: RequestInfo, init?: RequestInit | undefined): UseFetch<Data> => {
  const [data, setData] = useState<Data | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    let isMounted = true
    fetch(input, init)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('API error')
        }
        return response.json()
      })
      .then((responseData) => {
        if (isMounted) {
          setData(responseData)
          setLoading(false)
        }
      })
      .catch((error: Error) => {
        if (isMounted) {
          setError(`Fetch error: ${error.message}`)
          setLoading(false)
        }
      })
    return () => {
      isMounted = false
    }
  }, [input, init])

  if (loading) {
    return {
      type: 'LOADING'
    }
  }

  if (error) {
    return {
      type: 'ERROR',
      message: error,
    }
  }

  if (data) {
    return {
      type: 'SUCCESS',
      data,
    }
  }

  return {
    type: 'NO_DATA',
  }
}

export default useFetch
