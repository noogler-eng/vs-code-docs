import { Link } from "react-router-dom";
import { Search } from 'lucide-react';


export default function Navbar(){
    
    const linksConfig = [
        {
            name: 'Docs',
            link: '/docs'
        }, {
            name: 'Updates',
            link: '/updates'
        }, {
            name: 'Blog',
            link: '/blog'
        }, {
            name: 'API',
            link: '/api'
        }, {
            name: 'Extensions',
            link: '/extensions'
        }, {
            name: 'FAQ',
            link: '/faq'
        }, {
            name: 'Learn',
            link: '/learn'
        }
    ]
    
    
    
    
    return <div className="flex items-center w-11/12 justify-between text-white fixed bg-opacity-50 backdrop-blur-md z-10">
        <div className="flex gap-4 items-center">
            <div className="w-full flex gap-2 items-center">
                <Link to='/'><img src='./img.png' width={30} height={30}/></Link>
                <p className="text-2xl font-semibold">visual studio code</p>
            </div>
            <div className="flex gap-3 place-self-end">
                { linksConfig.map((link, index)=>{
                    return <Link to={link.link} key={index} className="text-lg">{link.name}</Link>
                }) }
            </div>
        </div>
        <div className="flex items-center gap-4">
                <div className="border border-white rounded-lg flex gap-1 items-center text-gray-400 px-2">
                    <Search size={18}/>
                    <input type="text" placeholder="search" className="outline-none py-1 bg-black text-white"/>
                </div>
                <button className="px-6 bg-blue-500 text-white rounded-lg border border-blue-500 py-1">download</button>
        </div>
    </div>
}