import './App.css'
function App() {
  return (
    <>
      <div className='main'>
        {/* Nav Bar */}
        <div className="nva">
          <div className="logo">
            <img src="src/assets/Group.png" alt="" />
          </div>
          <div className='itmes'>
            <ul>
              <li style={{ color: "red" }}>Home</li>
              <li>About Us</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <button className='btn'>Download</button>
          </div>
        </div>
          <div className='starIcon1'>
            <img src="src/assets/Star 1 1.26.23 PM.png" alt="" />
          </div>
          <div className='starIcon2'>
            <img src="src/assets/Star 8.png" alt="" />
          </div>
        <div className='container'>
          <div className='img'>
            <img src="src/assets/Group 35930 1.26.42 PM.png" alt="" />
          </div>
          <div className='textCon'>
            <h1>Make The Best <br /> Financial Decision</h1>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet <br />
              Fucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttior.</p>
            <div className='btnCon'>
              <button className='btn'>Get Started</button>
              <button className='btnIcon'><i class="fa-regular fa-circle-play"></i>watch Video</button>
            </div>
          </div>
        </div>
        <div className='container1'>
          <div className='starImg'>
            <img src="src/assets/Star 8.png" alt="" />
          </div>
          <div className='banner'>
            <img src="src/assets/Group 35924(1).png" alt="" />
          </div>
        </div>
        <div className='container2'>
          <div className='blurImg'>
            <img src="src/assets/Group 35930 1.26.42 PM.png" alt="" />
          </div>
          <div className='ellipse'>
            <img src="src/assets/Group 35887.png" alt="" />
          </div>
          <div className='iphone1'>
            <img src="src/assets/iPhone-13-Pro-Front 1.26.34 PM.png" alt="" />
          </div>
          <div className='iphone2'>
            <img src="src/assets/iPhone-13-Pro-Front(1).png" alt="" />
          </div>
          <div className='iphone3'>
            <img src="src/assets/iPhone-13-Pro-Front(2).png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
