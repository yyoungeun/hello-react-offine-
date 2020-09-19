import React from "react";
import PropTypes from "prop-types";

//class component에서 props사용
/*
    class MyComponent extends Component {
    render() {
    const { name, favoriteNumber, children } = this.props; //비구조화 할당
*/

const MyComponent = ({ name, favoriteNumber, children }) => {
  //const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children} 입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
