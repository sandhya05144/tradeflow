function Brokerage() {
  return (
    <div className='container'>
      {/* Tabs */}
      <div className='d-flex gap-5 border-bottom mb-4'>
        <span className=' fs-4 fw-semibold pb-2 border-bottom border-primary border-3'>
          Equity
        </span>
        <span className='text-primary fs-4'>Currency</span>
        <span className='text-primary fs-4'>Commodity</span>
      </div>

      {/* Pricing Table */}
      <div className='border rounded'>
        {/* Header */}
        <div className='row fw-semibold border-bottom p-4 bg-light'>
          <div className='col-3'></div>
          <div className='col'>Equity delivery</div>
          <div className='col'>Equity intraday</div>
          <div className='col'>F&amp;O - Futures</div>
          <div className='col'>F&amp;O - Options</div>
        </div>

        {/* Brokerage */}
        <div className='row p-4 border-bottom'>
          <div className='col-3  text-secondary'>Brokerage</div>
          <div className='col'>Zero Brokerage</div>
          <div className='col'>
            0.03% or ₹20/executed order whichever is lower
          </div>
          <div className='col'>
            0.03% or ₹20/executed order whichever is lower
          </div>
          <div className='col'>Flat ₹20 per executed order</div>
        </div>

        {/* STT / CTT */}
        <div className='row p-4 border-bottom'>
          <div className='col-3 fw-semibold text-secondary'>STT / CTT</div>
          <div className='col'>0.1% on buy & sell</div>
          <div className='col'>0.025% on the sell side</div>
          <div className='col'>0.02% on the sell side</div>
          <div className='col'>
            • 0.125% of intrinsic value on exercised options <br />• 0.1% on
            sell side (premium)
          </div>
        </div>

        {/* Transaction Charges */}
        <div className='row p-4 border-bottom'>
          <div className='col-3 fw-semibold text-secondary'>
            Transaction charges
          </div>
          <div className='col'>
            NSE: 0.00297% <br />
            BSE: 0.00375%
          </div>
          <div className='col'>
            NSE: 0.00297% <br />
            BSE: 0.00375%
          </div>
          <div className='col'>
            NSE: 0.00173% <br />
            BSE: 0
          </div>
          <div className='col'>
            NSE: 0.03503% (premium) <br />
            BSE: 0.0325% (premium)
          </div>
        </div>

        {/* GST */}
        <div className='row p-4'>
          <div className='col-3 fw-semibold text-secondary'>GST</div>
          <div className='col'>
            18% on (brokerage + SEBI charges + transaction charges)
          </div>
          <div className='col'>
            18% on (brokerage + SEBI charges + transaction charges)
          </div>
          <div className='col'>
            18% on (brokerage + SEBI charges + transaction charges)
          </div>
          <div className='col'>
            18% on (brokerage + SEBI charges + transaction charges)
          </div>
        </div>
      </div>
      <div className='row text-center mt-4'>
        <h5 className='text-muted'>
          <a href='' style={{ textDecoration: "none" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h5>
      </div>
    </div>
  );
}
export default Brokerage;
