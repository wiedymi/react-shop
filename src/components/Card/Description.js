import React, { Component } from 'react'
import ReadMoreAndLess from 'react-read-more-less';

class Description extends Component {
    render() {
        return (
            <div className="m-top text-break-and-justify desktop">
                <ReadMoreAndLess
                ref={this.ReadMore}
                className="m-top"
                charLimit={350}
                readMoreText=" Read more"
                readLessText=" Read less"
                >
                    {this.props.description}
                </ReadMoreAndLess>
            </div>
        )
    }
}

export default Description
