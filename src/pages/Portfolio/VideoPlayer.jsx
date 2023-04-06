// * Libraries
import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactPlayer from "react-player/lazy";
// import { toggleFullScreen } from 'utils/misc';
// import { useSelector, useDispatch } from 'react-redux'

// import {
//     //  setTopicCompletionStatusAction,
//     setTopicCompletionStatusAction,
//     updateTopicProgressAction,
//     subtractVideoUnlockPoints
// } from 'redux/actions'
// import isEmpty from 'utils/is-empty';
import { Box, Skeleton } from "@mui/material";
// import { CircularProgress, Box } from '@material-ui/core';

// import { makeStyles } from '@material-ui/core/styles';

import PlayButton from "../../assets/img/playBtn.png";
import styled from "@emotion/styled";

// import PlayButton from "assets/PlayButtonLesson.svg";
// import PauseButton from "assets/PauseButton.svg";
// import CustomVideoPlayerControls from 'components/CustomVideoPlayerControls';

// import { convertSecsToDuration } from 'utils/convertTime'
const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "19rem",
  [theme.breakpoints.up("xl")]: {
    width: "100%",
    height: "19rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
  "& iframe": {
    // borderRadius: "1rem",
  },
  playerWrapper: {
    position: "relative",
  },
  "& .videoFrame": {
    // maxHeight: "600px", new changes
    "& video": {
    //   borderRadius: "6px",
      // height: "auto !important",
      height: "30% !important",
      // maxHeight: "600px !important", new changes
    },
    "& .react-player__preview": {
      borderRadius: "1rem",
      minHeight: "19rem",
      [theme.breakpoints.down("600")]: {
        minHeight: "19rem !important",
        // minHeight: "360px !important",
      },
    },
    "& .react-player__play-icon": {
      border: "0 !important",
    },
    "& .react-player__shadow": {
      // background: `url(${PlayButtonLesson}),linear-gradient(90deg, rgba(130, 193, 202, 0.55) 0%, rgba(80, 157, 213, 0.55) 100%) !important`,
      background: `url(${PlayButton}),#00000042 !important`,
      zIndex: "0",
      width: "100% !important",
      height: "19 !important",
      // maxHeight: "600px !important", new changes
      borderRadius: "6px !important",
      backgroundRepeat: "no-repeat !important",
      backgroundPosition: "center !important",
    },
  },
  icon: {
    background: `url(${PlayButton}),#00000042 !important`,
    zIndex: "0",
    width: "100% !important",
    height: "19rem !important",
    maxHeight: "19rem !important",
    borderRadius: "6px !important",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center !important",
    [theme.breakpoints.down("600")]: {
      height: "100% !important",
      minHeight: "19rem !important",
    },
  },
  resumeIcon: {
    // background: `url(${PlayBtn}),#00000042 !important`,
    background: `#00000042 !important`,
    zIndex: "0",
    width: "100% !important",
    height: "19rem !important",
    maxHeight: "19rem !important",
    borderRadius: "6px !important",
    // backgroundRepeat: "no-repeat !important",
    // backgroundPosition: "center !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    color: "#fff",
    [theme.breakpoints.down("600")]: {
      minHeight: "19rem !important",
      height: "100% !important",
      padding: "1rem",
    },
    "& .start": {
      display: "inline-block",
      borderRadius: "6px",
      width: "200px",
      height: "60px",
      background: "#343434",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("600")]: {
        fontSize: "1rem",
        width: "140px",
        height: "19rem",
      },
    },
    "& .or": {
      fontSize: "2rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "1rem",
      },
    },
    "& .resume": {
      display: "inline-block",
      borderRadius: "6px",
      width: "200px",
      height: "60px",
      background: "#99093c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("600")]: {
        width: "160px",
        height: "19rem",
        fontSize: "1rem",
      },
    },
  },
  loaderCont: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all .3s",
    [theme.breakpoints.down("600")]: {
      height: "3rem",
      width: "3rem",
    },
    "& .hidden": {
      opacity: 0,
      transition: "all 250ms linear .3s",
    },
    "& .show": {
      opacity: 1,
      // transition: "all 250ms linear .4s"
    },
    "& .thumbnail": {
      transition: "all .3s",
      position: "relative",
      [theme.breakpoints.down("600")]: {
        minHeight: "2rem",
        minWidth: "2rem",
        height: "3rem",
        width: "3rem",
      },
    },
  },
  animationEffect: {
    "&::after": {
      //   content: `"" !important`,
      content: '""',
      width: "120px",
      height: "120px",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "10rem",
      zIndex: "-1",
      transition: "ease-out .4s",
      background: "#000",
      transform: "scale(1.3)",
      opacity: "0.2",
      [theme.breakpoints.down("600")]: {
        width: "4rem",
        height: "4rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    // "&:active::after": {
    //     transform: "scaleX(1.4) scaleY(1.6)",
    //     opacity: 0,
    // },
  },
}));

// let count = 0;
// let progressCount = 0;

const VideoPlayer = React.memo(({ src, img }) => {
  // const classes = useStyles()
  const videoPlayerRef = useRef(null);
  //   const controlsRef = useRef(null);

  // const dispatch = useDispatch()

  // const user = useSelector((state) => state.auth.user)
  // const currentLessonSelected = useSelector(state => state.lesson.currentLesson)
  // const currentTopicSelected = useSelector(state => state.topic.currentTopic)
  // const currentCourseDetails = useSelector(state => state.courses.courseDetails)
  // const enrolledDetails = useSelector(state => state.courses.enrollDetails)
  // const lastCompletedProgress = currentTopicSelected?.progress?.complete //useSelector(state => state.enrol.current.topicsProgress.find(item => item.id === currentTopicSelected.details?._id).completedDuration)
  // const hasUnlockUsed = useSelector(state => state.enrol.current.hasUnlockUsed)
  // const duration = currentTopicSelected?.progress?.duration;
  // //? When the player has to resume video
  // const [resumePlaying, setResumePlaying] = useState(false);

  // //? When the player is ready to play video
  // const [isReady, setIsReady] = useState(false);

  // //? When the player has started Started video
  // const [isStarted, setIsStarted] = useState(false)

  // // const [duration, setDuration] = useState(null)

  // const [isPlaying, setIsPlaying] = useState(true)
  // const [mute, setMute] = useState(false)
  // const [volume, setVolume] = useState(.5)
  // const [playBackRate, setPlayBackRate] = useState(1.0)
  // const [played, setPlayed] = useState(0)
  // const [loaded, setLoaded] = useState(0)
  // const [seeking, setSeeking] = useState(false)
  // const [buffer, setBuffer] = useState(false)
  // const [startOver, setStartOver] = useState(false)
  // const [isClicked, setIsClicked] = useState(false)

  // // Custom Player Controls Ends

  // useEffect(() => {
  //     if (isStarted && videoPlayerRef.current && !startOver) {
  //         seekVideo()
  //     }

  // }, [isStarted])

  // //?YAHA MASLA H

  // useEffect(() => {

  //     videoPlayerRef?.current.showPreview();
  //     setIsStarted(false)
  //     setIsPlaying(true)
  //     setStartOver(false)
  //     showResumeVideoBtn();
  //     if (!startOver) {
  //         seekVideo();
  //     }
  //     //// if (isReady) showResumeVideoBtn();
  //     //// if (isReady && videoPlayerRef.current) {
  //     //// seekVideo();
  //     //// }
  // }, [src])

  // //?YAHA MASLA H

  // useEffect(() => {
  //     if (isReady && videoPlayerRef.current && !startOver) seekVideo()
  // }, [isReady])

  //// useEffect(() => {

  ////     if (videoPlayerRef && videoPlayerRef.current && isStarted) {
  ////         const videoElement = document.querySelector('video')

  ////         function progressLoop() {
  ////             const interval = setInterval(function () {
  ////                 // setPlayed(videoElement?.currentTime)
  ////                 setPlayed(videoElement?.currentTime)
  ////                 //// console.log("videoElement.currentTime==>", videoElement.currentTime)
  ////             });
  ////             return () => {
  ////                 clearInterval(interval)
  ////             }
  ////         }
  ////         videoElement?.addEventListener("play", progressLoop);
  ////         return () => {
  ////             videoElement?.removeEventListener("play", progressLoop);

  ////         }
  ////     }
  //// }, [played])

  // const seekVideo = () => {

  //     if (isEmpty(lastCompletedProgress) && !isEmpty(duration))
  //         return

  //     // console.log("Video Player Progress", { duration }, { lastCompletedProgress }, lastCompletedProgress >= duration)

  //     //// if (currentTopicSelected.details.lastCompletedProgressCompleted >= duration)
  //     if (currentTopicSelected?.progress?.complete >= duration) seekTo(0) // watched the whole video or completed before
  //     else seekTo(lastCompletedProgress)
  // }

  // const seekTo = (seconds) => {
  //     videoPlayerRef.current.seekTo(parseFloat(seconds), 'seconds')
  //     setPlayed(parseFloat(seconds))
  // }

  // const handleDuration = (duration) => {
  //     //? Gets total duration of video after isStarted true
  //     // console.log('Video Player onDuration', duration)
  //     // setDuration(duration)
  // }
  // const handleEnded = async () => {
  //     const topicId = currentTopicSelected?.details?._id
  //     const lesson = currentLessonSelected?.details

  //     if (currentTopicSelected?.progress?.isCompleted === true) return

  //     await dispatch(
  //         setTopicCompletionStatusAction(
  //             topicId,
  //             true,
  //             lesson,
  //             user,
  //             enrolledDetails._id
  //         )
  //     );
  // }
  // const handlePlay = () => {
  //     // console.log("OnPlay-->HANDLE_ON_PLAY")
  //     // alert("PLAYED")
  //     setIsClicked(true)
  //     setTimeout(() => {
  //         setIsClicked(false)
  //     }, 300);
  // }
  // const handlePause = () => {
  //     setIsClicked(true)

  //     setTimeout(() => {
  //         setIsClicked(false)
  //     }, 300);
  //     // console.log('Video Player onPause')
  // }
  // const handlePlayPause = () => {
  //     setIsPlaying(!isPlaying)
  // }
  // const handleMute = () => {
  //     setMute(!mute)
  // }
  // const handleVolumeChange = (e, val) => {
  //     const vol = parseFloat(val / 100);
  //     setVolume(vol)
  //     if (val == 0) {
  //         setMute(true)
  //     } else {
  //         setMute(false)
  //     }
  // }
  // const handleVolumeSeekUp = (e, val) => {
  //     const vol = parseFloat(val / 100);
  //     setVolume(vol)
  //     if (val == 0) {
  //         setMute(true)
  //     } else {
  //         setMute(false)
  //     }
  // }
  // const handlePlayBackRate = (rate) => {
  //     setPlayBackRate(rate)
  // }

  // const handleOnSeek = (e, val) => {
  //     setPlayed(parseFloat(val))
  // }
  // const handleOnSeekMouseDown = () => {
  //     setSeeking(true);
  // }
  // const handleOnSeekMouseUp = (e, val) => {
  //     setSeeking(false)
  //     videoPlayerRef.current.seekTo(val);
  //     setPlayed(val)
  // }

  // const handleError = () => {
  //     // console.log('Video Player handleError')
  // }
  // const showResumeVideoBtn = () => {
  //     if (currentTopicSelected?.progress?.complete > 0 && !currentTopicSelected?.progress?.isCompleted) {
  //         setResumePlaying(true)
  //     }
  //     else { setResumePlaying(false) }
  // }

  // const handleStart = () => {
  //     setIsStarted(true)

  // }

  // const handleMouseMove = () => {
  //     if (controlsRef.current) {
  //         controlsRef.current.style.visibility = "visible";
  //         count = 0;
  //     }
  // }

  // const handleProgress = progress => {
  //     const topicId = currentTopicSelected?.details?._id
  //     const lesson = currentLessonSelected?.details

  //     const { complete, duration, isCompleted } = currentTopicSelected?.progress

  //     if (count > 10) {
  //         controlsRef.current.style.visibility = "hidden";
  //         controlsRef.current.style.transition = `opacity 1s ease-out`;
  //         count = 0;
  //     }
  //     if (controlsRef.current && controlsRef.current.style.visibility == "visible") {
  //         count += 1;
  //     }

  //     if (progressCount <= 50) {
  //         progressCount += 1;
  //     }

  //     // const isAbleToProgress = progress.playedSeconds > currentTopicSelected.progress.complete &&
  //     //     progress.playedSeconds < currentTopicSelected.progress.duration &&
  //     //     currentTopicSelected.progress.isCompleted === false
  //     const isAbleToProgress = progress.playedSeconds > complete && progress.playedSeconds < duration && isCompleted === false
  //     if (!seeking) {
  //         //// setPlayed(progress.played)
  //         setPlayed(progress.playedSeconds)
  //         setLoaded(Math.round(progress.playedSeconds + progress.loaded))
  //     }
  //     if (isAbleToProgress && progressCount >= 50) {
  //         // console.log("Video Player Progress Dispatched", "Played::", progress.playedSeconds)
  //         //? IF WE SET DURATION to 10000 THEN PROGRESSBAR WILL UPDATE AFTER 10s,
  //         //? IF WE SET DURATION to 200 THEN WHAT ABOUT ABOUT API CALL?

  //         progressCount = 0;
  //         dispatch(updateTopicProgressAction(progress.playedSeconds, topicId, enrolledDetails._id, lesson))
  //         //// if (!seeking) {
  //         ////     setPlayed(progress.played)
  //         ////     setLoaded(progress.loaded)
  //         //// }

  //     }
  //     //// if (!seeking) {
  //     ////     setPlayed(progress.played)
  //     ////     setLoaded(progress.loaded)
  //     //// }

  //     // if (currentTopicSelected?.progress?.isCompleted === true)
  // }

  // const handleUnlockSubtraction = () => {
  //     if (!hasUnlockUsed)
  //         return

  //     if (user.unlocksLeft <= 0) {
  //         dispatch({
  //             type: "TOAST",
  //             payload: {
  //                 message: "Insufficient unlocks",
  //                 type: "error"
  //             },
  //         })
  //         setTimeout(() => {
  //             videoPlayerRef.current.showPreview();
  //         }, 1);

  //         return
  //     }
  //     if (hasUnlockUsed) {
  //         dispatch(subtractVideoUnlockPoints(user._id))
  //         dispatch({
  //             type: "TOAST",
  //             payload: {
  //                 message: `${user.unlocksLeft - 1} unlocks left`,
  //             },
  //         })
  //     }
  // }
  // const handleClickStartOver = () => {
  //     // console.log("handleClickStartOver-->", "Played", played)
  //     setStartOver(true)
  //     seekTo(0)
  //     handleUnlockSubtraction()

  // }
  // const handleClickResume = () => {
  //     handleUnlockSubtraction()
  //     seekTo(lastCompletedProgress)
  // }
  // const ResumeBtn = () => {
  //     return (
  //         <div className={classes.resumeIcon}>
  //             <span className="start" onClick={() => handleClickStartOver()}>Start Over</span>
  //             <span className="or">Or</span>
  //             <span className="resume" onClick={() => handleClickResume()}>Resume ({convertSecsToDuration(lastCompletedProgress)})</span>
  //         </div>
  //     )
  // }

  // const getVideoPlayerTag = (e, type) => {
  //     if (e.target.nodeName === 'VIDEO') {
  //         if (type === "click") {
  //             handlePlayPause()
  //         }
  //         else {
  //             toggleFullScreen()
  //         }
  //     }

  // }

  const VideoSkeleton = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton
          sx={{ background: "grey", borderRadius: "6px" }}
          variant="rectangular"
          width={"100%"}
          height={"60rem"}
        />
      </Box>
    );
  };

  return (
    <CustomBox
      id="myVideo"
      // className={classes.playerWrapper}
      // onMouseMove={handleMouseMove}
      // onClick={(e) => getVideoPlayerTag(e, "click")}
      // onDoubleClick={(e) => getVideoPlayerTag(e, "dblclick")}
    >
      {/* {buffer && <div className={classes.loaderCont}><CircularProgress color="inherit" /></div>} */}
      {/* {isStarted && <div className={`${classes.loaderCont} ${isClicked ? classes.animationEffect : ""}`}>
                {isPlaying ?
                    <img className={`thumbnail ${isClicked ? "show" : "hidden"}`} src={PlayButton} height={120} width={120} alt='playbutton' />
                    : <img className={`thumbnail ${isClicked ? "show" : "hidden"}`} src={PauseButton} height={120} width={120} alt='pause button' />
                }

            </div>} */}
      {console.log("videoPlayer")}
      {/* onTransitionEnd={() => setIsClicked(false)} */}
      <ReactPlayer
        ref={videoPlayerRef}
        url={src}
        className={"videoFrame"}
        //// config={ }
        light={img}
        width="100%"
        height="100%"
        // playing={isPlaying}
        // playIcon={!resumePlaying ? <div onClick={e => handleUnlockSubtraction()} className={classes.icon}></div> : <ResumeBtn />}
        playIcon={<img src={PlayButton} />}
        controls={true}
        progressInterval={200} //delay 100000
        playing={true}
        // muted={mute}
        // volume={volume}
        // playbackRate={playBackRate}
        fallback={<VideoSkeleton />}
        // onProgress={handleProgress}
        // onDuration={handleDuration}
        //// onSeek={val => console.log("onSeek ",val)}
        // onReady={() => setIsReady(true)}
        // onStart={handleStart}
        // onEnded={handleEnded}
        // onPause={handlePause}
        // onError={handleError}
        // onPlay={handlePlay}
        // onBuffer={() => setBuffer(true)}
        // onBufferEnd={() => setBuffer(false)}

        //// onClickPreview={e => console.log("preview", e)}
      />
      {/* {isStarted &&
                <CustomVideoPlayerControls
                    ref={controlsRef}
                    isPlaying={isPlaying}
                    mute={mute}
                    volume={volume}
                    playBackRate={playBackRate}
                    played={played}
                    duration={duration}
                    loaded={loaded}
                    onPlayPause={handlePlayPause}
                    onMute={handleMute}
                    onVolumeChange={handleVolumeChange}
                    onVolumeSeekUp={handleVolumeSeekUp}
                    onPlayBackRateChange={handlePlayBackRate}
                    onSeek={handleOnSeek}
                    onSeekMouseUp={handleOnSeekMouseUp}
                    onSeekMouseDown={handleOnSeekMouseDown}
                //// onPause={handlePause}
                //// onProgress={handleProgress}
                //// onSeekChange={handleSeekChange}
                //// onVolumeChange={handleVolumeChange}
                />
            } */}
    </CustomBox>
  );
});
export default VideoPlayer;
