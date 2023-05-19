import Image from 'next/image';
import { useState } from 'react';

import { Paragraph } from '@/components/Paragraph/Paragraph';
import { STATUS_OPTIONS } from '@/components/StatusTag/StatusTag.utils';
import { ProjectContextValues, useProjectPageContext } from '@/context/projectPage.context';

import { Button } from '../../Button';
import { Input } from '../../Input';
import { StatusTag } from '../../StatusTag';
import { ProjectStatus, projectStatusesList } from '../../StatusTag/StatusTag.types';
import Hashtag from '../Hashtag/Hashtag';
import { hashtagsList, HashtagVariant } from '../Hashtag/Hashtag.types';
import { FILTER_OPTIONS_VARIANTS, ifIsInTheArray } from './SearchBar.utils';

export const SearchBar = () => {
  const { setInputFilter, setFilterHashtags, setFilterStatuses, filterHashtags, filterStatuses } =
    useProjectPageContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [tempStatusFilterArray, setTempStatusFilterArray] = useState<ProjectContextValues['filterStatuses']>([]);
  const [tempHashtagFilterArray, setTempHashtagFilterArray] = useState<ProjectContextValues['filterHashtags']>([]);

  const handleOnClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setTempHashtagFilterArray(filterHashtags);
    setTempStatusFilterArray(filterStatuses);
  };
  const handleFiltersSelect = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setFilterHashtags(tempHashtagFilterArray);
    setFilterStatuses(tempStatusFilterArray);
    setTempHashtagFilterArray([]);
    setTempStatusFilterArray([]);
  };
  const handleFiltersReset = () => {
    setFilterHashtags([]);
    setFilterStatuses([]);
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
    setTempHashtagFilterArray(tempHashtagFilterArray.filter((item) => item !== hashtag));
  const handleCancelStatusFilter = (status: ProjectStatus) =>
    setTempStatusFilterArray(tempStatusFilterArray.filter((item) => item !== status));

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputFilter(e.currentTarget.value);

  return (
    <div className="flex h-48 w-auto items-center justify-between gap-4 bg-neutral/10 px-1 lg:gap-0 lg:px-32 ">
      <Input placeholder="Nazwa projektu" onChange={handleInputOnChange}>
        <Image width={24} height={24} src="/images/projects/search.svg" alt="Search input icon" />
      </Input>
      <div className="relative">
        <Button kind="filter" onClick={handleOnClick} borderColor={isDropdownVisible ? 'primary/60' : undefined}>
          {' '}
          <Image width={24} height={24} src="/images/projects/filterIcon.svg" alt="Filter button icon" /> Filtry
        </Button>
        <div className="dropdownContainer absolute right-0 z-20 lg:-right-1/4">
          {isDropdownVisible ? (
            <div className="m-7 flex min-w-dropdownSD flex-col gap-12 rounded-2xl bg-filterDropBckgColor p-8 shadow-allPopupAndModals lg:w-filterDropdown lg:p-16">
              <div className="searchByStatusContainer flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-6">
                  <h4>Status projektu</h4>
                  <div className="flex flex-wrap gap-4 lg:gap-6">
                    {[...projectStatusesList].sort().map((projectStatus) => {
                      const ifFilterSelected = ifIsInTheArray({ array: tempStatusFilterArray, item: projectStatus });

                      const { textColor, borderColor, bgColor } =
                        FILTER_OPTIONS_VARIANTS.statuses[ifFilterSelected ? 'selected' : 'notSelected'];
                      if (projectStatus !== STATUS_OPTIONS.cykliczny)
                        return (
                          <button onClick={() => handleStatusesFilter(projectStatus)} key={projectStatus}>
                            <StatusTag
                              kind={projectStatus}
                              ifCyclical={false}
                              textColor={textColor}
                              borderColor={borderColor}
                              bgColor={bgColor}
                              className="flex items-center justify-center rounded-full py-2 px-4 "
                            >
                              {ifFilterSelected ? (
                                <Image
                                  src="/images/projects/close.svg"
                                  alt={`Delete ${projectStatus} status filter`}
                                  width={20}
                                  height={20}
                                  onClick={() => handleCancelStatusFilter(projectStatus)}
                                />
                              ) : null}
                            </StatusTag>
                          </button>
                        );
                      return (
                        <button onClick={() => handleStatusesFilter(projectStatus)} key={projectStatus}>
                          <StatusTag
                            ifCyclical
                            textColor={textColor}
                            borderColor={borderColor}
                            bgColor={bgColor}
                            className="flex items-center justify-center rounded-full py-2 px-4 "
                          >
                            {ifFilterSelected ? (
                              <Image
                                src="/images/projects/close.svg"
                                alt={`Delete ${projectStatus} status filter`}
                                width={20}
                                height={20}
                                onClick={() => handleCancelStatusFilter(STATUS_OPTIONS.cykliczny)}
                              />
                            ) : null}
                          </StatusTag>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button onClick={handleOnClick}>X</button>
              </div>
              <div className="searchByTagsContainer flex flex-col gap-6">
                <h4>Tagi</h4>
                <div className="flex flex-wrap gap-3 ">
                  {[...hashtagsList].sort().map((hashtagVariant) => {
                    const ifFilterSelected = ifIsInTheArray({ array: tempHashtagFilterArray, item: hashtagVariant });

                    const { textColor, borderColor, bgColor } =
                      FILTER_OPTIONS_VARIANTS.hashtags[ifFilterSelected ? 'selected' : 'notSelected'];
                    return (
                      <button key={hashtagVariant}>
                        <Hashtag
                          variant={hashtagVariant}
                          textColor={textColor}
                          borderColor={borderColor}
                          bgColor={bgColor}
                          onClick={() => handleHashtagFilter(hashtagVariant)}
                        >
                          {ifFilterSelected ? (
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
                    );
                  })}
                </div>
              </div>
              <div className="manageFiltersContainer flex justify-between">
                <button onClick={handleFiltersReset}>
                  <Paragraph textBold="bold" className="underline">
                    Resetuj filtry
                  </Paragraph>
                </button>
                <Button kind="primary" textColor="neutral/20" onClick={handleFiltersSelect}>
                  <Paragraph> Zatwierdź</Paragraph>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
