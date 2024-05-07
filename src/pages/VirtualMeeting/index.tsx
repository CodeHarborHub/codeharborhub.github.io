import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faVideoSlash, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

import "./VirtualMeetingComponent.css";

const VirtualMeeting: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [isMicOn, setIsMicOn] = useState<boolean>(true);
  const [videoBtn, setVideoBtn] = useState<string>("video-on");
  const [micBtn, setMicBtn] = useState<string>("mic-on");

  useEffect(() => {
    // Initialize media devices
    initializeMediaDevices();
  }, []);

  const initializeMediaDevices = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      // Logic to add user's video to the meeting
      const localVideo = document.getElementById(
        "localVideo"
      ) as HTMLVideoElement;
      if (localVideo) {
        localVideo.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const handleToggleCamera = () => {
    // Toggle camera state
    setIsCameraOn(!isCameraOn);
    setVideoBtn(isCameraOn ? "video-off" : "video-on");
    // Logic to turn on/off camera
    const localVideo = document.getElementById(
      "localVideo"
    ) as HTMLVideoElement;
    if (localVideo.srcObject) {
      const tracks = (localVideo.srcObject as MediaStream).getVideoTracks();
      tracks.forEach((track) => (track.enabled = !isCameraOn));
    }
  };

  const handleToggleMic = () => {
    // Toggle microphone state
    setIsMicOn(!isMicOn);
    setMicBtn(isMicOn ? "mic-off" : "mic-on");
    // Logic to mute/unmute microphone
    const localVideo = document.getElementById(
      "localVideo"
    ) as HTMLVideoElement;
    if (localVideo.srcObject) {
      const tracks = (localVideo.srcObject as MediaStream).getAudioTracks();
      tracks.forEach((track) => (track.enabled = !isMicOn));
    }
  };

  const handleSendMessage = () => {
    // Logic to send message to all participants
    setChatMessages([...chatMessages, messageInput]);
    setMessageInput("");
  };

  return (
    <Layout
      title={"Virtual Meeting"}
      description="Virtual Meeting Page for CodeHarborHub Learners, and users"
    >
      <div className="virtual-meeting-container">
        <div className="video-conference">
          <video id="localVideo" autoPlay muted />
          <div className="controls">
          <button className={videoBtn} onClick={handleToggleCamera}>
            {isCameraOn ? <FontAwesomeIcon icon={faVideo} /> : <FontAwesomeIcon icon={faVideoSlash} />}
          </button>
          <button className={micBtn} onClick={handleToggleMic}>
            {isMicOn ? <FontAwesomeIcon icon={faMicrophone} /> : <FontAwesomeIcon icon={faMicrophoneSlash} />}
          </button>
        </div>
        </div>        
        <div className="sidebar">
          <div className="participants-list">
            <h2>Participants</h2>
            <ul>
              {participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ul>
          </div>
          <div className="chat">
            <h2>Chat</h2>
            <div className="chat-messages">
              {chatMessages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VirtualMeeting;
