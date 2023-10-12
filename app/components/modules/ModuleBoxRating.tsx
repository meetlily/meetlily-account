'use client';

import { Rating } from 'flowbite-react';

interface ModuleBoxRatingProps {}

const ModuleBoxRating: React.FC<ModuleBoxRatingProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col">
				<Rating>
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star filled={false} />
				</Rating>
			</div>
		</>
	);
};

export default ModuleBoxRating;
