import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function SalesChart() {
  // Create tooltip content function
  const renderTooltip = (message) => (
    <Tooltip id='sales-tooltip'>{message}</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement='top'
        overlay={renderTooltip('Sales in January: $2000')}
      >
        <div
          className='bar'
          style={{ height: '200px', backgroundColor: 'blue', width: '50px' }}
        ></div>
      </OverlayTrigger>
    </div>
  );
}

export default SalesChart;
