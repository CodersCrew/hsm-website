import Image from 'next/image';

import { StatusTag } from '../StatusTag';
import { ProjectCardType } from './ProjectCard.types';

type ProjectCardProps = { data: ProjectCardType };

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { name, status, ifCyclical, hashtags, shortDescription, imageSRC, alt } = data;
  return (
    <div className="flex justify-between border-2 px-32 py-16 ">
      <Image src={imageSRC} alt={`Project ${alt} image`} width={612} height={100} />
      <div>
        <h2>{name}</h2>
        <StatusTag kind={status} ifCyclical={ifCyclical} />
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
