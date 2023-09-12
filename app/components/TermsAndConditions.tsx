import React from 'react';

const TermsAndConditions = () => (
    <>
  <div className='flex flex-col'>
    <ul className='gap-4 font-light'>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 mt-0 font-semibold'>Acceptance</strong> By using Meetlily&apos;s software, you agree to these terms. If you disagree, don&apos;t use the software.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>License</strong> Meetlily grants you a non-exclusive, non-transferable license for personal or business use. No distribution, sale, or transfer to third parties.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Intellectual Property</strong> All rights in the software are owned by Meetlily. No copying, modification, or reverse engineering.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Updates</strong> Meetlily may update or change the software anytime without notice. This may affect your use.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Warranties</strong> The software is provided &lsquo;as is&lsquo; without any warranties. Meetlily doesn&apos;t warrant that the software will meet your requirements or be error-free.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Liability</strong> Meetlily isn&apos;t liable for any damages arising from the use or inability to use the software.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Termination</strong> Meetlily may terminate your license anytime for any reason. On termination, you must stop using the software.
      </li>
      <li className="flex flex-col">
        <strong className='leading-3 my-4 font-semibold'>Governing Law</strong> These terms are governed by the laws of Meetlily&apos;s jurisdiction.
      </li>
    </ul>
    <div className='flex flex-col my-4 pt-4 italic'>By using the software, you agree to these terms.</div>
  </div>
  </>
);

export default TermsAndConditions;