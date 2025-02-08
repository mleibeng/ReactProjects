import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chefs Recommendation</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

    Recipe.propTypes = {
    recipe: PropTypes.string.isRequired,
};