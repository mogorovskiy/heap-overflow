export default function QuestionPreview() {
    return (
        <div className="border-t">
            <div className="flex flex-row gap-x-3 py-3">
                <div className="flex flex-col text-secondary small text-end pl-12 py-2">
                    <div>
                        <span className="mr-1">15</span>
                        <span>votes</span>
                    </div>
                    <div>
                        <span className="mr-1">23</span>
                        <span>answers</span>
                    </div>
                    <div>
                        <span className="mr-1">143</span>
                        <span>views</span>
                    </div>
                </div>
                <div className="flex flex-col text-start pr-3">
                    <a href="#" className="text-decoration-none">Limit for creating VLAN interface with IP address</a>
                    <div className="small">
                        <span className="mr-1">I have a network with L3 switch and router. For router resources economy I tried creating interface vlans with IP addresses for LANs termination there and faced with a problem - DLink 1210 allows only</span>
                        <span>...</span>
                    </div>
                    <div className="flex flex-row justify-content-between">
                        <div className="flex flex-row gap-x-2 mt-1">
                            <span className="badge bg-cyan-100 text-black">networking</span>
                            <span className="badge bg-cyan-100 text-black">ip</span>
                            <span className="badge bg-cyan-100 text-black">switching</span>
                            <span className="badge bg-cyan-100 text-black">vlan</span>
                        </div>
                        <div className="flex flex-row align-items-center gap-x-1 small">
                            <img src="https://www.gravatar.com/avatar/b6bd911fa675bb6a3cb4aeffea6e7cd5?s=32&amp;d=identicon&amp;r=PG&amp;f=y&amp;so-version=2"
                                 alt="" className="w-4 h-4" />
                            <a href="#" className="text-decoration-none">Dswiter</a>
                            <div className="text-secondary">
                                <span className="mr-1">asked</span>
                                <span className="mr-1">2 mins</span>
                                <span>ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
