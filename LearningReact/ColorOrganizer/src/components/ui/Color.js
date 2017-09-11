import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import '../../../stylesheets/Color.scss'

class Color extends Component {

    render() {
        const {
            title, color, rating, timestamp, onRemove, onRate
        } = this.props

        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>
                    <FaTrash />
                </button>
                <div className="color"
                     style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

export default Color
