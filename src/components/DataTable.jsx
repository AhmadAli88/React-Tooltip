import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function DataTable() {
  // Create tooltip content function
  const renderTooltip = (message) => <Tooltip id='tooltip'>{message}</Tooltip>;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <OverlayTrigger
              placement='top'
              overlay={renderTooltip('Total revenue generated')}
            >
              <span>Revenue</span>
            </OverlayTrigger>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <OverlayTrigger
              placement='top'
              overlay={renderTooltip("This month's total earnings")}
            >
              <span>$5000</span>
            </OverlayTrigger>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DataTable;
