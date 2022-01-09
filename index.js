const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const spotifyApi = require('./src/components/connectSpotify')
const twitterApi = require('./src/components/connectTwitter')
const config = require('./src/config.json');
const callback = require('./src/components/callback')

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json());
app.use(cors({origin : "*", credentials: true}));

const scopes = JSON.parse(JSON.stringify(config.scopes));

app.get('/login', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback' , callback);

app.get('/lastlistened' , async(req , res) => {

    spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        if(data){
            let track = data.body.item;
            res.send(sendTrack(track ?? getLastListened()));
        }
    })

})

function sendTrack(track){

    if(!track.album.images){
        return {error : 'Son dinlenilen veya şuan dinlenilen bir parça yok!'}
    }

    let artists = track.artists;
    let artistName = '';
    let trackName = track.name;
    let albumImage = track.album.images[0];
    for(let i=0; i < artists.length; i++){artistName = artistName+' '+artists[i].name;}

    return {text : artistName +' - '+ trackName, artistName, trackName, albumImage}

}

async function getLastListened(){
    let track = null
    await spotifyApi.getMyRecentlyPlayedTracks({limit : 1}).then((data) => {track = data.body.items[0].track}, (err) => {console.log(err);});
    return track;
}

app.post('/changebanner' , (req, res) => {

    twitterApi.post('account/update_profile_banner' , {
        Name : '' ,
        banner : req.body.dataUrl,
        width : 1500,
        height : 500,
    } , (err, data) => {
        if (err) {
            return console.log('Error :' , err);
        }
        return console.log(data ? 'Banner başarıyla güncellendi!' : '');
    })

})

app.listen(3000 , () => {
    console.log('Server kuruldu. Spotify bağlantısı için : http://localhost:3000/login');
})