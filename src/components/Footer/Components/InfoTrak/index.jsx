import React from "react";

class InfoTrack extends React.Component {
  render() {
    return (
      this.props.playing && (
        <div className="track">
          <div className="track_image">
            <img src={this.props.playing.image} alt="image music" />
          </div>
          <div className="track_info">
            <h4>{this.props.playing.name}</h4>
            <h6>{this.props.playing.artists.join(", ")}</h6>
          </div>
        </div>
      )
    );
  }
}
export default InfoTrack;
