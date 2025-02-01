import css from "./AnImageCard.module.css";

const AnImageCard = ({ image }) => {
  return (
    <div className={css["image-container"]}>
      <img src={image.urls.small} alt={image.alt_description} />
      <p className={css["photographer"]}>{image.user.name}</p>
      <p className={css["description"]}>{image.alt_description}</p>
    </div>

  );
};

export default AnImageCard;
