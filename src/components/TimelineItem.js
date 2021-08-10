import React from 'react';

class TimelineItem extends React.Component {
    state = {
      data : this.props.data
    }
    render() {
    console.log(this.state.data.streaming)
      return(
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: this.state.data.category.color }}>
                {this.state.data.category.tag}
            </span>
            <time>{this.state.data.date}</time>
            <p>{this.state.data.text}</p>
            {this.state.data.link && (
                <a
                    href={this.state.data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {this.state.data.link.text}
                </a>
            )}
            {this.state.data.streaming ? ( 
                <ul>
                    {
                        this.state.data.streaming.disney
                        ? <a href={this.state.data.streaming.disney} rel="noreferrer" target="_blank">
                        <img  width="40px" 
                            height="40px" 
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cd82ff4-fa94-4020-9a16-f41089efc593/dd5d95n-46013979-82a8-4fae-ac31-fd4865a8d99d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGNkODJmZjQtZmE5NC00MDIwLTlhMTYtZjQxMDg5ZWZjNTkzXC9kZDVkOTVuLTQ2MDEzOTc5LTgyYTgtNGZhZS1hYzMxLWZkNDg2NWE4ZDk5ZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mL37S_siI4svhpddNLPe-E__VgYmMDwTea5XNYBGp0k" 
                            alt=""/>
                    </a>
                        : ""
                    }
                    {
                        this.state.data.streaming.netflix
                        ? <a href={this.state.data.streaming.netflix} rel="noreferrer" target="_blank">
                        <img  width="40px" 
                            height="40px" 
                            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" 
                            alt=""/>
                    </a>
                        : ""
                    }
                    {
                        this.state.data.streaming.yt 
                        ? <a href={this.state.data.streaming.yt} rel="noreferrer" target="_blank">
                        <img  width="40px" 
                            height="40px" 
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FMedia_Controls%2Fyoutube_play1600.png&f=1&nofb=1" 
                            alt=""/>
                    </a>
                        : ""
                    }
                    {
                        this.state.data.streaming.prime 
                        ? <a href={this.state.data.streaming.prime} rel="noreferrer" target="_blank">
                        <img  width="40px" 
                            height="40px" 
                            src="https://appforwin10.com/wp-content/uploads/2018/12/Amazon-Prime-Video-Free-Download-for-Windows-10.png" 
                            alt=""/>
                    </a>
                        : ""
                    }
                </ul>
            ) :""}
            <img src={this.state.data.icon} alt={""} className="circle" />
        </div>
    </div>
  );
  }
  }
  export default TimelineItem;