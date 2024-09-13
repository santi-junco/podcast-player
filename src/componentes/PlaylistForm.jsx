import React, { useState } from "react";

export const PlaylistForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, image });
  };

  return (
    <>
      <form className="playlist-form" onSubmit={handleSubmit}>
        <h3>Creá tu playlist</h3>
        <div className="titulo-container">
          <p>Titulo</p>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description-container">
          <p>Descripcion</p>
          <input
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div className="imagen-container">
          <p>Imagen (url)</p>
          <input
            type="text"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!title || !description || !image}>
          Agregar playlist
        </button>
      </form>
      <div className="preview">
        <div className="playlist-preview">
          {image && <img src={image} alt="Preview" />}
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
