import React from 'react'

export default async function getImages() {
  const res = await fetch('https://lireadgroup.com/dataone.json')

  if (!res.ok) throw new Error(res.statusText)
  

  return res.json()
}
