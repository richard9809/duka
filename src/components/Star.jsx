import React from 'react'

const Star = ({ rating }) => {
    // Round the rating to the nearest 0.5 and convert it to a maximum of 5 stars
    const roundedRating = Math.round(rating * 2) / 2;
    const totalStars = 5;
  
    return (
      <div>
        {[...Array(totalStars)].map((_, index) => {
          return (
            <i
              key={index}
              className={`fa-solid fa-star${index < roundedRating ? ' text-yellow-500' : ''}`}
            ></i>
          );
        })}
      </div>
    )
  }

export default Star