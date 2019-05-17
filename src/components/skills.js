import React, {Component} from 'react';
import { Line } from 'rc-progress';

class Skills extends Component{
    

    render(){

        return(
            <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--12-col">
                        <p>{this.props.skill}</p>

                        <Line percent={this.props.percent} strokeWidth="0.8" strokeColor="#0c87ff" trailWidth="0.3" trailColor="#D3D3D3" />
                 
                    </div>
            </div>
        );
    }
}

export default Skills;
       //<Circle style={{width: '80px'}} percent="80" strokeWidth="7" strokeColor="#e22947" trailWidth="1.5" trailColor="#0c87ff" prefixCls="rc-progress" />-->