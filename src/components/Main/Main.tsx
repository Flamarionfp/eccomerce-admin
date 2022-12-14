export const Main = ({ title = 'React Vite Main Boilerplate' }) => {
  return (
    <div className="flex items-center p-10">
      <img className="w-12 mr-3" alt="logo typescript" src="/images/typescript-logo.png" />
      <h1 className="font-light text-2xl">{title}</h1>
    </div>
  );
};
