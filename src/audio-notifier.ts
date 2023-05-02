export const createAudioNotifier = () => {
  const audioPlayer = new Audio();
  audioPlayer.src = chrome.runtime.getURL("found.mp3");
  audioPlayer.pause();

  return {
    play() {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    },
  };
};
