import Image from 'next/image';

import { StatusTag } from '../../StatusTag';
import Hashtag from '../Hashtag/Hashtag';
import { ProjectCardProps } from './ProjectCard.types';

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { name, status, ifCyclical, hashtags, shortDescription, imageSRC, alt, index } = data;
  const moduloIndex = index % 2 ? 'flex-row-reverse' : 'flex-row';
  return (
    <div className={`flex gap-24 px-28 ${moduloIndex} relative py-16`}>
      <Image
        className="flex max-h-projectImages max-w-projectImages"
        src={imageSRC}
        alt={`Project ${alt}`}
        width={588}
        height={332}
      />
      <div className="order-1 flex flex-auto flex-col items-start ">
        <header className="pb-6 text-neutral/90">
          <h2>{name}</h2>
          <StatusTag
            kind={status}
            ifCyclical={ifCyclical}
            className="text-S_regular font-semibold leading-S_regular text-primary/60 "
          />
        </header>
        <div className="flex flex-wrap gap-2 ">
          {hashtags.sort().map((hashtag, idx) => (
            <Hashtag variant={hashtag} key={`${hashtag + idx}`} />
          ))}
        </div>
        <h5 className="py-5 text-neutral/90">{shortDescription}</h5>

        <div>
          <button className="flex flex-row items-center gap-1 text-M_regular font-bold leading-M_regular text-primary/90">
            Zobacz więcej{' '}
            <Image src="/images/projects/arrow_forward_green.svg" width={20} height={20} alt="arrow icon" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
