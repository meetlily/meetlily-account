import { Boundary } from '@/app/components/Boundary';
import { readJsonFile, writeJsonToFile } from './utils/utils';


export default function NotFound() {
    const jsonR = readJsonFile('./data/configuration.json')
    return (
        <>
        
        <Boundary labels={['not-found.tsx']} color="pink">
        <div className="text-meetlily-primary space-y-4">
            <h2 className="text-lg font-bold">Not Found</h2>

            <p className="text-sm">Could not find requested resource</p>
        </div>
        </Boundary>
        </>
    );
}