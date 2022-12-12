import { UserOutlined, MailFilled, LockFilled, LockOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import InputBox from "./Input";

function Left() {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className='text-left left'>
            <h1><b>Sign Up</b></h1>
            <InputBox label="Your Name" prefix={<UserOutlined />} />
            <InputBox label="Your Email" prefix={<MailFilled />} />
            <InputBox label="Password" prefix={<LockFilled />} />
            <InputBox label="Repeat your password" prefix={<LockOutlined />} />
            <Checkbox onChange={onChange} className="left__check-box">I agree all statements in <u>Terms of service</u></Checkbox>
        </div>
    );
}

export default Left;
