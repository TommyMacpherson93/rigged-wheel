import { ISpinWheelProps, SpinWheel } from "spin-wheel-game";

interface Props {
  segments: {
    segmentText: string;
    segColor: string;
  }[];
}

function Wheel({ segments }: Props) {
  const handleSpinFinish = (result: string) => {
    console.log(`Spun to: ${result}`);
    // Handle the result as needed
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: "Spin",
    isOnlyOnce: false,
    size: 290,
    upDuration: 500,
    downDuration: 3000,
    fontFamily: "Arial",
    arrowLocation: "top",
    showTextOnSpin: false,
    isSpinSound: true,
  };

  return <SpinWheel {...spinWheelProps} />;
}

export default Wheel;
