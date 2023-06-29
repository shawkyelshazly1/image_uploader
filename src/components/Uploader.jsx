import { useState } from "react";
import DragDropFile from "./DragDropFile";
import UploadButton from "./UploadButton";
import Loader from "./Loader";
import Uploaded from "./Uploaded";

export default function Uploader() {
	const [uploadState, setUploadState] = useState("upload");
	const [uploadProgress, setUploadProgress] = useState(0);
	const [uploadedData, setUploadedData] = useState({});

	// handle upload image
	const handleUploadImage = (file) => {
		// convert image to base64
		reader(file, async (err, res) => {
			await uploadImage(res);
		});
	};

	//upload imag request
	const uploadImage = async (imageString) => {
		let reg = /\bdata:image\/\w+;base64,\b/;
		let formData = new FormData();
		formData.append("image", imageString.replace(reg, ""));

		const req = new XMLHttpRequest();

		req.open(
			"POST",
			"https://api.imgbb.com/1/upload?key=b73739646c48f600cda9ad71aaeb17dd"
		);

		req.upload.addEventListener("progress", (e) => {
			let completedPercentage = (e.loaded / e.total) * 100;
			setUploadProgress(completedPercentage);
		});

		req.addEventListener("loadstart", () => {
			setUploadState("loading");
		});
		req.addEventListener("loadend", () => {
			setUploadState("uploaded");
			setUploadedData(req.response);
		});

		req.send(formData);
	};

	// handle converting image to base64 string
	const reader = (file, callback) => {
		const fr = new FileReader();
		fr.onload = () => callback(null, fr.result);
		fr.onerror = (err) => callback(err);
		fr.readAsDataURL(file);
	};

	return (
		<div className="bg-white flex flex-col items-center justify-center h-fit py-14 rounded-2xl w-1/4 gap-8">
			{uploadState === "upload" ? (
				<>
					<div className="flex flex-col items-center gap-8">
						<h1 className="text-[#4F4F4F] text-2xl font-medium">
							Upload your image
						</h1>
						<p className="text-[#828282] text-sm ">
							File should be Jpeg, Png,...
						</p>
					</div>

					<DragDropFile uploadImage={handleUploadImage} />

					<p className="text-[#828282] ">Or</p>
					<UploadButton uploadImage={handleUploadImage} />
				</>
			) : (
				<>
					{uploadState === "loading" ? (
						<Loader progress={uploadProgress} />
					) : (
						<Uploaded response={uploadedData} />
					)}
				</>
			)}
		</div>
	);
}
