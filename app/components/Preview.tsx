'use client'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {Button} from 'flowbite-react'
import Draggable from 'react-draggable';
import { Highlight, themes } from "prism-react-renderer"
import styles from 'styles.module.css'

type PreviewProps = {
  code: string;
  noInline: boolean;
  scope: Record<string, any>;
  showEditor?: boolean;
  disabled?: boolean;
};

const Preview: React.FC<PreviewProps> = ({ code, noInline, scope, showEditor, disabled }) => {

  return (
    <>

    <LiveProvider         
 
      language="tsx"
      code={code}
      scope={scope}
      noInline={noInline}
      disabled={disabled}
    >
      <div className='relative flex flex-row items-start justify-center w-full h-full'>
        {showEditor && (
        <div className={`w-full max-w-xl h-full flex flex-col items-start justify-start bg-gray-100`}>
          <LiveEditor  className='fixed h-full w-full max-w-xl overflow-y-auto bg-gray-800'/>
        </div>
        )}
      <div className={`
        w-full
        h-full 
        flex 
        flex-col
        items-center 
        justify-items-center
      `}>
      <LiveError />
      <LivePreview contentEditable={false} draggable={true} />
      </div>
      </div>
      
    </LiveProvider>

    </>
  );
};

export default Preview;