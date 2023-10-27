import { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	navbar: {
		root: {
			base: `fixed left-0 top-0 w-full px-2 sm:px-4 z-50`,
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
				on: 'bg-cyan-500 text-white dark:text-white md:bg-transparent md:text-cyan-700',
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
			base: 'h-full mb-10 mt-10 pt-2',
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
			'mt-1 space-y-2 first:mt-0 first:border-t-0 first:pt-0 px-2 py-4 border-t dark:border-gray-900',
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
			base: 'flex flex-col rounded-sm border border-gray-200 shadow-md ',
			children: 'flex h-full flex-col justify-center gap-2 p-1',
			horizontal: {
				off: 'flex-col',
				on: 'flex-col md:max-w-xl md:flex-row'
			},
			href: 'hover:bg-gray-100 dark:hover:bg-gray-800'
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
	dropdown: {
		arrowIcon: 'ml-2 h-4 w-4 hidden',
		content: 'py-1 focus:outline-none',
		floating: {
			animation: 'transition-opacity',
			arrow: {
				base: 'absolute z-10 h-2 w-2 rotate-45',
				style: {
					dark: 'bg-gray-900 dark:bg-gray-700',
					light: 'bg-white',
					auto: 'bg-white dark:bg-gray-700'
				},
				placement: '-4px'
			},
			base: 'z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none',
			content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
			divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
			header: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
			hidden: 'invisible opacity-0',
			item: {
				container: '',
				base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
				icon: 'mr-2 h-4 w-4'
			},
			style: {
				dark: 'bg-gray-900 text-white dark:bg-gray-700',
				light: 'border border-gray-200 bg-white text-gray-900',
				auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white'
			},
			target: 'w-fit'
		},
		inlineWrapper: 'flex items-center'
	},
	button: {
		base: 'group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none',
		fullSized: 'w-full',
		color: {
			dark: 'text-white border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',
			failure:
				'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',
			gray: 'text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2',
			info: 'text-white bg-cyan-500 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-500 dark:focus:ring-cyan-800',
			light: 'text-gray-900 dark:text-white',
			purple:
				'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',
			success:
				'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',
			warning:
				'text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
			blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ',
			cyan: 'text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-500 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
			green:
				'text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',
			indigo:
				'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',
			lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',
			pink: 'text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',
			red: 'text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',
			teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
			yellow:
				'text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700'
		},
		disabled: 'cursor-not-allowed opacity-50',
		isProcessing: 'cursor-wait',
		spinnerSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
		spinnerLeftPosition: {
			xs: 'left-2',
			sm: 'left-3',
			md: 'left-4',
			lg: 'left-5',
			xl: 'left-6'
		},
		gradient: {
			cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
			failure:
				'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
			info: 'text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ',
			lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
			pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
			purple:
				'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
			success:
				'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
			teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800'
		},
		gradientDuoTone: {
			cyanToBlue:
				'text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
			greenToBlue:
				'text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
			pinkToOrange:
				'text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
			purpleToBlue:
				'text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
			purpleToPink:
				'text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
			redToYellow:
				'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
			tealToLime:
				'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700'
		},
		inner: {
			base: 'flex items-stretch items-center transition-all duration-200',
			position: {
				none: '',
				start: 'rounded-r-none',
				middle: 'rounded-none',
				end: 'rounded-l-none'
			},
			outline: 'border border-transparent',
			isProcessingPadding: {
				xs: 'pl-8',
				sm: 'pl-10',
				md: 'pl-12',
				lg: 'pl-16',
				xl: 'pl-20'
			}
		},
		label:
			'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
		outline: {
			color: {
				gray: 'border border-gray-900 dark:border-white',
				default: 'border-0',
				light: ''
			},
			off: '',
			on: 'flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
			pill: {
				off: 'rounded-md',
				on: 'rounded-full'
			}
		},
		pill: {
			off: 'rounded-lg',
			on: 'rounded-full'
		},
		size: {
			xs: 'text-xs px-2 py-1',
			sm: 'text-sm px-3 py-1.5',
			md: 'text-sm px-4 py-2',
			lg: 'text-base px-5 py-2.5',
			xl: 'text-base px-6 py-3'
		}
	},

	checkbox: {
		root: {
			base: 'h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100',
			color: {
				default:
					'focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600',
				dark: 'focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800',
				failure: 'focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900',
				gray: 'focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900',
				info: 'focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800',
				light:
					'focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900',
				purple:
					'focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600',
				success:
					'focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800',
				warning:
					'focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400',
				blue: 'dark:ring-offset-blue-700  text-blue-700',
				cyan: 'focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600',
				green:
					'focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600',
				indigo:
					'focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700',
				lime: 'focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700',
				pink: 'focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600',
				red: 'focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600',
				teal: 'focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600',
				yellow:
					'focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400'
			}
		}
	},
	fileInput: {
		root: {
			base: 'flex'
		},
		field: {
			base: 'relative w-full',
			input: {
				base: 'rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50',
				sizes: {
					sm: 'sm:text-xs',
					md: 'text-sm',
					lg: 'sm:text-md'
				},
				colors: {
					gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
					info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
					failure:
						'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
					warning:
						'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
					success:
						'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
				}
			}
		}
	},
	label: {
		root: {
			base: 'text-sm font-medium',
			disabled: 'opacity-50',
			colors: {
				default: 'text-gray-900 dark:text-white',
				info: 'text-cyan-500 dark:text-cyan-600',
				failure: 'text-red-700 dark:text-red-500',
				warning: 'text-yellow-500 dark:text-yellow-600',
				success: 'text-green-700 dark:text-green-500'
			}
		}
	},
	radio: {
		root: {
			base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600'
		}
	},
	rangeSlider: {
		root: {
			base: 'flex'
		},
		field: {
			base: 'relative w-full',
			input: {
				base: 'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
				sizes: {
					sm: 'h-1 range-sm',
					md: 'h-2',
					lg: 'h-3 range-lg'
				}
			}
		}
	},
	textInput: {
		base: 'flex',
		addon:
			'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
		field: {
			base: 'relative w-full',
			icon: {
				base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400'
			},
			rightIcon: {
				base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400'
			},
			input: {
				base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
				sizes: {
					sm: 'p-2 sm:text-xs',
					md: 'p-2.5 text-sm',
					lg: 'sm:text-md p-4'
				},
				colors: {
					gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
					info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
					failure:
						'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
					warning:
						'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
					success:
						'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
				},
				withRightIcon: {
					on: 'pr-10',
					off: ''
				},
				withIcon: {
					on: 'pl-10',
					off: ''
				},
				withAddon: {
					on: 'rounded-r-lg',
					off: 'rounded-lg'
				},
				withShadow: {
					on: 'shadow-sm dark:shadow-sm-light',
					off: ''
				}
			}
		}
	},
	select: {
		base: 'flex',
		addon:
			'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
		field: {
			base: 'relative w-full',
			icon: {
				base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400'
			}
		}
	},
	textarea: {
		base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm',
		colors: {
			gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
			info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
			failure:
				'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
			warning:
				'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
			success:
				'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500'
		},
		withShadow: {
			on: 'shadow-sm dark:shadow-sm-light',
			off: ''
		}
	},
	toggleSwitch: {
		root: {
			base: 'group relative flex items-center rounded-lg focus:outline-none',
			active: {
				on: 'cursor-pointer',
				off: 'cursor-not-allowed opacity-50'
			},
			label: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'
		},
		toggle: {
			base: 'toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25',
			checked: {
				on: 'after:translate-x-full after:border-white',
				off: 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
				color: {
					blue: ' bg-cyan-700 border-cyan-700',
					dark: 'bg-dark-700 border-dark-900',
					failure: 'bg-red-700 border-red-900',
					gray: 'bg-gray-500 border-gray-600',
					green: 'bg-green-600 border-green-700',
					light: 'bg-light-700 border-light-900',
					red: 'bg-red-700 border-red-900',
					purple: 'bg-purple-700 border-purple-900',
					success: 'bg-green-500 border-green-500',
					yellow: 'bg-yellow-400 border-yellow-400',
					warning: 'bg-yellow-600 border-yellow-600',
					cyan: 'bg-cyan-500 border-cyan-500',
					lime: 'bg-lime-400 border-lime-400',
					indigo: 'bg-indigo-400 border-indigo-400',
					teal: 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4',
					info: 'bg-cyan-600 border-cyan-600',
					pink: 'bg-pink-600 border-pink-600'
				}
			},
			sizes: {
				sm: 'w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4',
				md: 'w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5',
				lg: 'w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6'
			}
		}
	}
};

export default customTheme;
