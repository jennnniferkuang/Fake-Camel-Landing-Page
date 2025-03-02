import Dropdowns from "./dropdowns";
import Carousel from "./carousel";

export default function Home() {
  return (
    <>
      <div className="fixed navbar">
        <img className="justify-start h-8" src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI-logo"></img>
        <ul className="flex mx-5 justify-end space-x-8 text-lg text-right list-none">
          <li className="hover:border-b-3 border-gray-400">Blog</li>
          <li className="hover:border-b-3 border-gray-400">Pricing</li>
          <li className="hover:border-b-3 border-gray-400">Login</li>
        </ul>
      </div>

      <div className="gradient-background">
        <div className="text-center mt-[150px]">
          <h1 className="text-7xl font-bold">The AI Data Analyst</h1>
          <p className="mt-12 text-2xl">budget version by Jennifer Kuang XD</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center mt-10 m-2 gap-2">
          <div className="rect">
            <img className="h-5" src="https://camelai.com/assets/images/yc-logo.png"></img>
            <p className="text-md">Y Combinator backed</p>
          </div>
          <div className="rect">
            <img className="h-5" src="https://camelai.com/assets/images/lock-icon.png"></img>
            <p className="text-md">Enterprise Security</p>
          </div>
          <div className="rect">
            <img className="h-5" src="https://camelai.com/assets/images/shield-icon.png"></img>
            <p className="text-md">100% Data Privacy</p>
          </div>
        </div>
        <div className="flex item-center justify-center mt-12 gap-x-4">
            <a className="white-button">Try free
              <img className="justify-end h-3" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
            </a>
            <a className="clear-button">Book demo
              <img className="justify-end h-3 invert" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
            </a>
        </div>
        <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="relative m-[100px] w-[65vw]">
          {/* Video */}
          <video className="w-full rounded-lg" autoPlay loop muted>
            <source src="https://camelai.com/assets/images/camelai-gif.mp4" type="video/mp4" />
          </video>

          {/* Overlay Play Icon */}
          <img src="https://camelai.com/assets/images/play-icon-2.png" className="play-button" alt="Play Icon"/>
        </a>
      </div>

      <div className="black-background">
        <div className="mt-[100px] w-full">
          <Carousel/>
        </div>
      {/* Block 1 */}
        <div className="code-block">
          <img className="justify-start h-8 mr-5" src="https://camelai.com/assets/images/code-icon.png"></img>
          <p>Ask any question</p>
        </div>
        <p className="mx-6 mt-6 small-text">Hi AllMind AI!</p>
        <p className="mx-6 mb-6 small-text">Click any button or linked element to check out my resume!</p>
        <img className="image-style" src="https://camelai.com/assets/images/chat-demo-ss.png"></img>

      {/* Block 2 */}
        <div className="code-block">
          <img className="justify-start h-8 mr-5" src="https://camelai.com/assets/images/light-bulb-icon.png"></img>
          <p>Powerful Dashboards</p>
        </div>
        <p className="mx-6 mt-6 small-text">I speedran the development of this site as my last midterm was on Friday!</p>
        <p className="mx-6 mb-6 small-text">I hope you'll understand it doesn't have all the animations I wanted it to have.</p>
        <img className="image-style" src="https://camelai.com/assets/images/dashboard-demo-ss.png"></img>

      {/* Build with CamelAI */}
      <div className="flex sm:flex-row flex-col justify-between m-5 w-[75vw] text-white">
        <div className="flex flex-col w-[35vw] justify-start m-7">
          <h1 className="text-3xl font-mono my-10">Want to build with camelAI?</h1>
          <p className="text-2xl">Embed AI-powered analytics directly in your application with our API</p>
          <a className="mt-[50px] white-button">Join API waitlist
            <img className="justify-end h-3" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
          </a>
        </div>
        <div className="flex flex-col w-[35vw] justify-end m-7">
          <h2 className="text-2xl">Natural Language → SQL</h2>
          <p className="mt-2 text-lg font-bold text-gray-400">Same powerful query engine that powers camelAI</p>
          <h2 className="text-2xl mt-5">Secure Integration</h2>
          <p className="mt-2 text-lg font-bold text-gray-400">Enterprise-grade security and permissions</p>
          <h2 className="text-2xl mt-5">Flexible Integration</h2>
          <p className="mt-2 text-lg font-bold text-gray-400">Full control over the user experience</p>
        </div>
      </div>

      {/* FAQs */}
      <h1 className="text-3xl font-bold my-10">FAQs</h1>
      <div>
        <Dropdowns/>
      </div>

      {/* Get Started */}
        <div className="flex sm:flex-row flex-col item-center w-[75vw] justify-between mt-[100px] gap-x-4">
          <div className="flex md:flex-row flex-col justifty-start my-3">
            <h1 className="text-3xl mr-2">Thank you for this</h1>
            <span className="text-3xl font-semibold bg-gradient-to-r from-purple-800 via-pink-600 to-orange-900 bg-clip-text text-transparent">opportunity!</span>
          </div>
          <div className="flex justify-end space-x-5">
            <a className="my-3 white-button">Try free
              <img className="justify-end h-3" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
            </a>
            <a className="my-3 clear-button">Contact us
              <img className="justify-end h-3 invert" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-10 px-6">
        <div className="footer-cols">
          {/* Logo */}
          <div className="flex flex-col justify-start">
            <div className="flex items-center space-x-2">
              <img src="https://camelai.com/assets/images/main-camelai.png" alt="camelAI Logo" className="h-[75px]" />
            </div>

            {/* Newsletter */}
            <p className="text-white my-5">Subscribe to our newsletter for product updates</p>
            <div className="flex items-center space-x-2">
              <input className="input-style"
                type="email"
                placeholder="email"
              />
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="white-button">Subscribe
                <img className="justify-end h-3" src="https://camelai.com/assets/images/chevron-right-black.png"></img>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start space-x-2 mt-[100px]">
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="p-2">
                <img className="h-8" src="https://camelai.com/assets/images/x.com.png"></img>
              </a>
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="p-2">
                <img className="h-8" src="https://camelai.com/assets/images/discord.png"></img>
              </a>
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="p-2">
                <img className="h-8" src="https://camelai.com/assets/images/linkedin.png"></img>
              </a>
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="p-2">
                <img className="h-8" src="https://camelai.com/assets/images/youtube.png"></img>
              </a>
              <a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" className="p-2">
                <img className="h-8" src="https://camelai.com/assets/images/github.png"></img>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-cols-3 gap-8 text-left my-6 text-[12px] justify-end">
            <div>
              <h3 className="text-gray-400 font-bold">Company</h3>
              <ul className="mt-7 space-y-7 font-semibold">
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >About Us</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Schedule a call</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Email Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-bold">Links</h3>
              <ul className="mt-7 space-y-7 font-semibold">
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Data Sources</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Demo Videos</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Blog</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Product Hunt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-bold">Legal</h3>
              <ul className="mt-7 space-y-7 font-semibold">
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Terms</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Privacy Policy</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Security</a></li>
                <li><a href="https://drive.google.com/file/d/1xRCMAv6OdoZ0t_z5EEC33uYxH5lpwMoc/view?usp=sharing" >Acceptable Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Copyright */}
        <div className="border-t border-gray-700 w-full mx-auto mt-2 pt-4 text-gray-500 text-[10px]">
            © 2024 camelQA (DBA camelAI) | All rights reserved
          </div>
      </footer>
    </>
  );
}
