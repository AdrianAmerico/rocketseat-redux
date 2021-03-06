import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Modulo {activeModule.title}</strong>
      <strong>Aula {activeLesson.title}</strong>
    </div>
  );
};

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
