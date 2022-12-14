import { Main } from 'components';

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white">
      <Main />
      <nav className="flex gap-10 mr-10">
        <a
          href="https://github.com/Flamarionfp/vite-react-main-boilerplate"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          See on github
        </a>
        <a
          href="https://www.linkedin.com/in/flamarion-fagundes-pinto-0b037b210/"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Contact the author
        </a>
      </nav>
    </header>
  );
};
