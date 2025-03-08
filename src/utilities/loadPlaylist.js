const audioFiles = require.context("../assets/audio", false, /.mp3$/);

const musicTracks = audioFiles.keys().map((file) => ({
    name: file.replace("./", "").replace(".mp3", ""), // Extract filename without extension
    src: audioFiles(file),
}));
export default musicTracks;