import React from 'react'


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () =>  {
        this.setState( {
            editMode: true,
            status: this.props.status
        })
    }

    deactivateEditMode = () =>  {  
        this.setState( {
            editMode: false
        })
        this.props.updateStatus()
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div >
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input 
                        autoFocus={true} onBlur={this.deactivateEditMode} type="text" 
                        value={this.state.status} onChange={this.onStatusChange} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;