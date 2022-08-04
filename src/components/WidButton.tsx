interface WIDParams {
  loading: boolean
  setLoading: Function
}

const WidButton = (params: WIDParams) => {
  return (
		<button
			className={`inline-flex items-center justify-center px-6 py-2 font-medium text-white bg-gradient-to-r from-wid-indigo to-wid-purple rounded-md`}
		>
			{params.loading && (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="-ml-1 mr-2 h-6 w-6"
					fill="#ffffff"
				>
					<path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
						<animateTransform
							attributeName="transform"
							type="rotate"
							dur="0.75s"
							values="0 12 12;360 12 12"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
			)}
			Claim ID
		</button>
  );
};

export default WidButton;
