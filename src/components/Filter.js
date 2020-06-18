import React from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { updateFilter } from '../actions/notes'

class Filter extends React.Component {

  handleChange = (e) => {
    this.props.updateFilter(e.value)
  }

  render() {
    const options = [{value: 'all', label: 'All'},
        {value: 'completed', label: 'Completed'},
        {value: 'active', label: 'Active'}]

    return <Select onChange={this.handleChange} options={options} />
  }
}


const mapDispatchToProps = {
  updateFilter
}

export default connect(null, mapDispatchToProps)(Filter)