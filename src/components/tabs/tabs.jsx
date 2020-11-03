import React from "react";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import {PropTypes} from 'prop-types';
import {FilmTab} from "../../const";

const Tabs = (props) => {
  const {film, activeTab, handleActiveTab} = props;
  const {genre, year, rating, description, director, actors, duration, reviews} = film;

  const getFilmPageContent = () => {
    switch (activeTab) {
      case FilmTab.OVERVIEW:
        return (
          <FilmPageOverview
            description={description}
            director={director}
            actors={actors}
            rating={rating}
          />
        );
      case FilmTab.DETAILS:
        return (
          <FilmPageDetails
            director={director}
            duration={duration}
            actors={actors}
            genre={genre}
            year={year}
          />
        );
      case FilmTab.REVIEWS:
        return (
          <FilmPageReviews reviews={reviews}/>
        );
    }
    return <Redirect to="/" />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {
            Object.values(FilmTab).map((value, i) => {
              return (
                <li
                  key={i}
                  className={value === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      handleActiveTab(value);
                    }}
                    href="#"
                    className="movie-nav__link">{value}</a>
                </li>
              );
            })
          }

        </ul>
      </nav>

      {getFilmPageContent()}

    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    duration: PropTypes.string.isRequired,
  }),
  activeTab: PropTypes.string.isRequired,
  handleActiveTab: PropTypes.func.isRequired
};

export default Tabs;
