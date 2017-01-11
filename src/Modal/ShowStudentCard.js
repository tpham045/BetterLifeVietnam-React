const React = require('react')
import { Modal, Col, Thumbnail, Image} from 'react-bootstrap'

class ShowStudentCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    showModal: false
    }
  this.open = this.open.bind(this)
  this.close = this.close.bind(this)
  }
  open() {
    this.setState({
      showModal: true
    })
  }
  close() {
    this.setState({
      showModal: false
    })
  }
  
  render () {
    let ageText
    let bioText
    let sponsorText
    let detailText
    let readMoreLink
    let famImg
    
    if (this.props.age) {
      ageText = (<h5 style={{textIndent: '0'}}>{this.props.age} years old, {this.props.homeTown}</h5>)
    } else {
      ageText = (<h5 style={{textIndent: '0'}}>Born {this.props.birthYear}, {this.props.homeTown}</h5>)
    }
    if (this.props.bio) {
      bioText = (
        <div>
          <p><span><strong>Date of Birth: </strong></span> {this.props.bio.dateOfBirth}</p>
          <p><span><strong>School: </strong></span> {this.props.bio.school}</p>
          <p><span><strong>Address: </strong></span> {this.props.bio.address}</p>
        </div>)
    }
    if (this.props.sponsor) {
      sponsorText = (<p>Sponsored by {this.props.sponsor}</p>)
    }
    
    if (this.props.detail) {
      var reasonList = [];
      for (var i=0; i < this.props.detail.reason.length; i++){
        reasonList.push(<li>{ this.props.detail.reason[i] }</li>)
      }
      detailText = (
        <div>
          <h3>Proposed income generating model</h3>
          <p><span><strong>Title: </strong></span>{this.props.detail.title}</p>
          <p><strong>Reason for choosing this model</strong></p>
          <ul>{ reasonList }</ul>
          <p><span><strong>Size Of Business: </strong></span>{this.props.detail.sizeOfBusiness}</p>
          <p><span><strong>Total Estimated Investment: </strong></span>{this.props.detail.totalEstimatedInvestment}</p>
          <p><span><strong>Profit Off Investment: </strong></span>{this.props.detail.profitOffInvestment}</p>
          <p><span><strong>Estimated Income: </strong></span>{this.props.detail.estimatedIncome}</p>
          <p><span><strong>Profit Spending Plan: </strong></span>{this.props.detail.profitSpendingPlan}</p>
        </div>
        )
    }
    if (this.props.img2) {
      famImg = (<div className='imgDiv'><Image style={{maxWidth:'100%', maxHeight:'100%'}} src={process.env.PUBLIC_URL + '/images/studentsImg/' + this.props.img2}/></div>)
    }
    if (this.props.link1) {
      readMoreLink = (<a href={this.props.link1}>Read More</a>)
    }
    return (
      <Col xs={12} sm={4} style={{ maxHeight: '420px', maxWidth: '250px'}}>
        <Thumbnail src={process.env.PUBLIC_URL + '/images/studentsImg/' + this.props.img} onClick={this.open}>
          <div onClick={this.open}>
            <h3 style={{ color: '#00ba5d', cursor: 'pointer' }}>{this.props.name} { ageText }</h3>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d',fontSize: '1.2em'}}>{this.props.name}</Modal.Title>
                { bioText }
              </Modal.Header>
              <Modal.Body>
                { sponsorText }
                <h3>Circumstances</h3>
                <p>{this.props.story}</p>
                { famImg }
                { detailText }
                { readMoreLink }
              </Modal.Body>
            </Modal>
          </div>
        </Thumbnail>
      </Col>
    )
  }
}

const { string } = React.PropTypes

ShowStudentCard.propTypes = {
  name: string.isRequired,
  age: string,
  birthYear: string,
  bio: string,
  homeTown: string,
  sponsor: string,
  story: string.isRequired,
  detail: string,
  link1: string,
  img: string.isRequired,
  img2: string
}

module.exports = ShowStudentCard
