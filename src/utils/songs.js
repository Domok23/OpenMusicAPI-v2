// mapDBToModel
const modelGetSongs = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const modelGetSongById = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId: album_id,
});

module.exports = { modelGetSongs, modelGetSongById };
