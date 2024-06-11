import lightBulb from '../src/assests/images/light bulb.png'
import Image from 'next/image';



export default function Home() {
  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Image src={lightBulb} alt="lightbulb" />
      <div>
      <h1 style={{ fontSize: '5vw', marginRight: '1em'}}>
        <div>I AM <span style={{ color: 'purple', fontWeight: 900}}>SATHAPPAN</span></div>
      </h1>
      <div style={{ fontSize: '3vw', textAlign: 'right', marginRight: '1.6em'}}>
        A <span style={{ color: 'purple'}}>React Developer</span></div>
      </div>
    </div>
    </>
  );
}
