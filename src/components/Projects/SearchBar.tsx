import Image from 'next/image';
import { useState } from 'react';

import { Button } from '../Button';
import { PALETTE_COLORS } from '../FigmaTheme';
import { Input } from '../Input';
import { StatusTag } from '../StatusTag';
import { projectStatusesList } from '../StatusTag/StatusTag.types';
import Hashtag from './Hashtag/Hashtag';
import { hashtagsList } from './Hashtag/Hashtag.types';

export const SearchBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleOnClick = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <div className="flex h-48 w-auto items-center justify-between bg-neutral/10 px-32 ">
      <Input placeholder="Nazwa projektu">
        <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
      </Input>
      <div>
        <Button
          kind="filter"
          onClick={handleOnClick}
          borderColor={isDropdownVisible ? PALETTE_COLORS['primary/60'] : undefined}
        >
          {' '}
          <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
        </Button>
        <div className="dropdownContainer">
          {isDropdownVisible ? (
            <div className="flex flex-col gap-12 rounded-2xl border-2 bg-neutral/40  p-16">
              <div className="searchByStatusContainer flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-6">
                  <h4>Status projektu</h4>
                  <div className="flex gap-6">
                    {projectStatusesList.map((projectStatus) => {
                      if (projectStatus !== 'cyclical')
                        return (
                          <Button kind="filterStatusOption" key={projectStatus} textColor="neutral/90">
                            <StatusTag
                              kind={projectStatus}
                              ifCyclical={false}
                              className="text-M_regular font-semibold leading-M_regular"
                            />
                          </Button>
                        );
                      return (
                        <Button kind="filterStatusOption" key={projectStatus}>
                          <StatusTag ifCyclical className="text-M_regular font-semibold leading-M_regular" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <button onClick={handleOnClick}>X</button>
              </div>
              <div className="searchByTagsContainer flex flex-col gap-6">
                <h4>Tagi</h4>
                <div className="flex flex-wrap gap-3">
                  {hashtagsList.map((hashtagVariant) => (
                    <Hashtag variant={hashtagVariant} key={hashtagVariant} />
                  ))}
                </div>
              </div>
              <div className="manageFiltersContainer flex justify-between">
                <p className="font-bold underline">Resetuj filtry</p>
                <Button kind="primary">Zatwierdź</Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
