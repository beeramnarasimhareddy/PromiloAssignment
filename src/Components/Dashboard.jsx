


import React from "react";
import "./Dashboard.css";

const Dashboard = () => {

  const esignCount = {
       initiated: 10,
       pending: 5,
        signed: 4,
        expired: 1,
      };
    
      const estampCount = {
        initiated: 8,
        pending: 4,
        signed: 3,
       expired: 1,
       };
    
  return (
    <div className="dashboard-container">
      {/* Header */}
      {/* <header className="header">
        <div className="logo">DOQFY</div>
        <nav className="nav">Services | User Management | Orders | Reports | Inventory | Invoice</nav>
        <div className="user-profile">Michael Smith</div>
      </header> */}
      <header className="header navbar">
 
  <nav className="nav">
  
    <ul className="nav-links">
      <li id="logo">Doqfy</li>
      <li><a href="#">Services</a></li>
      <li><a href="#">User Management</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Inventory</a></li>
      <li><a href="#">Invoice</a></li>
    </ul>
  </nav>
  <div className="user-profile">Michael Smith</div>
</header>


      <div className="main-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="welcome">
            <h3>Welcome back, Michael</h3>
            <p>25 May, 2023 - Tuesday</p>
          </div>
          <div className="wallet">
            <h3>My Wallet</h3>
            <p className="balance">₹2,50,000</p>
            <p>Running low? <a href="#">Notify Admin</a></p>
          </div>
          <div className="pending-actions">
            <h3>Pending Actions</h3>
            <ul>
              <li>#trd35468 - 10 days left</li>
              <li>#33256577 - 8 days left</li>
              <li>#97628347 - 3 days ago</li>
              <li>#86783428 - 5 days ago</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="content">
          <section className="frequently-used">
            <h2>Frequently Used</h2>
            <div className="cards">
              <div className="card">
                <h5>Contract Execution Upload</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa velit illum voluptatibus, quibusdam autem ratione aperiam vitae, nostrum deserunt, commodi suscipit? Architecto quam, provident enim sequi obcaecati suscipit temporibus quisquam.</p>
              </div>
              <div className="card">
                <h5>E-stamp Services</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit nesciunt nulla! Consequatur repellat voluptatum omnis dolore! Minima, fugiat. Porro cum quibusdam necessitatibus assumenda voluptatibus voluptate id quidem aliquid nihil.</p></div>
              <div className="card">
                <h5>E-sign Services</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque reiciendis nesciunt dolores, beatae omnis natus. Odit ducimus sit adipisci earum tempore, expedita alias deserunt repellat amet illo laboriosam dolorem!</p>
                </div>
            </div>
          </section>

          <section className="order-details">
            <h2>Order Details</h2>
            <div className="stats">
              <div className="stat">18 Total Orders</div>
              <div className="stat">10 In Progress</div>
              <div className="stat">5 Completed Orders</div>
              <div className="stat">3 Cancelled Orders</div>
            </div>
          </section>
            <div className="count">



          <section className="esign-count-section">
       <h4>E-sign Count</h4>
         <p>Initiated: {esignCount.initiated}</p>
         <p>Pending: {esignCount.pending}</p>
         <p>Signed: {esignCount.signed}</p>
        <p>Expired: {esignCount.expired}</p>
      </section>

       <section className="estamp-count-section">
         <h4>E-stamp Count</h4>
                  <p>Initiated: {estampCount.initiated}</p>
       <p>Pending: {estampCount.pending}</p>
       <p>Signed: {estampCount.signed}</p>
        <p>Expired: {estampCount.expired}</p>
     </section>
     </div>


        </main>
      </div>

      {/* Footer */}
      <footer className="footer">&copy; 2023 All Rights Reserved</footer>
    </div>
  );
};

export default Dashboard;

















