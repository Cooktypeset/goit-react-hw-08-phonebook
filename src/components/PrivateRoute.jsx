import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectIsRefreshing } from 'Redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = component => {
  const isLoggedIn = useSelector(selectIsLogged);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/" /> : component.component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
};   