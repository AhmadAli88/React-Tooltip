import { Tooltip } from 'react-tooltip'

const Basic = () => {
  return (
    <div>
      <a data-tooltip-id='my-tooltip' data-tooltip-content='Hello world!'>
        ◕‿‿◕
      </a>
      <Tooltip id="my-tooltip" />
    </div>
    
  );
};

export default Basic;
