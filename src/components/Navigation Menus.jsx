
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function NavigationMenu() {
  // Create tooltip content function
  const renderTooltip = (message) => (
    <Tooltip id="tooltip">{message}</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('Go to Home')}
      >
        <a href="/home">Home</a>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('View Profile')}
      >
        <a href="/profile">Profile</a>
      </OverlayTrigger>
    </div>
  );
}

export default NavigationMenu;
