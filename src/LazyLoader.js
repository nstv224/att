import React, { PureComponent, Suspense } from "react";
import Loader from "./loader.js";

export default function lazyLoader(WrappedComponent) {
	return class Wrapped extends PureComponent {
		render() {
			return (
				<Suspense fallback={<Loader />}>
					<WrappedComponent {...this.props} />
				</Suspense>
			);
		}
	};
}
