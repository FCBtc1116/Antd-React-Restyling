import { Button } from "antd";

function Bottom() {
    return (
      <div className="d-flex bottom">
        <div className="w-100">
          <Button type="primary" className='bottom__button'>Register</Button>
        </div>
        <div className="w-100">
            <a className="bottom__label">I am already member</a>
        </div>
      </div>
    );
  }
  
  export default Bottom;
  