import { useRouteError } from 'react-router-dom';
import { ReactComponent as ErrorIcon } from '../assets/icon-error.svg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <div></div>
      <div className='error-box'>
        <ErrorIcon className='error__icon' />
        <h4 className='error__message'>This Page Does Not Exist</h4>
      </div>
    </div>
  );
}
