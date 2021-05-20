import React from "react";

function MoviesCard(props) {
  const [isLiked, setIsLikedStatus] = React.useState(false);

  const handleLikeClick = () => {
    if (isLiked === false) {
      setIsLikedStatus(true);
    } else {
      setIsLikedStatus(false);
    }
  };

  const handleDeleteClick = () => {
    console.log("Удаление пока не реализовано");
  };

  return(
    <li className="movies-card">
      <div className="movies-card__head">
        <div className="movies-card__info">
          <h2 className="movies-card__heading">
            {props.item.name}
          </h2>
          <p className="movies-card__length">
            {props.item.length}
          </p>
        </div>
        {
          props.currentRoute === "saved"
            ?
          <button className="movies-card__save-button movies-card__save-button_saved" onClick={handleDeleteClick} />
            :
          isLiked
            ?
          <button className="movies-card__save-button movies-card__save-button_active" onClick={handleLikeClick} />
            :
          <button className="movies-card__save-button" onClick={handleLikeClick} />
        }
      </div>
      <div className="movies-card__photo" style={{
        backgroundImage: `url(${props.item.image})`
      }} />
    </li>
  );
};

export default MoviesCard;
