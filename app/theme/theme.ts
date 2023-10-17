import { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	navbar: {
		root: {
			base: 'fixed left-0 top-0 w-full bg-gray-800 px-2 dark:border-b dark:border-gray-600 dark:bg-gray-800 sm:px-4 z-50  ',
			rounded: {
				on: 'rounded',
				off: ''
			},
			bordered: {
				on: 'border',
				off: ''
			},
			inner: {
				base: 'mx-auto flex flex-wrap items-center justify-between',
				fluid: {
					on: '',
					off: ''
				}
			}
		},
		brand: {
			base: 'flex items-center'
		},
		collapse: {
			base: 'w-full md:block md:w-auto',
			list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
			hidden: {
				on: 'hidden',
				off: ''
			}
		},
		link: {
			base: 'block py-2 pr-4 pl-3 md:p-0',
			active: {
				on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
				off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
			},
			disabled: {
				on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
				off: ''
			}
		},
		toggle: {
			base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
			icon: 'h-6 w-6 shrink-0'
		}
	},
	sidebar: {
		root: {
			base: 'h-full mb-10',
			inner: 'h-full rounded-0 dark:text-white dark:bg-gray-900'
		},
		collapse: {
			button:
				'group flex w-full items-center p-2 text-base font-normal text-gray-800 transition duration-75 dark:text-white',
			icon: {
				base: 'h-6 w-6 text-gray-800 transition duration-75 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-white',
				open: {
					off: '',
					on: ''
				}
			},
			label: {
				base: 'ml-3 flex-1 whitespace-nowrap text-left',
				icon: {
					base: 'h-6 w-6 transition ease-in-out delay-0',
					open: {
						on: 'rotate-180',
						off: ''
					}
				}
			},
			list: 'space-y-2 py-2'
		},
		cta: {
			base: 'mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-800',
			color: {
				blue: 'bg-cyan-50 dark:bg-cyan-900',
				dark: 'bg-dark-50 dark:bg-dark-900',
				failure: 'bg-red-50 dark:bg-red-900',
				gray: 'bg-alternative-50 dark:bg-alternative-900',
				green: 'bg-green-50 dark:bg-green-900',
				light: 'bg-light-50 dark:bg-light-900',
				red: 'bg-red-50 dark:bg-red-900',
				purple: 'bg-purple-50 dark:bg-purple-900',
				success: 'bg-green-50 dark:bg-green-900',
				yellow: 'bg-yellow-50 dark:bg-yellow-900',
				warning: 'bg-yellow-50 dark:bg-yellow-900'
			}
		},
		item: {
			base: 'flex items-center justify-center p-2 text-base font-normal text-gray-800 cursor-pointer hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500',
			active: 'bg-gray-100 dark:bg-gray-700',
			collapsed: {
				insideCollapse: 'group w-full pl-8 transition duration-75',
				noIcon: 'font-bold'
			},
			content: {
				base: 'px-3 flex-1 whitespace-nowrap'
			},
			icon: {
				base: 'h-6 w-6 flex-shrink-0 text-gray-800 transition duration-75 hover:text-cyan-500 group-hover:text-cyan-500 dark:text-gray-400 dark:group-hover:text-cyan-500',
				active: 'text-gray-700 dark:text-gray-100'
			},
			label: '',
			listItem: ''
		},
		items: '',
		itemGroup:
			'mt-1 space-y-2 first:mt-0 first:border-t-0 first:pt-0 px-2 py-4 border-t dark:border-gray-700',
		logo: {
			base: 'mb-5 flex items-center pl-2.5',
			collapsed: {
				on: 'hidden',
				off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white'
			},
			img: 'mr-3 h-6 sm:h-7'
		}
	},
	card: {
		root: {
			base: 'flex flex-col rounded-sm border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
			children: 'flex h-full flex-col justify-center gap-4 p-2',
			horizontal: {
				off: 'flex-col',
				on: 'flex-col md:max-w-xl md:flex-row'
			},
			href: 'hover:bg-gray-100 dark:hover:bg-gray-700'
		},
		img: {
			base: '',
			horizontal: {
				off: 'rounded-t-lg',
				on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
			}
		}
	},
	modal: {
		root: {
			base: 'fixed top-0 right-0 left-0 z-50 h-modal rounded-lg h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
			show: {
				on: 'flex bg-gray-900 bg-opacity-70 dark:bg-opacity-90',
				off: 'hidden'
			},
			sizes: {
				sm: 'max-w-sm',
				md: 'max-w-md',
				lg: 'max-w-lg',
				xl: 'max-w-xl',
				'2xl': 'max-w-2xl',
				'3xl': 'max-w-3xl',
				'4xl': 'max-w-4xl',
				'5xl': 'max-w-5xl',
				'6xl': 'max-w-6xl',
				'7xl': 'max-w-7xl'
			},
			positions: {
				'top-left': 'items-start justify-start',
				'top-center': 'items-start justify-center',
				'top-right': 'items-start justify-end',
				'center-left': 'items-center justify-start',
				center: 'items-center justify-center',
				'center-right': 'items-center justify-end',
				'bottom-right': 'items-end justify-end',
				'bottom-center': 'items-end justify-center',
				'bottom-left': 'items-end justify-start'
			}
		},
		content: {
			base: 'relative h-full w-full p-4 md:h-auto ',
			inner: 'relative bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh] rounded-lg'
		},
		body: {
			base: 'p-0 flex-1 overflow-auto bg-gray-100 dark:bg-gray-800  ',
			popup: 'pt-0'
		},
		header: {
			base: 'flex items-start justify-between dark:border-gray-600 border-b px-4 py-3',
			popup: 'p-2 border-b-0',
			title: 'text-xl font-medium text-gray-900 dark:text-white',
			close: {
				base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
				icon: 'h-5 w-5'
			}
		},
		footer: {
			base: 'flex items-center space-x-2 rounded-b border-gray-200 px-4 py-3 dark:border-gray-700',
			popup: 'border-t'
		}
	},
	accordion: {
		root: {
			base: 'divide-y text-sm divide-gray-200 overflow-y-scroll border-gray-200 dark:divide-gray-700 dark:border-gray-700',
			flush: {
				off: 'border',
				on: 'border-b'
			}
		},
		content: {
			base: 'py-2 px-2 dark:bg-gray-900 overflow-y-auto'
		},
		title: {
			arrow: {
				base: 'h-6 w-6 shrink-0',
				open: {
					off: '',
					on: 'rotate-180'
				}
			},
			base: 'flex w-full items-center justify-between py-2 px-2 text-left font-medium text-gray-500 dark:text-gray-400',
			flush: {
				off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
				on: 'bg-transparent dark:bg-transparent'
			},
			heading: '',
			open: {
				off: '',
				on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white'
			}
		}
	},
	button: {
		color: {
			primary: 'bg-cyan-500 hover:bg-cyan-600'
		}
	}
};

export default customTheme;
