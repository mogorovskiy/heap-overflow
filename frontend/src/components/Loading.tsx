export default function Loading() {
    const width = 50;
    const height = 50;

    return (<div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center background-secondary p-5 rounded-5">
            <div className="flex flex-col items-center gap-3">
                <img alt="loading.gif"
                     src="https://github.com/kerrrusha/wot-stat-tracker/blob/master/wot-stat-tracker-web/src/main/resources/static/gif/loading.gif?raw=true"
                     style={{width, height}} />
                <span>Loading...</span>
            </div>
        </div>
    </div>);
}
