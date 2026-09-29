function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
          <p className='text-muted'>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            See pricing <i class='fa-solid fa-arrow-right'></i>
          </a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mb-5'>
          <div className='row text-center'>
            <div className='col-4'>
              <img src='Media/image/pricing-eq.svg' style={{ width: "70%" }} />
              <p> Free account opening</p>
            </div>
            <div className='col-4'>
              <img
                src='Media\image\pricing-eq (1).svg'
                style={{ width: "70%" }}
              />
              <p> Free equity delivery and direct mutual funds</p>
            </div>
            <div className='col-4'>
              <img
                src='Media/image/other-trades.svg'
                style={{ width: "70%" }}
              />
              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
