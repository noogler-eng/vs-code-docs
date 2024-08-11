import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Note from "../components/Note";

export default function Landing(){
  return <div className="px-12 py-6">
    <Navbar/>
    <div className="w-full py-16">
      <Note/>
    </div>
    <Hero/>
  </div>
}
