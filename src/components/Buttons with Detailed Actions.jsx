import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function Dashboard() {
  // Create tooltip content function
  const renderTooltip = (message) => (
    <Tooltip id='delete-tooltip'>{message}</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement='top'
        overlay={renderTooltip('Delete this item')}
      >
        <button>
          <i className='fa fa-trash' />Test Button
        </button>
      </OverlayTrigger>
    </div>
  );
}

export default Dashboard;
