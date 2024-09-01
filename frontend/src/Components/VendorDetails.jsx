const VendorDetails = () => {
  return (
    <div>
      <div className="vendor-container">
        <div class="vendor-header">Biggies Burger</div>
        <div class="vendor-info-main">
          <div class="ratings">
            <img src="https://agronfoodprocessing.com/wp-content/uploads/2023/07/Dairy-Farm.jpg" alt="Rating" width="20" height="20"></img>
            <span>4.3 (500+ ratings)</span>
          </div>
          <div>
            <span>₹300 for two</span>
          </div>
        </div>
        <div class="vendor-meta">
          <div>
            <a href="#">
              Burgers, Fast Food
            </a>
          </div>
          <div>
            <strong>Outlet:</strong> Ashok Nagar
          </div>
          <div>
            <strong>Delivery Time:</strong> 35-40 mins
          </div>
          <div>Order above ₹149 for discounted delivery fee</div>
        </div>
      </div>
    </div>
  );
};
export default VendorDetails;
