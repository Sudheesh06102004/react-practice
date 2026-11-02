import React from 'react'
import { useQuery } from '@tanstack/react-query'

const Test1 = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['githubdata'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/antonfrancisjeejo/flipkart-clone')

      if (!response.ok) {
        throw new Error('Failed to fetch GitHub data')
      }

      return response.json()
    },
  })

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>An Error Occured: {error.message}</h1>
  }

  console.log(data)

  return <div>
    <h1>{data.name}</h1>
    <h3>{data.forks}</h3>
    <h3>{data.stargazers_count}</h3>
    <h3>{data.subscribers_count}</h3>
  </div>
}

export default Test1