import { artistArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id

    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id

    return newSongObj;
});

const responseArtists = await db
    .collection('artists')
    .insertMany(newArtistsArray);
const responseSongs = await db
    .collection('songs')
    .insertMany(newSongsArray);

console.log(responseArtists);
console.log(responseSongs);