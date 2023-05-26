import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 804185551;
    const serverSecret = "8303a0766647c1bc9c82f7784f4d620c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "yassine"
    );
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return (
    <>
    <div>
    
      <div
        className="myCallContainer"
        ref={meeting}
        style={{ width: "100vw", height: "100vh" }}
      >
      </div>
      </div>
    </>
  );
};
export { Room };
