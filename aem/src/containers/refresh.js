import React, { Component } from 'react';
import Column1 from '../components/Column1';
import Column2 from '../components/Column2';
import Slick from '../components/Slick';

export default class Refresh extends Component {
  renderTemplates() {
    const { refresh } = this.props;

    return refresh.map((template) => {
      // return (
      //   <div className="template-item" key={template.key}>
      //     <p>{template.template}</p>
      //   </div>
      // );

      switch (template.template) {
        case '1-column':
          return <Column1 html={template.html} key={template.key} />;
        case '2-column':
          return <Column2 html={template.html} key={template.key} />;
        case 'slick':
          return <Slick html={template.html} key={template.key} />;
        default:
          return (
            <div className="refresh__empty" key="0" />
          );
      }
    });
  }

  render() {
    return (
      <div className="refresh">
        {this.renderTemplates()}
      </div>
    );
  }
}
