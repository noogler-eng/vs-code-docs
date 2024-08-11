

export default function Hero(){
    return <div className="text-white flex items-center justify-between">
        <div className="flex flex-col justify-center gap-4 items-center gap-8 items-baseline">
            <div className="border border-gray-400 rounded-xl w-4/6 text-center text-sm">Free. Built on open source. Runs everywhere.</div>
            <div className="text-6xl">Code Editing.<br/> Redefined.</div>
            <button className="py-4 px-8 bg-blue-500 rounded-lg">Download for macOS</button>
            <div>
                <p><a className="text-blue-400">Web</a>, <a className="text-blue-400">Insiders edition</a>, or <a className="text-blue-400">other platforms</a></p>
                <p className="text-sm">By using VS Code, you agree to its <span className="text-blue-400">license</span> and <span className="text-blue-400">privacy statement</span>.</p>
            </div>
        </div>
        <div>
            <img src='./vscode.png' width='800'/>
        </div>
    </div>
}