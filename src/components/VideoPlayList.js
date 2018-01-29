import React from 'react';

export default class VideoPlayer extends React.Component {

  render() {
    const playlistId = this.props.domNode.getAttribute('id');
    const src = `https://www.youtube.com/embed/?showinfo=1&listType=playlist&list=${playlistId}`;
    return (
      <div className="video-player video-responsive">
        <iframe
          type="text/html"
          width="640"
          height="385"
          src={src}
          frameBorder="0"
          allowFullScreen />
      </div>
    );
  }
}
