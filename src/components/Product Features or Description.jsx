
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function ProductList() {
  // Function to create tooltip content
  const renderTooltip = (message) => (
    <Tooltip id="product-tooltip">{message}</Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('Product 1: $25.99, In Stock')}
      >
        <div>
          <img src="../src/assets/download.jpeg" alt="Product 1" />
        </div>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={renderTooltip('Product 2: $35.99, Out of Stock')}
      >
        <div>
          <img src="../src/assets/download2.jpeg" alt="Product 2" />
        </div>
      </OverlayTrigger>
    </div>
  );
}

export default ProductList;
