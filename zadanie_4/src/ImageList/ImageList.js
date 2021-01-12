import PhotoRatings from '../PhotoRatings/PhotoRatings.js';

export default function ImageList({images, deleteImage = f => f}) {
    return (
    <div>
        {images.map((data, j) =>
            
            <div key={j} className="Photos">
                <div>Tytuł: {data.title} Data: {data.date}</div>
                <img src={data.url} className="img_dimensions"/>
                <br/>
                <PhotoRatings /><button onClick={() => deleteImage(j)}>Usun</button>
            </div>
            
            )}
    </div>
    );
}