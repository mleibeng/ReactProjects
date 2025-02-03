import PropTypes from 'prop-types'

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.img}
                    alt={props.altText}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="/images/location_marker.png"
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.href}>View on Google Maps</a>
                <h2 className="entry-title">{props.entryTitle}</h2>
                <p className="trip-dates">{props.tripDates}</p>
                <p className="entry-text">{props.entryText}</p>
            </div>
        </article>
    )
}

Entry.propTypes = {
    img: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    entryTitle: PropTypes.string.isRequired,
    tripDates: PropTypes.string.isRequired,
    entryText: PropTypes.string.isRequired,
    altText: PropTypes.string
};