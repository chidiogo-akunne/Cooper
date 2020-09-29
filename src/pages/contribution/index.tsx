import React from "react";
import Card from "../../commons/card";
import Layout from "../../components/dashboardLayout";
import Button from "../../commons/button";

import "./styles.scss";

export default function Dashboard() {
  return (
    <Layout>
      <div className="contribution_container">
        <Card cardClass="contribution_header">AVAILABLE CONTRIBUTION</Card>
        <div className="contribution_wrapper">
          {[...Array(4)].map((_, index) => (
            <Card cardClass="contribution_card" key={index.toString()}>
              <div
                style={{
                  backgroundImage: "url('/images/house.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: 200,
                }}
                className="card_header"
              >
                <p>GOD'S WILL Contribution</p>
              </div>
              <div className="requirement">
                <span>
                  <p>Minimum Amount:</p>
                  <span>
                    #500 <p>Daily</p>
                  </span>
                </span>
                <Button value="Check Details >>" buttonClass="details_button" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
