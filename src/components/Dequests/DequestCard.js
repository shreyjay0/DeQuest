const DequestCard = () => {
  return (
    <div className="dequest-card">
      <div className="dequest-card__header">
        <div className="dequest-card__header__title">
          <h3>Dequest Title</h3>
        </div>
        <div className="dequest-card__header__status">
          <p>Status</p>
        </div>
      </div>
      <div className="dequest-card__body">
        <div className="dequest-card__body__description">
          <p>Description</p>
        </div>
        <div className="dequest-card__body__requester">
          <p>Requester</p>
        </div>
        <div className="dequest-card__body__deadline">
          <p>Deadline</p>
        </div>
      </div>
    </div>
  );
};
