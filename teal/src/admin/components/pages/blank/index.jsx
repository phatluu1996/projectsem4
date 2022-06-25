import React, { Component } from 'react';
import OpenChat from "../../sidebar/openchatheader";

class BlankPage extends Component{
    
    render(){
        return(
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="page-title">Blank Page</h4>
                        </div>
                    </div>
                </div>
                <OpenChat/>
            </div>
    
        );
    }
}
export default BlankPage