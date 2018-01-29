import React from 'react';

export default class VideoPlayer extends React.Component {

  constructor() {
    super();
    this.state = {
      currentVideoId: null
    };
  }

  playVideo(videoId) {
    this.setState(() => {
      currentVideoId: videoId;
    });
  }

  parseVideos() {
    return _.map(this.props.domNode.children, video => {
      const title = video.children.item('h2') ? video.children.item('h2').innerText : '';
      const description = video.children.item('p') ? video.children.item('p').innerText : '';
      return {
        id: video.attributes['id'].value,
        title,
        description,
      };
    });
  }

  renderVideoList(videos) {
    return _.map(videos, video => {
      return (
        <li
          key={video.id}
          onClick={() => {
            this.setState(() => ({
              currentVideoId: video.id
            }));
          }}
        >
          <img
            src={`http://img.youtube.com/vi/${video.id}/default.jpg`}
          />
          <h3>{video.title}</h3>
          <p>{video.title}</p>
        </li>
      );
    });
  }

  renderVideoViewer(videos) {
    if (videos.length <= 0) {
      return;
    }

    const videoId = this.state.currentVideoId || videos[0].id;
    return (
      <div className="video-player video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          width="640"
          height="385"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  render() {
    const videos = this.parseVideos();
    return (
      <div className="video-player-container">
        {this.renderVideoViewer(videos)}
        <ul>{this.renderVideoList(videos)}</ul>
      </div>
    );
  }
}
