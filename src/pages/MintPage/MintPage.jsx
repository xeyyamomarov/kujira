import React from "react";
import "./mint.css";
import Chart from "react-apexcharts";
import MintImg from "../../assets/mint/dollar-minimalistic-svgrepo-com.svg";

const MintPage = () => {
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#AA55E6"],
    labels: ["Label 1"],
  };

  const series = [100];

  return (
    <div className="mint-page">
      <div className="container">
        <div className="mint-content">
          <div className="mint-header">
            <h1>Mint USK</h1>
            <span>Markets</span>
          </div>
          <div className="mint-cards">
            <div className="mint-content-container">
              <div className="mint-card">
                <div className="mint-card-container">
                  <div className="mint-card-top">
                    {/* top -left */}
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-header">
                          <h3>Deposited</h3>
                        </div>
                        <div className="left-content-container">
                          <div className="left-img">
                            <img src={MintImg} alt="/" />
                            <h3>ARB</h3>
                          </div>
                          <div className="left-content-price">
                            <h5>0.0000</h5>
                            <h6>0.000</h6>
                          </div>
                        </div>
                        <div className="left-rate">
                          <h5>Interest Rate</h5>
                          <span>1.0%</span>
                        </div>
                      </div>
                    </div>
                    {/*  top -right */}
                    <div className="mint-card-top-right">
                      <div className="card-top-right">
                        <div className="right-header">
                          <h3>Borrowed</h3>
                        </div>
                        <div className="right-content-container">
                          <div className="right-img">
                            <img src={MintImg} alt="/" />
                            <h3>USK</h3>
                          </div>
                          <div className="right-content-price">
                            <h5>0.0000</h5>
                            <h6>0.000</h6>
                          </div>
                        </div>
                        <div className="right-rate">
                          <h5>Accrued Interest</h5>
                          <span>0. 00 USK</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom */}
                  <div className="mint-card-bottom">
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-content-container">
                          <div className="left-header">
                            <h2>Loan Risk</h2>
                            <h3>No Loan</h3>
                          </div>
                          <div className="left-content-price">
                            <h5>LTV</h5>
                            <h6>0.00%</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  bottom -right */}
                    <div className="mint-card-top-left">
                      <div className="card-top-left">
                        <div className="left-content-container">
                          <div className="left-header">
                            <h2>ARB Price</h2>
                            <h3>$ 1. 0620</h3>
                          </div>
                          <div className="left-content-price">
                            <h5>Liquidation Price</h5>
                            <h6>$0000.0</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="open-btn">
                  <button>Open Position</button>
                  </div>
                
                </div>
              </div>
              <div className="mint-chart">
                <Chart
                  options={options}
                  series={series}
                  type="donut"
                  width="250"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintPage;
