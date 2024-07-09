"use client"
import React from 'react'
import { usePhoto } from '../(photos)/usePhoto'

type PhotoProps = {
    photoId: number
}
export default function Photo({photoId}: PhotoProps) {
const {data: photo, isError, isLoading} = usePhoto(photoId)

if (isLoading) return (<div>Photo is loading</div>)

if (isError) return (<div>Error in fetching photos</div>)

return (
    <div key={photo?.id}>
        <h2>{photo?.title}</h2>
        <img src={photo?.url} alt={photo?.title}/>
    </div>
)
}
