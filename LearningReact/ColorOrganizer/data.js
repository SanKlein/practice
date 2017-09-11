{
    colors: [
        {
            "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
            "title": "Ocean Blue",
            "color": "#0070ff",
            "rating": 3,
            "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        },
        {
            "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
            "title": "Tomato",
            "color": "#d10012",
            "rating": 2,
            "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
        },
        {
            "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
            "title": "Lawn",
            "color": "#67bf4f",
            "rating": 1,
            "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        },
        {
            "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
            "title": "Party Pink",
            "color": "#ff00f7",
            "rating": 5,
            "timestamp": "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"
        }
    ],
    sort: "SORTED_BY_DATE"
}

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)} />
            )
        }
    </div>

const Color = ({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
             style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}/>
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
