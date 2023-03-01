import './App.css';
import {Photo} from "./Photo";


export function App() {

    const createPhotos = (count) => {
        let photos = []
        for (let i = 1; i < count + 1; i++) {
            photos.push(`${i}.png`)
        }

        return photos
    }

    return (
        <div className="container">
            {createPhotos(70).map((p, index) => {
                return (
                    <Photo photo={p} index={index}/>
                )
            })}
        </div>
    )
}