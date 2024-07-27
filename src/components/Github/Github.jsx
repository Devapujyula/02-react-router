import React, { useEffect } from 'react'

function Github() {

  const [data, setData] = React.useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-6 text-3xl'>
      Github follwers : {data.followers}
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
