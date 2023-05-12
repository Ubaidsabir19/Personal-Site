import "../styles/globals.css";

import Sidebar from "./component/slidebar";
import { personalData } from "../Data/p-data";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />

			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={personalData} />
				<main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}