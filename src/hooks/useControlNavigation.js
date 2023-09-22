import { useNavigate, useLocation } from 'react-router-dom';

function useControlNavigation() {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  const goToChosenPage = (choice) => navigate(`${choice.key}`);

  const selectedKey = useLocation().pathname;

  const highlightActiveLink = () => {
    switch (selectedKey) {
    case '/':
      return ['/'];
    case '/createpost':
      return ['createpost'];
    case '/contacts':
      return ['contacts'];
    case '/login':
      return ['login'];
    default:
      return ['not found'];
    }
  };

  return {
    highlightActiveLink,
    goHome,
    goToChosenPage,
  };
}

export { useControlNavigation };
