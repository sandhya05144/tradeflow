function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h1
          style={{
            fontSize: "30px",
            color: "#424242",
          }}
        >
          The Zerodha Universe
        </h1>
        <p className='mt-3'>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/zerodhaFundhouse.png'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Our asset managment venture
            <br /> that is creating simple and transparent index <br />
            funds to help you save for your goal.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/sensibullLogo.svg'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Option trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DUII, and more.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/tijori.svg'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/streakLogo.png'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Systematic trading platform
            <br />
            that allows you to create backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/smallcaseLogo.png'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Thematic investment platform
            <br />
            that helps you invest in diversified
            <br />
            bsakets of stocks on ETFs.
          </p>
        </div>
        <div className='col-4 p-3 mt-5'>
          <img
            src='Media/image/dittoLogo.png'
            style={{
              height: "55px",
              weight: "100px",
            }}
          />
          <p className='text-small text-muted mt-3'>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-sellings.
          </p>
        </div>
        <button
          className='p-2 btn fs-5 mb-5'
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "white",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
export default Universe;
