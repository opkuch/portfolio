import { useState, useEffect } from "react"

export const useProgressiveImage = src => {

    const [srcLoaded, setSrcLoaded] = useState(null)

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => setSrcLoaded(src)
    }, [src])

    return srcLoaded 
}