import Card from "./UI/Card";
const KPremium = () => {
  return (
    <Card>
      <div style={{ padding: "10px" }}>
        <div className="fw-bold fs-4">Subscribe to Premium</div>
        <div className="fw-bold fs-6 my-2">
          Subscribe to unlock new features and if eligible, reciveve a share
          ofads revenue
        </div>
        <button type="button" className="btn btn-dark rounded-pill p-6">
          Subscribe
        </button>
      </div>
    </Card>
  );
};

export default KPremium;
