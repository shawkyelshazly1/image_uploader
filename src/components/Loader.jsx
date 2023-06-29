export default function Loader({ progress }) {
	console.log(progress);
	return (
		<div className="flex flex-col container w-full h-full items-start px-8 gap-4">
			<h1 className="font-medium text-lg text-[#4F4F4F]">Uploading...</h1>
			<progress
				value={progress}
				max={100}
				className=" [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-1000 
                [&::-webkit-progress-value]:ease-out w-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full   [&::-webkit-progress-bar]:bg-[#F2F2F2] [&::-webkit-progress-value]:bg-[#2F80ED] [&::-moz-progress-bar]:bg-[#F2F2F2]"
			></progress>
		</div>
	);
}
