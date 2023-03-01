import React from "react";
import {useInView} from "react-intersection-observer";

export function Photo({photo, index}) {
    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
        <div ref={ref} className="photo-card">
            {inView ? <img src={"/img/"+photo} alt={"example"} /> : <div className="photo-skeleton"></div>}
            <span>Photo #{index}</span>
        </div>
    )
}