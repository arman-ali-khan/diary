function Hero() {
  return (
    <div className="hero min-h-[20vh] max-h-[300px] h-96 bg-[url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D')] md:min-h-[40vh] lg:min-h-[500px] bg-base-200">
      <div className="backdrop-blur-sm flex items-center justify-center w-full h-full">
        <div className="hero-content">
          <div className="">
            <h1 className="xl:text-5xl font-bold text-lg">Hello there</h1>
            <p className="py-6 text-xs">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
