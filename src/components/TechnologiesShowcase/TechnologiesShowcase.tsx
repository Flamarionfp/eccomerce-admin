import { Technologies } from './TechnologiesShowcase.types';

export const TechnologiesShowcase = () => {
  const technologies: Technologies[] = [
    {
      name: 'React',
      imagePath: 'images/react-logo.svg',
      route: '',
    },
    {
      name: 'Typescript',
      imagePath: 'images/typescript-logo.png',
      route: '',
    },
    {
      name: 'Tailwind',
      imagePath: 'images/tailwind-logo.jpg',
      route: '',
    },
    {
      name: 'Vite',
      imagePath: 'images/vite-logo.svg',
      route: '',
    },
  ];

  return (
    <div className="flex gap-4">
      {technologies.map(({ name, imagePath, route }) => (
        <a key={name} href={route} title={name} target="_blank" rel="noreferrer">
          <img className="w-[70px]" alt={`${name} logo`} src={imagePath} />
        </a>
      ))}
    </div>
  );
};
