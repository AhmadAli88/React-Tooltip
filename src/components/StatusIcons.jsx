import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaBell, FaExclamationTriangle } from 'react-icons/fa';

function StatusIcons() {
  // Function to create tooltip content
  const renderTooltip = (message) => (
    <Tooltip id="status-tooltip">{message}</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('You have new notifications')}
      >
        <span style={{ marginRight: '10px' }}>
          <FaBell />
        </span>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('An error occurred')}
      >
        <span>
          <FaExclamationTriangle />
        </span>
      </OverlayTrigger>
    </div>
  );
}

export default StatusIcons;
