/* eslint-disable react/prop-types */
export default function UploadButton({ uploadImage }) {
	return (
		<div>
			<input
				type="file"
				name="image_upload"
				id="image_upload"
				hidden
				onChange={(e) => {
					uploadImage(e.target.files[0]);
				}}
			/>
			<label
				htmlFor="image_upload"
				className="bg-[#2F80ED] text-white py-2 px-4 rounded-xl text-lg cursor-pointer"
			>
				Choose a file
			</label>
		</div>
	);
}
