import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLogged } from 'Redux/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = component => {
  const isLogged = useSelector(selectIsLogged);

  return isLogged ? <Navigate to="/contacts" /> : component.component;
};

PublicRoute.propTypes = {
  component: PropTypes.node,
}; 