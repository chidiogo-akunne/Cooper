import React from "react";
import Card from "../../commons/card";
import Layout from "../../components/dashboardLayout";
import IconButton from "../../commons/iconButton";
import Button from "../../commons/button";

import "./styles.scss";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard_container">
        <div className="button_container">
          <IconButton buttonClass="cooperative_button create_button">
            Join new Cooperative{" "}
            <img src="/images/plus-icon-3.svg" alt="add icon" />
          </IconButton>
          <IconButton buttonClass="ajo_button create_button">
            Join new Contribution
            <img src="/images/plus-icon-2.svg" alt="add icon" />
          </IconButton>
          <IconButton buttonClass="save_button create_button">
            Save to your Wallet{" "}
            <img src="/images/plus-icon.svg" alt="add icon" />
          </IconButton>
        </div>
        <div className="dashboard_card_container">
          <div className="card_wrapper">
            <Card cardClass="dashboard_card">
              <div className="cooperative_card card_header">
                <h4>COOPERATIVES</h4>
              </div>
              <h4>Total Funds:</h4>
              <h2>#0.00</h2>
              <h4>Number of Cooper</h4>
              <h2 className="card_h2">0</h2>
              <Button
                value="View Cooperative >>"
                buttonClass="card_button co-operative_button"
              />
            </Card>
            <Card cardClass="dashboard_card">
              <div className="card_header investment_card">
                <h4>INVESTMENTS</h4>
              </div>
              <h4>Total Funds:</h4>
              <h2>#0.00</h2>
              <h4>Number of Investment</h4>
              <h2>0</h2>
            </Card>
          </div>
          <div className="card_wrapper">
            <Card cardClass="dashboard_card">
              <div className="card_header ajo_card">
                <h4>AJO</h4>
              </div>
              <h4>Total Funds:</h4>
              <h2>#0.00</h2>
              <h4>Number of Ajo</h4>
              <h2 className="card_h2">0</h2>
              <Button
                value="View Ajo >>"
                buttonClass="card_button contribute_button"
              />
            </Card>
            <Card cardClass="dashboard_card save_card">
              <div>
                <div className="card_header investment_card">
                  <h4>SAVINGS</h4>
                </div>
                <h4 className="save_wrapper">Total Funds:</h4>
                <h2 className="card_h2">#0.00</h2>
              </div>
              <Button
                value="View Total Savings >>"
                buttonClass="card_button save_button"
              />
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
