
const Base64ImageStrip = () => {
    const images = [
        require("../assets/back1.jpg"),
        require("../assets/back2.jpg"),
        require("../assets/back3.jpg"),
        require("../assets/back4.jpg"),
        require("../assets/back5.jpg"),
        require("../assets/back6.jpg"),
    ];

    return (
        <div className="w-full flex flex-col items-center  ">
            <div className="shadow-lg border">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Row ${index + 1}`}
                        className="h-auto w-[1200px]"
                    />
                ))}
            </div>
        </div>
    );
};

export default Base64ImageStrip;
