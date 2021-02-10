import React from 'react';
import ContentLoader from 'react-content-loader';
import './MovieLoader.css';

const MovieLoader = () => (
  <>
    <ContentLoader
      className="loader"
      backgroundColor="#737373"
      foregroundColor="#ababab"
    >
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
    <ContentLoader
      className="loader"
      backgroundColor="#737373"
      foregroundColor="#ababab"
    >
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
    <ContentLoader
      className="loader"
      backgroundColor="#737373"
      foregroundColor="#ababab"
    >
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  </>
)

export default MovieLoader
