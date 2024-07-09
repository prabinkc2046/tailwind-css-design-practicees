"use client"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import axios from "axios"

type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const fetchPhotos = async () => {
    const {data: photos} = await axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
    return photos
}

const fetchOnePhoto = async(photoId: number): Promise<Photo> => {
    const {data: photo } = await axios.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    return photo;
}
export const usePhotos = () => {
    return useQuery({
        queryKey: ['photos'],
        queryFn: fetchPhotos
    })
}

export const usePhoto = (photoId: number) => {
    return useQuery({
        queryKey:['photo', photoId],
        queryFn: () => fetchOnePhoto(photoId),
    })
}
