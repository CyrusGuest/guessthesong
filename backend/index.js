const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const querystring = require('querystring');
const crypto = require("crypto");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = "http://localhost:3000/callback"

const generateRandomString = (length) => {
    return crypto
    .randomBytes(60)
    .toString('hex')
    .slice(0, length);
};

app.get("/login", (req, res) => {
    const state = generateRandomString(16);
    const scope = "user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-playback-position user-library-read"

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state
        }));
});

app.listen(8080, () => console.log("Server listening on port 8080..."));