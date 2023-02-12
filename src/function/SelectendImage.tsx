export function SelectendImage(selectedImages: string[], selectedTexArray: string[]){
    selectedImages.map((image, index) => (
        <div
        key={index * selectedImages.length}
        className="max-w-[6rem] rounded-lg bg-white text-black shadow-lg overflow-hidden"
        >
          <img className="w-full" src={image} alt="" />
          <p className="text-center w-full text-sm">{selectedTexArray[index]}</p>
        </div>
      ))

}