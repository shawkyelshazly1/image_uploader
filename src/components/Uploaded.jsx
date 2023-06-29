/* eslint-disable react/prop-types */
export default function Uploaded({ response }) {
	let imageData = JSON.parse(response).data;

	return (
		<div className="flex flex-col gap-8 items-center justify-center w-full px-6">
			<div className="flex flex-col items-center justify-center gap-2">
				<span className="material-symbols-outlined text-green-500 text-5xl">
					check_circle
				</span>
				<h1 className="text-[#4F4F4F] text-xl font-medium">
					Uploaded Successfully!
				</h1>
			</div>

			<div className=" aspect-video ">
				<img
					src={imageData.display_url}
					className=" rounded-2xl object-contain h-96 w-full"
				/>
			</div>

			<div className="w-full flex flex-row bg-[#F6F8FB] py-1 px-1 rounded-xl gap-2 border-[1px] border-gray-300 items-center">
				<div
					id="link_div"
					className=" text-ellipsis overflow-hidden flex-1 text-sm select-none px-2"
				>
					{imageData.display_url}
				</div>
				<button
					onClick={() => {
						navigator.clipboard.writeText(imageData.display_url);
						alert("Link Copied!");
					}}
					className=" bg-[#2F80ED] text-white rounded-xl py-3 px-5 text-sm font-medium"
				>
					Copy Link
				</button>
			</div>
		</div>
	);
}
