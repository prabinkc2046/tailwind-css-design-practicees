import React from 'react'
import Photo from '@/app/components/Photo';
type PhotoProps = {
    params: {
        photoId: number
    }
}
export default function PhotoPage({params}: PhotoProps) {
const {photoId} = params;
  return (
    <div>
        <Photo photoId={photoId}/>
    </div>
  )
}
