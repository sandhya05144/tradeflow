function Hero() {
  return (
    <div className='container'>
      <div className='row text-center mt-4 p-5'>
        <h2 style={{ color: "#424242" }}>Charges</h2>
        <h4 className=' mt-2' style={{ color: "#9b9b9b" }}>
          List of all charges and taxes
        </h4>
      </div>
      <div className='row mt-5 p-5 text-center'>
        <div className='col-4'>
          <img src='Media/image/pricingEquity.svg' style={{ width: "280px" }} />
          <h3 style={{ color: "#424242" }}>Free equity delivery</h3>
          <p className='mt-4 text-muted'>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className='col-4 '>
          <img src='Media/image/other-trades.svg' style={{ width: "280px" }} />
          <h3 style={{ color: "#424242" }}> Intraday and F&O trades</h3>
          <p className='mt-4 text-muted'>
            Flat ₹ 20 or 0.03% (whichever is lower) per
            <br /> executed order on intraday trades across <br />
            equity, currency, and commodity trades. Flat
            <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className='col-4 '>
          <img src='Media/image/pricingEquity.svg' style={{ width: "280px" }} />
          <h3 style={{ color: "#424242" }}>Free direct MF</h3>
          <p className='mt-4 text-muted'>
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
