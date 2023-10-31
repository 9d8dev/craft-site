import Image from 'next/image';

// Import Your Large Text Here
import Logo from '@/public/logo.svg';
import { ArrowTopRightIcon, PersonIcon } from '@radix-ui/react-icons';

const Three = () => {
	return (
		<section className="w-full h-full relative flex flex-col justify-between bg-neutral-200 dark:bg-neutral-900 p-2 ">
			<div>
				{/* Navigation Menu */}
				<nav className="sticky top-0 text-sm uppercase">
					<ul className="flex gap-8 justify-between font-normal">
						<li>
							<a href="#" className="hover:opacity-50 transition-all">
								{/* This will be the logo */}
								Three
							</a>
						</li>
						<li>
							<a href="#" className="hover:opacity-50 transition-all">
								Templates
							</a>
						</li>
						<li>
							<a href="#" className="hover:opacity-50 transition-all">
								Platforms
							</a>
						</li>
						<li>
							<a href="#" className="hover:opacity-50 transition-all">
								Pricing
							</a>
						</li>
						<li className="flex flex-col gap-1 text-purple-600">
							<a className="flex gap-1 items-center transition-all hover:text-purple-300" href="#">
								<ArrowTopRightIcon /> Get Started
							</a>
							<a className="flex gap-1 items-center transition-all hover:text-purple-300" href="#">
								<PersonIcon /> Login
							</a>
						</li>
					</ul>
				</nav>
				{/* Large Type Logo */}
				<div>
					<h1 className="sr-only">Craft UI Components</h1>
					<Image className="invert dark:invert-0 w-full" src={Logo} alt=""></Image>
				</div>
			</div>

			{/* Large Text Section */}
			<div className="text-5xl">
				<h2>Lorem ipsum dolor sit amet.</h2>
				<h3 className="opacity-50">
					Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat.
				</h3>
			</div>
		</section>
	);
};

export default Three;
