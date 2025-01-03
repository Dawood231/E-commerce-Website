import '@/app/globals.css'

export default function Footer() {
  return (
    <footer>
        <div className='col-1'>
          <h1>E-Commmerce website</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span>Dawood, 2024</span>
        </div>
        <div className='col-2'>
          <h3>Visited Links</h3>
          <p>Home</p>
          <p>Latest products</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='col-3'>
          <h3>Legal</h3>
          <p>Terms of Service </p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
        </div>
        <div className='col-4'>
        <h3>Contact info</h3>
          <p>Phone: +92 365 37624</p>
          <p>Email: info@ecommerce.com</p>
          <p>Location: example street at 123 Lorem ipsum dolor sit amet </p>
        </div>
      </footer>
  )
}