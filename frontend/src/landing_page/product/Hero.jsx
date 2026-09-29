function Hero() {
  return (
    <div className='container border-bottom mb-5'>
      <div className='row text-center mt-5 p-5'>
        <h3 style={{ color: "#424242" }}>Zerodha Products</h3>
        <p className=' mt-3 fs-4' style={{ color: "#424242" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className='mt-3 mb-5 text-muted fs-6'>
          Check out our{" "}
          <a href='' style={{ textDecoration: "none", fontSize: "17px" }}>
            investment offerings <i class='fa-solid fa-arrow-right'></i>
          </a>
        </p>
      </div>
    </div>
  );
}
export default Hero;
