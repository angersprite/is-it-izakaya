
import './styles/App.css'
import { getMedia } from './services/mediaService'
import { useState, useEffect } from 'react'
import MediaDisplay from './components/MediaDisplay'
import Ballot from './components/Ballot'
import TraversalButtons from './components/Traversal'

export default function App() {
  const [media, setMedia] = useState({})

  useEffect(() => {
    getMedia()
      .then(res => { return res.json()})
      .then(json => { setMedia(json) })
  })

  return (
    <>
      <TraversalButtons></TraversalButtons>
      <MediaDisplay media={media}></MediaDisplay>
      <Ballot></Ballot>
    </>
  )
}