import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center md:grid md:grid-cols-2 md:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/programmer.png"
                alt="Ashish Portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
             Building Scalable Modern Mobile Apps for the future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary target="_blank" href={'https://drive.google.com/file/d/1FOtOFQTZS4CpCbMN-14kkh0mcxVilKAq/view?usp=sharing'} label={'Download Resume'} icon={"download"} />

            <ButtonOutline href={"#about"} label={"Scroll down"} icon={"arrow_downward"} />
          </div>

        </div>

        <div className="hidden md:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden ">
                <img src="/images/Ashish.png" width={656} height={800} alt="Ashish" className="w-4/6 -right-12 relative"/>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
