import PropTypes from 'prop-types';

function Article(props) {
    const { title, views } = props;

    return (
        <div className="item item-article">
            <h3><a href=".">{title}</a></h3>
            <p className="views">Прочтений: {views}</p>
        </div>
    )
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
};

export default Article;
