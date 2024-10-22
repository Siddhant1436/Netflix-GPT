const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video absolute pt-36 px-12 bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="py-6 text-lg w-4/12 text-white">{overview}</p>
            <div>
                <button className="bg-white text-black py-4 px-8 mx-2 rounded-lg hover:bg-opacity-80">▶️ Play</button>
                <button className="bg-gray-500 text-white py-4 px-8 mx-2 rounded-lg bg-opacity-50">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;