'use client';

import { type SelectTriggerProps } from '@radix-ui/react-select';

import { useConfig } from '@/app/hooks/use-config';
import { cn } from '@/app/libs/utils';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/registry/new-york/ui/select';
import { Style, styles } from '@/registry/styles';

export function StyleSwitcher({ className }: SelectTriggerProps) {
	const [config, setConfig] = useConfig();

	return (
		<Select
			value={config.style}
			onValueChange={(value: Style['name']) =>
				setConfig({
					...config,
					style: value
				})
			}
		>
			<SelectTrigger className={cn('h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4', className)}>
				<span className="text-muted-foreground">Style: </span>
				<SelectValue placeholder="Select style" />
			</SelectTrigger>
			<SelectContent>
				{styles.map((style) => (
					<SelectItem key={style.name} value={style.name} className="text-xs">
						{style.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
