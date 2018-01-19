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
    return _.map(this.props.domNode, video => {
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

    if (this.state.currentVideoId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${this.state.currentVideoId}`}
          frameborder="0"
          width="640"
          height="385"
          allowfullscreen
        />
      );
    }

    return (
      <div>
        <img
          src={`http://img.youtube.com/vi/${videos[0].id}/default.jpg`}
        />
        <div className="play" />
      </div>
    );
  }

  render() {
    const videos = this.parseVideos();
    return (
      <div>
        {this.renderVideoViewer(videos)}
        <ul>{this.renderVideoList(videos)}</ul>
      </div>
    );
  }
}
