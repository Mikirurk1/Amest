import React from 'react'



class StutusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }


    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }
    deactivatedActivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
onStatusChange(text){
    this.setState({
        status: text.currentTarget.value
    })

}
    render() {
        
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status !==""?this.props.status:"user dont say about yourself"}</span>
                    </div >
                    :
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange.bind(this)} value={this.state.status} onBlur={this.deactivatedActivateEditMode.bind(this)} type="text" />
                    </div>
                }
            </>)
    }
}
export default StutusContainer;