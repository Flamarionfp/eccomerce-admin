import { Header, TechnologiesShowcase } from 'components';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

export const Home = () => {
  const isDesktop = useMediaQuery('(min-width: 731px)');

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      {isDesktop && <Header />}
      <main className="px-3 flex flex-col items-center">
        <header className="mt-40 mb-16">
          {!isDesktop && (
            <div>
              <h1 className="text-white text-center font-extrabold text-4xl mb-10">
                React Vite Boilerplate
              </h1>
            </div>
          )}
          <h2 className="text-white text-center font-extrabold text-3xl lg:text-5xl">
            The best boilerplate for you React Project!
          </h2>
        </header>
        <div>
          <TechnologiesShowcase />
        </div>
      </main>
      <footer>
        {!isDesktop && (
          <div className="flex flex-col items-center mt-10">
            <a
              href="https://github.com/Flamarionfp/vite-react-main-boilerplate"
              className="text-lg text-white"
              target="_blank"
              rel="noreferrer"
            >
              See on github
            </a>
            <a
              href="https://www.linkedin.com/in/flamarion-fagundes-pinto-0b037b210/"
              className="text-lg text-white"
              target="_blank"
              rel="noreferrer"
            >
              Contact the author
            </a>
          </div>
        )}

        <p className="font-light text-white text-center text-md mt-10">
          By Flamarion Fagundes - 2022 ©
        </p>
      </footer>
    </div>
  );
};
