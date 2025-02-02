export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-img-container">
                <img src="../images/mount_fuji.png" className="fuji" alt="mount_fuji" />
            </div>
            <div>
                <img src="/images/location_marker.png" className="location-marker" alt="location marker" />
                <span>Japan</span>
                <a href="https://g.co/kgs/dqFuH1v">View on Google Maps</a>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan, for both
                    Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}