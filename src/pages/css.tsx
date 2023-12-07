import classnames from "classnames";
import CSS from "../style/css.module.css";

function Css() {
  const klass = classnames({
    [CSS.wrapper]: true,
  });
  return <div className={klass}>css</div>;
}

export default Css;
