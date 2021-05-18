import React, { Suspense } from "react";
import Media from "react-media";
import Loader from "../loader";

const Desktop = React.lazy(() => import("./desktop"));
const Mobile = React.lazy(() => import("./mobile"));

export default function index() {
	return (
		<Suspense fallback={<Loader />}>
			<Media
				queries={{
					small: "(max-width: 768px)",
					large: "(min-width: 769px)",
				}}
			>
				{(matches) => (
					<>
						{matches.small && (
							<>
								<Mobile />
							</>
						)}
						{matches.large && <Desktop />}
					</>
				)}
			</Media>
		</Suspense>
	);
}
