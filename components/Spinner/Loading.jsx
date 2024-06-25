import dynamic from 'next/dynamic';
import spinner from '../../public/jsons/loading.json';

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
  })
function Loading() {
  return (
    <div className="relative w-44 flex justify-center">
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-96 mx-auto h-96 justify-center items-center">
          <Lottie animationData={spinner} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
