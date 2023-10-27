'use client';

import { CaretSortIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { useEffect } from 'react';

import { cn } from '@/app/libs/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york/ui/avatar';
import { Button } from '@/registry/new-york/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from '@/registry/new-york/ui/command';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/registry/new-york/ui/dialog';
import { Input } from '@/registry/new-york/ui/input';
import { Label } from '@/registry/new-york/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/registry/new-york/ui/select';

const groups = [
	{
		label: 'Personal Account',
		teams: [
			{
				label: 'Alicia Koch',
				value: 'personal'
			}
		]
	},
	{
		label: 'Organizations',
		organization: []
	}
];

type Team = (typeof groups)[number]['teams'][];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface TeamSwitcherProps extends PopoverTriggerProps {
	currentUser: any;
	className?: any;
}

export default function TeamSwitcher({ currentUser, className }: TeamSwitcherProps) {
	const [open, setOpen] = React.useState(false);
	const [showNewOrgDialog, setShowNewOrgDialog] = React.useState(false);
	const [selectedOrganization, setSelectedOrganization] = React.useState<any>();

	useEffect(() => {
		Object.keys(currentUser.Default).map((d) => {
			if (d === 'data') {
				const cOrg = currentUser.Organization.find(
					(obj: any) => obj.id === currentUser.Default[d].organizationId
				);

				setSelectedOrganization(cOrg);
			}
		});
	}, [currentUser]);

	return (
		<Dialog open={showNewOrgDialog} onOpenChange={setShowNewOrgDialog}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						role="combobox"
						aria-expanded={open}
						aria-label="Select a team"
						className={cn('w-[200px] border dark:border-gray-700 justify-between', className)}
					>
						<Avatar className="mr-2 h-5 w-5">
							<AvatarImage src={`${currentUser.image}`} alt={selectedOrganization?.name} />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						{selectedOrganization?.name}
						<CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0 border dark:border-gray-700 ">
					<Command>
						<CommandList>
							<CommandInput placeholder="Search organization..." className="outline-none" />
							<CommandEmpty>No organization found.</CommandEmpty>
							{currentUser.Organization.map((group: any) => (
								<CommandGroup key={group.id} heading={'Organizations'}>
									<CommandItem
										onSelect={() => {
											setSelectedOrganization(group);
											setOpen(false);
										}}
										className="text-sm"
									>
										<Avatar className="mr-2 h-5 w-5">
											<AvatarImage src={`${group.logo}`} alt={group.name} className="grayscale" />
											<AvatarFallback>{group.slug}</AvatarFallback>
										</Avatar>
										{group.name}
										{/* <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedTeam.name === group.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    /> */}
									</CommandItem>
								</CommandGroup>
							))}
						</CommandList>
						<CommandSeparator />
						<CommandList>
							<CommandGroup>
								<DialogTrigger asChild>
									<CommandItem
										onSelect={() => {
											setOpen(false);
											setShowNewOrgDialog(true);
										}}
									>
										<PlusCircledIcon className="mr-2 h-5 w-5" />
										Create Organization
									</CommandItem>
								</DialogTrigger>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Organization</DialogTitle>
					<DialogDescription>
						Add a new organization to manage applications and users.
					</DialogDescription>
				</DialogHeader>
				<div>
					<div className="space-y-4 py-2 pb-4">
						<div className="space-y-2">
							<Label htmlFor="name">Organization name</Label>
							<Input id="name" placeholder="Your Company Name." />
						</div>
						<div className="space-y-2">
							<Label htmlFor="plan">Subscription plan</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a plan" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="free">
										<span className="font-medium">Free</span> -{' '}
										<span className="text-muted-foreground">Trial for two weeks</span>
									</SelectItem>
									<SelectItem value="pro">
										<span className="font-medium">Pro</span> -{' '}
										<span className="text-muted-foreground">$9/month per user</span>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={() => setShowNewOrgDialog(false)}>Cancel</Button>
					<Button type="submit">Continue</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
