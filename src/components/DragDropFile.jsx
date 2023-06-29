import { useState } from "react";
import imagePlaceholder from "../assets/placeholder.png";

export default function DragDropFile({ uploadImage }) {
	// drag state
	const [dragActive, setDragActive] = useState(false);

	// handle drag event
	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	// triggers when file is dropped
	const handleDrop = function (e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			// at least one file has been dropped so do something

			uploadImage(e.dataTransfer.files[0]);
		}
	};

	return (
		<form
			className="flex flex-1 w-3/4 relative items-center justify-center text-center"
			onDragEnter={handleDrag}
			onSubmit={(e) => e.preventDefault()}
		>
			<input type="file" id="image_upload_area" hidden />
			<label
				onClick={(e) => e.preventDefault()}
				htmlFor="image_upload_area"
				className="border-2 rounded-lg w-full h-60 flex items-center justify-center border-dashed border-[#97BEF4]"
			>
				<div className="flex flex-col bg-[#F6F8FB] gap-8 w-full h-full items-center justify-center">
					<img src={imagePlaceholder} alt="" className="w-28" />
					<p className="text-[#BDBDBD]">Drag & Drop your image here</p>
				</div>
			</label>
			{dragActive && (
				<div
					className="w-full h-full absolute top-0 left-0"
					id="drag-file-element"
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
				></div>
			)}
		</form>
	);
}
