import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom, { InnerImageZoomProps } from 'react-inner-image-zoom';
import PropTypes from 'prop-types';

function App(props: InnerImageZoomProps) {
  return (
    <InnerImageZoom  zoomType="hover" zoomPreload={true} {...props}/>
  )
}
App.propTypes = {
  src: PropTypes.string,
  zoomtype: PropTypes.string,
  zoompreload: PropTypes.bool
}
export default App
