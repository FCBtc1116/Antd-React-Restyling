import { Input } from 'antd';
import "./Input.css";

function InputBox({label, prefix}) {
  return (
    <div className='input-border'>
        <Input
            placeholder={label}
            prefix={prefix}
            bordered={false}
            className="input"
        />
    </div>
  );
}

export default InputBox;
