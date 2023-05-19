import Image from 'next/image';

import NumberedIcon1 from '@/common/assets/icons/numbered_icon_1.svg';
import NumberedIcon2 from '@/common/assets/icons/numbered_icon_2.svg';

import { Paragraph } from '../Paragraph/Paragraph';

export const HowToContributeSection = () => (
  <div className="bg-neutral/10">
    <div className="mx-auto max-w-screen-xl bg-neutral/20 py-8 px-4 lg:flex lg:bg-neutral/10 lg:py-16">
      <div>
        <h2 className="mb-6">Jak zostać autorem?</h2>
        <Paragraph size="large">
          Zarówno teksty, projekty, jak i materiały graficzne może przysłać do nas każdy student, niezależnie od tego,
          czy jest związany z Politechniką Wrocławską czy nie :)
        </Paragraph>
      </div>
      <div className="mx-auto mt-12 max-w-screen-sm">
        <div className="my-2 flex items-center justify-center">
          <Image src={NumberedIcon1} width={35} height={35} alt="numbered icon" />
          <Paragraph size="large" className="ml-4">
            Wybór tematu związanego z motywem przewodnim; zgłoszenie pracy redakcji czasopisma.
          </Paragraph>
        </div>
        <div className="my-2 flex items-center justify-center">
          <Image src={NumberedIcon2} width={35} height={35} alt="numbered icon" />
          <Paragraph size="large" className="ml-4">
            Po zatwierdzeniu tematu - przygotowanie i dostarczenie materiałów w określonym terminie na adres mailowy
            redakcji.
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
);
