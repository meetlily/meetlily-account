'use client'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import {Button} from 'flowbite-react'
import Draggable from 'react-draggable';


type PreviewProps = {
  code: string;
  noInline: boolean;
  scope: Record<string, any>;
  showEditor?: boolean;
};

const Preview: React.FC<PreviewProps> = ({ code, noInline, scope, showEditor }) => {

  return (
    <>
     <Draggable>
    <LiveProvider code={code} scope={scope} noInline={noInline}>
      <div className='relative flex flex-row items-start justify-start mx-auto h-full'>
        {showEditor && (
        <div className={`w-full min-w-[400px] max-w-[400px] h-full flex flex-col items-start`}>
          <LiveEditor className='h-full p-0 min-w-[400px]'/>
        </div>
        )}
      
      <div className={`
        w-full
        h-full 
        flex 
        flex-col
        p-2
        ${showEditor ?'' : 'ml-0'}
      `}>
      <LiveError />
      <LivePreview contentEditable={false} draggable={true} />
      </div>
      </div>
      
    </LiveProvider>
    </Draggable>
    </>
  );
};

export default Preview;