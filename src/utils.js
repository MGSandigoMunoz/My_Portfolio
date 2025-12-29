//The path is relative. Import dynamic images in our components

export const getImageUrl = (path) =>{
    return new URL(`/assets/${path}`,import.meta.url).href;
}