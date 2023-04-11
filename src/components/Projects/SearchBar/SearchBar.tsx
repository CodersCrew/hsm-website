import Image from 'next/image';
import { useEffect, useState } from 'react';

import { STATUS_OPTIONS } from '@/components/StatusTag/StatusTag.utils';
import { ProjectContextValues, useProjectPageContext } from '@/context/projectPage.context';

import { Button } from '../../Button';
import { PALETTE_COLORS } from '../../FigmaTheme';
import { Input } from '../../Input';
import { StatusTag } from '../../StatusTag';
import { ProjectStatus, projectStatusesList } from '../../StatusTag/StatusTag.types';
import Hashtag from '../Hashtag/Hashtag';
import { hashtagsList, HashtagVariant } from '../Hashtag/Hashtag.types';

type IfIsInTheArrayProps = { array: string[]; item: string };

export const SearchBar = () => {
  const { filter } = useProjectPageContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [tempStatusFilterArray, setTempStatusFilterArray] = useState<ProjectContextValues['filter']['statuses']>([]);
  const [tempHashtagFilterArray, setTempHashtagFilterArray] = useState<ProjectContextValues['filter']['hashtags']>([]);

  const handleOnClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setTempHashtagFilterArray([]);
    setTempStatusFilterArray([]);
  };
  const handleFiltersSelect = () => {
    setIsDropdownVisible(!isDropdownVisible);
    filter.setHashtags(tempHashtagFilterArray);
    filter.setStatuses(tempStatusFilterArray);
  };
  const handleFiltersReset = () => {
    filter.setHashtags([]);
    filter.setStatuses([]);
    setTempHashtagFilterArray([]);
    setTempStatusFilterArray([]);
  };
  const handleHashtagFilter = (hashtag: HashtagVariant) => {
    if (tempHashtagFilterArray.find((contextHash) => contextHash === hashtag) || !(hashtag satisfies HashtagVariant))
      return;
    setTempHashtagFilterArray([...tempHashtagFilterArray, hashtag]);
  };
  const handleStatusesFilter = (status: ProjectStatus) => {
    if (tempStatusFilterArray.find((contextStatus) => contextStatus === status) || !(status satisfies ProjectStatus))
      return;
    setTempStatusFilterArray([...tempStatusFilterArray, status]);
  };
  const handleCancelHashtagFilter = (hashtag: HashtagVariant) =>
    setTempHashtagFilterArray([...tempHashtagFilterArray.filter((item) => item !== hashtag)]);
  const handleCancelStatusFilter = (status: ProjectStatus) =>
    setTempStatusFilterArray([...tempStatusFilterArray.filter((item) => item !== status)]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const ifIsInTheArray = ({ array, item }: IfIsInTheArrayProps) => array.find((statusFilter) => statusFilter === item);

  return (
    <div className={`flex h-48 w-auto items-center justify-between bg-${PALETTE_COLORS['neutral/10']} px-32 `}>
      <Input placeholder="Nazwa projektu">
        <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
      </Input>
      <div className="relative">
        <Button
          kind="filter"
          onClick={handleOnClick}
          borderColor={isDropdownVisible ? PALETTE_COLORS['primary/60'] : undefined}
        >
          {' '}
          <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
        </Button>
        <div className="dropdownContainer absolute -right-1/4">
          {isDropdownVisible ? (
            <div
              className={`m-6 flex w-filterDropdown flex-col gap-12 rounded-2xl bg-${PALETTE_COLORS.filterDropBckgColor} p-16 shadow-allPopupAndModals`}
            >
              <div className="searchByStatusContainer flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-6">
                  <h4>Status projektu</h4>
                  <div className="flex gap-6">
                    {projectStatusesList.map((projectStatus) => {
                      if (projectStatus !== STATUS_OPTIONS.cyclical)
                        return (
                          <Button
                            onClick={(event) => handleStatusesFilter((event as any).target.innerText)}
                            kind="filterStatusOption"
                            key={projectStatus}
                            textColor={`${PALETTE_COLORS['neutral/90']}`}
                            className="flex items-center justify-center"
                          >
                            <StatusTag
                              kind={projectStatus}
                              ifCyclical={false}
                              className="text-M_regular font-semibold leading-M_regular"
                            />
                            {ifIsInTheArray({ array: tempStatusFilterArray, item: projectStatus }) ||
                            ifIsInTheArray({ array: filter.statuses, item: projectStatus }) ? (
                              <Image
                                src="/images/projects/close.svg"
                                alt={`Delete ${projectStatus} status filter`}
                                width={20}
                                height={20}
                                onClick={() => handleCancelStatusFilter(projectStatus)}
                              />
                            ) : null}
                          </Button>
                        );
                      return (
                        <Button
                          onClick={(event) => handleStatusesFilter((event as any).target.innerText)}
                          kind="filterStatusOption"
                          borderColor={`${PALETTE_COLORS['primary/20']}`}
                          key={projectStatus}
                          className="flex items-center justify-center"
                        >
                          <StatusTag ifCyclical className="text-M_regular font-semibold leading-M_regular" />
                          {ifIsInTheArray({ array: tempStatusFilterArray, item: STATUS_OPTIONS.cyclical }) ||
                          ifIsInTheArray({ array: filter.statuses, item: STATUS_OPTIONS.cyclical }) ? (
                            <Image
                              src="/images/projects/close.svg"
                              alt={`Delete ${projectStatus} status filter`}
                              width={20}
                              height={20}
                              onClick={() => handleCancelStatusFilter(STATUS_OPTIONS.cyclical)}
                            />
                          ) : null}
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
                    <button
                      key={hashtagVariant}
                      onClick={(event) => handleHashtagFilter((event as any).target.innerText)}
                    >
                      <Hashtag variant={hashtagVariant} borderColor={`${PALETTE_COLORS['primary/40']}`}>
                        {ifIsInTheArray({ array: tempHashtagFilterArray, item: hashtagVariant }) ||
                        ifIsInTheArray({ array: filter.hashtags, item: hashtagVariant }) ? (
                          <Image
                            src="/images/projects/close.svg"
                            alt={`Delete ${hashtagVariant} status filter`}
                            width={20}
                            height={20}
                            onClick={() => handleCancelHashtagFilter(hashtagVariant)}
                          />
                        ) : null}
                      </Hashtag>
                    </button>
                  ))}
                </div>
              </div>
              <div className="manageFiltersContainer flex justify-between">
                <button onClick={handleFiltersReset}>
                  <p className="font-bold underline">Resetuj filtry</p>
                </button>
                <Button kind="primary" textColor={`${PALETTE_COLORS['neutral/20']}`} onClick={handleFiltersSelect}>
                  Zatwierdź
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
