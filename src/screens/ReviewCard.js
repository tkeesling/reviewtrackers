import PropTypes from 'prop-types'; // eslint-disable-line
import React from 'react';

const propTypes = {
  review: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};

function ReviewCard({ review }) {
  const { id, author } = review;
  return (
    <div>
      {id}
      <br />
      {author}
    </div>
  );
}

ReviewCard.propTypes = propTypes;

export default ReviewCard;

// {
//   "id": "5d707203b65083001e956f0a",
//   "author": "Weeks Duran",
//   "place": "Big Johns Burgers",
//   "published_at": "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
//   "rating": 5,
//   "content": "Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure.\r\n"
// },
