import { data } from "../../app/projectData";

interface HeaderProps {
  path?: string;
  bgColor?: string;
}

const Header = ({ path, bgColor }: HeaderProps) => {
  const projectData = data.find((project) => project.path === path);

  return (
    <header
      className={`flex flex-col px-8 py-4 md:px-16 md:py-8 dark:text-black ${bgColor}`}
    >
      <h1>{projectData!.title}</h1>
      <h2>{projectData!.description}</h2>
      <div className="flex flex-row flex-wrap my-8">
        {projectData!.tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
    </header>
  );
};

const Tag = ({ title }: { title: string }) => (
  <div className="border-2 border-solid border-black rounded-lg px-4 py-2 mr-4 mb-4 md:px-8">
    <p className="md:text-xl">{title.toUpperCase()}</p>
  </div>
);

export default Header;
