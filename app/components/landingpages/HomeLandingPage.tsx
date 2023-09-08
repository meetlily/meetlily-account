'use client'
import Image from "next/image";
import IconComponent from "../icons/IconComponent";
import { SafeUser } from "@/app/types";
import AppIcons from "../icons/AppIcons";
import featuresData from "@/data/features.json" assert { type: "json" };
import blogPosts from "@/data/blogs.json" assert { type: "json" };
import footerNavigation from "@/data/footer.json" assert { type: "json" };
import { IconType } from "react-icons";
import Icons from "../icons/Icons";
import Link from "next/link";


interface HomeLandingPageProps {
    currentUser?: SafeUser | null,
    icon?: IconType;
}
const HomeLandingPage: React.FC<HomeLandingPageProps> = ({
    currentUser,
    icon: Icon
}) => {

    const navigation = [
        { name: 'About', href: '#' }
    ]
    const features = featuresData.map((feature)=>{
        const icon = AppIcons[feature.icon];
        const newFeature = {
            ...feature,
            icon
        }
        return newFeature;
    });
    const socialIcons = footerNavigation.social.map((soc)=>{
        const icon = AppIcons[soc.icon];
        const newSocIcon = {
            ...soc,
            icon
        }
        return newSocIcon;
    });
    return (
        <>
        <div className="bg-transparent">
            <div className="relative overflow-hidden">
            <main>
                <div className="pt-10 bg-gray-800 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center text-white bg-black rounded-full p-2  pr-1 sm:text-base lg:text-sm xl:text-base hover:text-cyan-300 shadow-sm shadow-gray-700 hover:shadow-sm hover:shadow-black hover:bg-gray-900 transition h-10 min-w-[340px] lg:min-w-[400px]"
                        >
                            <span className="px-4 py-1 ml-0.3  text-white text-xs md:text-sm leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                            Get Started
                            </span>
                            <span className="ml-2 mr-2 text-xs md:text-sm">Login or create your account now</span>
                            <IconComponent class_name="h-4 w-5 py-0" aria-hidden="true" iconName={"chevNext"} />
                        </Link>
                        <h1 className="mt-8 text-3xl tracking-tight font-extrabold text-white sm:mt-8 sm:text-4xl lg:mt-6 xl:text-5xl">
                            <span className="block">Building the Future</span>
                            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                            AI and ML Development
                            </span>
                        </h1>
                        <p className="text-base text-gray-300 sm:text-sm lg:text-md xl:text-lg">
                        Leverage the power of artificial intelligence and machine learning to unlock valuable insights and drive intelligent decision-making in your business processes.
                        </p>
                        <div className="mt-10 sm:mt-12">
                            <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                            <div className="sm:flex">
                                <div className="min-w-0 flex-1">
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                />
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                >
                                    Subscribe
                                </button>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                            Our newsletter covers a wide range of topics, including AI, machine learning, web and mobile development, cloud computing, and much more. Stay ahead of the curve with our expert articles, tutorials, case studies, and industry news. By providing your email, you agree to
                                our{' '}
                                <Link href="#" className="font-medium text-white">
                                terms of service
                                </Link>
                                .
                            </p>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                        <Image
                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                            alt=""
                            width={800} height={800}                        
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Feature section with screenshot */}
                <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-24">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                    <div>
                    <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Serverless</h2>
                    <p className="mt-2 mb-5 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Key Features and Benefits
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Sleek and Modern Design: Our dashboard features a sleek and modern design that is visually appealing and enhances user experience. With its clean layout and intuitive navigation, you can effortlessly access and interact with your data.
                    </p>
                    </div>
                    <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                    <Image
                        className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                        alt=""
                        width={300} height={300} 
                    />
                    </div>
                </div>
                </div>
    
                {/* Feature section with grid */}
                <div className="relative py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Real-Time Data Visualization
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                    Instantly visualize your data with our real-time charts, graphs, and visualizations. Easily understand trends, patterns, and correlations, empowering you to make data-driven decisions.
                    </p>
                    <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                        <div key={feature.name} className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                            <div className="-mt-6">
                                <div>
                                <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                    
                                    <IconComponent customIcon={feature.icon} color="white"/>
                                </span>
                                </div>
                                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Testimonial section */}
                <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                        <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <Image
                            className="object-cover lg:h-full lg:w-full"
                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                            alt=""
                            width={800}
                            height={800}                        
                            />
                        </div>
                    </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                        <blockquote>
                        <div>
                            <p className="mt-6 text-2xl font-medium text-white">
                            Tailor your dashboard to your specific needs with customizable widgets. Choose from a variety of pre-built widgets or create your own, allowing you to focus on the metrics and data that matter most to your business.
                            </p>
                        </div>
                        <footer className="mt-6">
                            <p className="text-white">Judith Black</p>
                            <p className="text-cyan-100">CEO at PureInsights</p>
                        </footer>
                        </blockquote>
                    </div>
                    </div>
                </div>
                </div>
    
                {/* Blog section */}
                <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
                <div className="relative">
                    <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Learn</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Data Integration and Connectivity
                    </p>
                    <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                    Seamlessly integrate your data from various sources, such as databases, APIs, and third-party applications. With our robust connectivity options, you can centralize your data and view it all in one place.
                    </p>
                    </div>
                    <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <Image className="h-48 w-full object-cover" src={post.imageUrl} alt="" width={300}
                        height={300}/>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                            <p className="text-sm font-medium text-cyan-600">
                                <Link href={post.category.href} className="hover:underline">
                                {post.category.name}
                                </Link>
                            </p>
                            <Link href={post.href} className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                            </Link>
                            </div>
                            <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                                <Link href={post.author.href}>
                                <Image width={300} height={300} className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
                                </Link>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                <Link href={post.author.href} className="hover:underline">
                                    {post.author.name}
                                </Link>
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={post.datetime}>{post.date}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readingLength} read</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
    
                {/* CTA Section */}
                <div className="relative bg-gray-800">
                <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <Image
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                    alt=""
                    width={800} height={800} 
                    />
                    <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                    />
                </div>
                <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Responsive Design
                    </h2>
                    <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                    <p className="mt-3 text-lg text-gray-300">
                    Access your dashboard anytime, anywhere, and on any device. Our responsive design ensures that you have a seamless user experience across desktops, laptops, tablets, and mobile devices.
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md text-gray-900 bg-white hover:bg-gray-50"
                        >
                            Visit the help center
                            <IconComponent iconName="help" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            <footer className="bg-gray-50" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                Footer
                </h2>
                <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                    <Image
                        className="h-20"
                        src="https://meetlily.net/logo/black.svg"
                        alt="Meetlily"
                        width={200} height={200} 
                    />
                    <p className="text-gray-500 text-base">
                        Making the world a better place through constructing elegant hierarchies.
                    </p>
                    <div className="flex space-x-6">
                        {footerNavigation.social.map((item) => (
                        <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            
                            <IconComponent iconName={item.icon} />
                        </Link>
                        ))}
                    </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            {footerNavigation.solutions.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            {footerNavigation.support.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            {footerNavigation.company.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                        <ul role="list" className="mt-4 space-y-4">
                            {footerNavigation.legal.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 py-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Meetlily Advertising |  All rights reserved.</p>
                </div>
                </div>
            </footer>
            </div>
        </div>
      </>
    )
  }

  export default HomeLandingPage;