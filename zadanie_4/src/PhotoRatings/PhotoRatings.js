import { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

export default function PhotoRatings() {
    const [ups, setUps] = useState(0);
    const [downs, setDowns] = useState(0);
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([]);

function Star({ index, value, rating, setRating }) {
    return (
        <div class="inline">
            <FaStar color={value ? "orange" : "#aaa"} onClick={() => setRating(index + 1)} />
        </div>
    )
}

function stars(size, funcValue) {
    return [...Array(size)].map(_ => funcValue());
}

function av(arr) {
    if (!arr.length) {
        return 0;
    }
    return arr.reduce((prev, curr) => prev + curr) / arr.length;
}

    return (
    <>
        <div class="inline-flex">
            <div>
                <FaThumbsUp color={"green"} onClick={(e) => { e.preventDefault(); setUps(ups + 1); }} />
                {ups}
            </div>
            <div>
                <FaThumbsDown color={"red"} onClick={(e) => { e.preventDefault(); setDowns(downs + 1); }} />
                {downs}
            </div>
        </div>
        <div>
            <div class="flex">
                {stars(rating, () => 1).concat(stars(5 - rating, () => 0)).map((value, index) => <Star {...{ value, index, setRating }} />)}
            </div>
            <div>Average rating {av(ratings).toFixed(2)}</div>
            <button onClick={
                () => {
                    ratings.push(rating);
                    setRating(0);
                }
            }>
                Rate
            </button>
        </div>
      </>
    )
}