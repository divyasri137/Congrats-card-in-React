const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading2">Kiran V</h1>
      <p className="desc">
        Vishnu Institute of Computer Education and Technology
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
