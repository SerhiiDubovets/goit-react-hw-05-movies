import { NotFoundBlock } from './NotFound.styled';
import notFound from '../../components/images/square_вектор-08.jpg';

const NotFound = () => {
  return (
    <NotFoundBlock>
      <img src={notFound} alt="Not Found" />
      <h2>404 Страница не найда :(</h2>
    </NotFoundBlock>
  );
};

export default NotFound;
