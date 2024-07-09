"use client"
import React from 'react'
import { usePhotos } from '../(photos)/usePhoto'
export default function Photos() {
const {data: photos, isError, isLoading} = usePhotos()

if(isLoading) return (<div>page is loading .....</div>)

if(isError) return (<div>There is error in loading page....</div>)


return (
    <ul>
        {photos?.map(photo => {
            return(
                <li key={photo.id}>
                    <h2>{photo.title}</h2>
                    <div>
                        <img src={photo.url} alt={photo.title} height={100} width={100}/>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}
