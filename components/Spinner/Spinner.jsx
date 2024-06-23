import dynamic from 'next/dynamic';
import spinner from '../../public/jsons/loading.json';

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
  })
function Spinner() {
  return (
    <div className="relative">
      <div className="flex w-full bg-base-200 z-30 absolute top-0 overflow-hidden items-center h-screen justify-center">
        <div className="flex flex-col w-64 justify-center items-center">
          <Lottie animationData={spinner} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
