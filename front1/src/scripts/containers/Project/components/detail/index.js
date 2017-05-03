import React, {Component} from 'react';
import {Button, Table, Row, Col} from 'antd';
import {JobStatus} from '../../../../constant/index';
import {fromNow} from '../../../../utils/base';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/yaml/yaml';
const columns = [
  {
    title: '执行分支',
    dataIndex: 'branch',
    key: 'branch'
  }, {
    title: 'Commit',
    dataIndex: 'commit_msg',
    key: 'commit_msg'
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render(text) {
      return <span className={JobStatus[text].class}>{JobStatus[text].text}</span>
    }
  }, {
    title: '时间',
    dataIndex: 'duration',
    key: 'duration',
    render(text, record) {
      const duration = moment.duration(text);
      return <div>
        <span>耗时{`${duration.minutes()}分${duration.seconds()}秒`}
        </span>
        <br/>
        <span className="text-muted">
          开始于 {fromNow(Date.parse(new Date(record.start_time)))}
        </span>
      </div>
    }
  }
];

class JobDetail extends Component {
  fetchData = () => {
    this
      .props
      .dispatch({
        type: 'project/jobDetail',
        payload: {
          project_id: this.props.projectDetail.id,
          job_id: this.props.selectJobId
        }
      });
  }
  componentDidMount() {
    this.fetchData();
    const intervalId = setInterval(() => {
      this.fetchData();
      if (this.props.jobDetail.status != 1) {
        clearInterval(intervalId);
      }
    }, 2000);
    this.setState({intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const options = {
      lineNumbers: true,
      theme: 'material',
      readOnly: true
    };
    const {jobDetail, projectDetail} = this.props;
    const project_id = projectDetail.id;
    const duration = moment.duration(jobDetail.duration);

    return (
      <div>
        <div className={`detail-bar ${JobStatus[jobDetail.status].bgClass}`}>
          <Row >
            <Col span={4}>
              <h3>作业详情</h3>
            </Col>
            <Col span={4} offset={16}>
              <Button ghost onClick={this.props.closeJobDetail}>
                返回作业列表
              </Button>
            </Col>
          </Row>
          <Row style={{
            lineHeight: '30px'
          }}>
            <Col span={4}>
              {JobStatus[jobDetail.status].text}
            </Col>
            <Col span={6}>
              分支：{jobDetail.branch}
            </Col>
            <Col span={6}>耗时：{`${
              duration.minutes()}分${duration.seconds()}秒`}</Col>
            <Col span={6}>开始于： {fromNow(Date.parse(new Date(jobDetail.start_time)))}</Col>
          </Row>
        </div>
        <Row>
          <Col span={4}>
            <h4>
              作业日志：
            </h4>
          </Col>
        </Row>
        <CodeMirror value={jobDetail.log} options={options}/>
      </div>
    );
  }
}

class List extends Component {
  fetchData = () => {
    this
      .props
      .fetchJobList();
  }
  componentDidMount() {
    this.fetchData();
    const intervalId = setInterval(() => {
      this.fetchData();
    }, 2000);
    this.setState({intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const _columns = columns.concat([
      {
        title: '操作',
        render: (text, record) => {
          return <div>
            <a
              onClick={(e) => {
              e.preventDefault();
              this
                .props
                .showJobDetail(record.id);
            }}>查看详情</a>
          </div>
        }
      }
    ])
    return (
      <div>
        <Table
          rowKey="id"
          pagination={false}
          columns={_columns}
          dataSource={this.props.projectDetail.job}/>
      </div>
    );
  }
}

class WorkFlow extends Component {
  constructor() {
    super();
    this.state = {
      workflow: ''
    }
  }
  componentDidMount() {
    this.updateCode(this.props.projectDetail.workflow);
  }
  updateCode = (workflow) => {
    this.setState({workflow})
  }
  handleSaveWorkFlow = () => {
    this
      .props
      .dispatch({
        type: 'project/saveWorkFlow',
        payload: {
          project_id: this.props.projectDetail.id,
          workflow: this.state.workflow
        }
      })
  }
  render() {
    const options = {
      lineNumbers: true,
      theme: 'material'
    };
    return (
      <div>
        <CodeMirror
          value={this.state.workflow}
          onChange={this.updateCode}
          options={options}/>
        <Row>
          <Col span={4}>
            <Button type="primary" onClick={this.handleSaveWorkFlow}>
              保存流程
            </Button>
          </Col>
        </Row>

      </div>
    );
  }
}

class Setting extends Component {
  handleDeleteProject = () => {
    const {projectDetail, dispatch} = this.props;
    dispatch({
      type: 'project/deleteProject',
      payload: {
        id: projectDetail.id
      }
    })
  }
  render() {
    return (
      <div>
        <Button type="danger" onClick={this.handleDeleteProject}>
          删除项目
        </Button>
      </div>
    );
  }
}

export default {
  List : List,
  WorkFlow : WorkFlow,
  Setting : Setting,
  JobDetail : JobDetail
}