import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';
import RecordButton from './record_button';
import StopButton from './stop_button';
import Timer from './timer';
import Countdown from './countdown';
// import I18n from 'stores/i18n';

const ActionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 80px;
  z-index: 1;
  ${({ isReplayingVideo }) => (isReplayingVideo) ?
    'z-index: -1' :
    'z-index: 1'
  }
`
//isReplayPlaying === replay mode
const Actions = ({
  isVideoInputSupported,
  isInlineRecordingSupported,
  thereWasAnError,
  isRecording,
  isCameraOn,
  streamIsReady,
  isConnecting,
  isRunningCountdown,
  isReplayingVideo,
  countdownTime,
  timeLimit,
  showReplayControls,
  replayVideoAutoplayAndLoopOff,
  useVideoInput,
  isReplayPlaying,

  onTurnOnCamera,
  onTurnOffCamera,
  onOpenVideoInput,
  onStartRecording,
  onStopRecording,
  // onRecordingComplete,
  onPauseRecording,
  onResumeRecording,
  onStopReplaying,
  onConfirm,
  onContinueReplay,
  onRecordAgain,
  onAcceptVideo,
}) => {
  const renderContent = () => {
    const shouldUseVideoInput =
      !isInlineRecordingSupported && isVideoInputSupported

    if (
      (!isInlineRecordingSupported && !isVideoInputSupported) ||
      thereWasAnError ||
      isConnecting ||
      isRunningCountdown
    ) {
      return null
    }

    if (isReplayingVideo) {
      return (
        null
        // <div>
        //   <Button
        //     type='button'
        //     onClick={onContinueReplay}
        //   >
        //     Replay
        //   </Button>
        //   <Button
        //     type='button'
        //     onClick={onRecordAgain}
        //   >
        //     Record again
        //   </Button>
        //   <Button
        //     type='button'
        //     onClick={onAcceptVideo}
        //   >
        //     Accept this video
        //   </Button>
        // </div>
      )
    }

    if (isRecording) {
      return (
        <StopButton
          type='button'
          onClick={onStopRecording}
          data-qa='stop-recording'
        />
      )
    }

    if (isCameraOn && streamIsReady) {
      return (
        <RecordButton
          type='button'
          onClick={onStartRecording}
          data-qa='start-recording'
        />
      )
    }

    // if (useVideoInput) {
    //   return (
    //     <Button type='button' onClick={onOpenVideoInput} data-qa='open-input'>
    //       Upload a video
    //     </Button>
    //   )
    // }

    return shouldUseVideoInput ? (
      <Button type='button' onClick={onOpenVideoInput} data-qa='open-input'>
        Record a video
      </Button>
    ) : (
      // which buttons to show
      <div style={{ display: 'grid' }}>
        <Button type='button' onClick={onTurnOnCamera} data-qa='turn-on-camera'>
          {'apply.turn_camera'}
          {/* {I18n.t('apply.turn_camera')} */}
        </Button>
        <Button type='button' onClick={onOpenVideoInput} data-qa='open-input'>
          {/* {I18n.t('apply.upload_video')} */}
          {'apply.upload_video'}
        </Button>
      </div>
    )
  }

  return (
    <div>
      {isRecording && <Timer timeLimit={timeLimit} />}
      {isRunningCountdown && <Countdown countdownTime={countdownTime} />}
      <ActionsWrapper isReplayPlaying={isReplayPlaying} isReplayingVideo={isReplayingVideo}>{renderContent()}</ActionsWrapper>
    </div>
  )
}

Actions.propTypes = {
  isVideoInputSupported: PropTypes.bool,
  isInlineRecordingSupported: PropTypes.bool,
  thereWasAnError: PropTypes.bool,
  isRecording: PropTypes.bool,
  isCameraOn: PropTypes.bool,
  streamIsReady: PropTypes.bool,
  isConnecting: PropTypes.bool,
  isRunningCountdown: PropTypes.bool,
  countdownTime: PropTypes.number,
  timeLimit: PropTypes.number,
  showReplayControls: PropTypes.bool,
  replayVideoAutoplayAndLoopOff: PropTypes.bool,
  isReplayingVideo: PropTypes.bool,
  useVideoInput: PropTypes.bool,
  isReplayPlaying: PropTypes.bool,

  onTurnOnCamera: PropTypes.func,
  onTurnOffCamera: PropTypes.func,
  onOpenVideoInput: PropTypes.func,
  onStartRecording: PropTypes.func,
  onStopRecording: PropTypes.func,
  onPauseRecording: PropTypes.func,
  // onRecordingComplete: PropTypes.func,
  onResumeRecording: PropTypes.func,
  onStopReplaying: PropTypes.func,
  onConfirm: PropTypes.func,
  onAcceptVideo: PropTypes.func,
  onContinueReplay: PropTypes.func,
  onRecordAgain: PropTypes.func,
}

export default Actions;