import React, {
  Component,
  PropTypes,
} from 'react';

import classNames from 'classnames';

export class GuideDemo extends Component {
  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    // Inject HTML
    this.content.innerHTML = this.props.html;

    // Inject JS
    const js = document.createElement('script');
    js.type = 'text/javascript';
    js.innerHTML = this.props.js;
    this.content.appendChild(js);

    // Inject CSS
    const css = document.createElement('style');
    css.innerHTML = this.props.css;
    this.content.appendChild(css);
  }

  render() {
    const classes = classNames('guideDemo', {
      'guideDemo--fullScreen': this.props.isFullScreen,
      'theme-dark': this.props.isDarkTheme,
    });

    return (
      <div className={classes} ref={c => (this.content = c)}>
      </div>
    );
  }
}

GuideDemo.propTypes = {
  js: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

GuideDemo.defaultProps = {
  js: '',
  html: '',
  css: '',
  isFullScreen: false,
  isDarkTheme: false,
};
