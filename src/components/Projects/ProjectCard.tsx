import Image from 'next/image';

import { ProjectCardType } from './ProjectCard.types';

type ProjectCardProps = { data: ProjectCardType };

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { name, status, ifCyclical, hashtags, shortDescription, imageSRC, alt } = data;
  return (
    <div>
      PROJECT CARD
      <Image src={imageSRC} alt={`Project ${alt} image`} width={588} height={332} />
      <div>
        <h2>{name}</h2>
        <span>{status + ifCyclical ? 'cyclical' : null}</span>
        <div>
          {hashtags.map((hashtag) => (
            <p key={hashtag}>{hashtag}</p>
          ))}
        </div>
        <p>{shortDescription}</p>
        <button>{'Zobacz więcej ->'}</button>
      </div>
    </div>
  );
};
