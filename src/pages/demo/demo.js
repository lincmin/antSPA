import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message ,Checkbox} from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = [];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                date: '',
                checkedList: defaultCheckedList,
                indeterminate: false,
                checkAll: false,
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
    render() {
        return (
            <div>
        <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker
                onChange={value => this.handleChange(value)}
            />
            <div style={{ marginTop: 20 }}>
                当前日期：{this.state.date.toString()}
            </div>
        </div>
        
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


